import {Context} from "../context";

export const Item = `
    type Item {
        id: ID!
        name: String
        price: String
        category: String
        description: String
    }
    
    type Query {
        getItems: [Store]
        getItem(id: ID!): Store
        }
    
    type Mutation {
        createItem(input: CreateItemInput!): Store
        deleteItem(id: ID!): Store
        updateItem(id: ID!, input: UpdateItemInput!): Store
    }
    
    input CreateItemInput {
        name: String,
        price: Float,
        category: String,
        description: String 
    }
    
    input UpdateItemInput {
        name: String,
        price: Float,
        category: String,
        description: String 
    }    
`

interface CreateItemInput {
    name: string,
    price: number,
    category: string,
    description: string
}

interface UpdateItemInput {
    name: string,
    price: number,
    category: string,
    description: string
}

export const ItemResolver = {

    Query: {
        getItems: async (_parents: any, _args: any, ctx: Context) => {
            return await ctx.prisma.item.findMany();
        },
        getItem: async (_parents: any, _args: { id: string }, ctx: Context) => {
            return await ctx.prisma.item.findUnique({
                where: {id: _args.id}
            })
        }
    },
    Mutation: {
        createItem: async (_parents: any, args: { input: CreateItemInput }, ctx: Context) => {
            return await ctx.prisma.item.create({
                data: {...args.input}
            })
        },
        updateItem: async (_parents: any, args: { id: string, input: UpdateItemInput }, ctx: Context) => {
            return await ctx.prisma.item.update({
                where: {id: args.id},
                data: {...args.input}
            })
        },
        deleteItem: async (_parents: any, args: { id: string }, ctx: Context) => {
            return ctx.prisma.store.delete({
                where: {id: args.id}
            })
        }
    }
};
