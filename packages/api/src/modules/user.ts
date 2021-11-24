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
  updateUser(id: ID!, input: UpdateUserInput!): User

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

input UpdateUserInput {
  email: String
  phone: String
}
`;

interface UpdateUserInput {
    email: string
    phone: string
}

export const UserResolver = {
    Query: {
        getUsers: async (_parent: any, _args: any, ctx: Context) => {
            return await ctx.prisma.user.findMany()
        },
        getUser: async (_parent: any, args: { id: string }, ctx: Context) => {
            return await ctx.prisma.user.findUnique({
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
        deleteAccount: async (_parent: any, args: { input: { email: any } }, ctx: Context) => {
            const {email} = args.input
            return await ctx.prisma.user.delete({
                where: {email},
            })
        },
        updateUser: async (_parent: any, args: {
            id: string,
            input: UpdateUserInput
        }, ctx: Context) => {
            return await ctx.prisma.user.update({
                where: {id: args.id},
                data: {...args.input}

            })
        }
    },

};

