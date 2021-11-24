import {Context} from "../context";
import {compare, hash} from "bcryptjs";
import {sign} from "jsonwebtoken";

export const User = ` 
  type User {
    id: ID!
    email: String!
    password: String!
    role: String
    phone: String
    orders: [Order]
  }
  
  type AuthPayload {
  token: String!
  user: User
}

type Query {
  getUsers: [User]
  getUser(id: ID!): User
}

type Mutation {
  signUp(input: SignUpInput!): AuthPayload!
  signIn(input: SignInInput!): AuthPayload!
  deleteAccount(input: SignInInput!): String!
}

input SignUpInput {
  email: String!
  password: String!
  phone: String!
}

input SignInInput {
  email: String!
  password: String!
}
`;

export const UserResolver = {
    Query: {
        getUsers: (_parent: any, _args: any, ctx: Context) => {
            return ctx.prisma.user.findMany()
        },
        getUser: (_parent: any, args: { id: string }, ctx: Context) => {
            return ctx.prisma.user.findUnique({
                where: {id: args.id},
            })
        },
    },
    Mutation: {
        signUp: async (_parent: any, args: { input: { email: any, password: any, phone: any } }, ctx: Context) => {
            const {email, password, phone} = args.input

            const existingUser = await ctx.prisma.user.findUnique({
                where: {email}
            })
            if (existingUser) {
                throw new Error(`Email ${email} already exists.`)
            }
            let user = await ctx.prisma.user.create({
                data: {
                    email,
                    password: await hash(password, 10),
                    phone
                }
            })
            return {
                token: sign({userId: user.id}, "secret", {expiresIn: "15m"}),
                user,
            }
        },
        signIn: async (_parent: any, args: { input: { email: any; password: any } }, ctx: Context) => {
            const {email, password} = args.input
            const user = await ctx.prisma.user.findUnique({
                where: {email}
            })
            if (!user) {
                throw new Error(`No user found for email: ${email}`)
            }
            let match = await compare(password, user.password)
            if (!match) {
                throw new Error('Invalid password')
            }
            return {
                token: sign({userId: user.id}, "secret", {expiresIn: "15m"}),
                user,
            }
        },
        deleteAccount: (_parent: any, args: { input: { email: any } }, ctx: Context) => {
            const {email} = args.input
            return ctx.prisma.user.delete({
                where: {email},
            })
        }
    },

};

