import {Context} from "../context";

export const Store = `
    type Store {
        id: ID!
        city: String!
        phone: String
        postal_code: Int
        address: String
        latitude: Int
        longitude: Int
        openings: [Opening]
    }
    
    type Query {
        getStores: [Store]
        getStore(id: ID!): Store
    }
    
    type Mutation {
        createStore(input: CreateStoreInput!): Store
        deleteStore(id: ID!): Store
        updateStore(id: ID!, input: UpdateStoreInput!): Store
    }
    
    input CreateStoreInput {
        city: String!
        phone: String
        postal_code: Int
        address: String
        latitude: Int
        longitude: Int    
    }
    
    input UpdateStoreInput {
        city: String
        phone: String
        postal_code: Int
        address: String
        latitude: Int
        longitude: Int    
    }
`

interface CreateStoreInput {
    city: string,
    phone: string,
    postal_code: number,
    address: string,
    latitude: number,
    longitude: number
}

interface UpdateStoreInput {
    city: string,
    phone: string,
    postal_code: number,
    address: string,
    latitude: number,
    longitude: number
}

export const StoreResolver = {
        Query: {
            getStores: (_parents: any, _args: any, ctx: Context) => {
                return ctx.prisma.store.findMany();
            },
            getStore: (_parents: any, _args: { id: string }, ctx: Context) => {
                return ctx.prisma.store.findUnique({
                    where: {id: _args.id}
                });
            }
        },
        Mutation: {
            createStore: async (_parent: any, args: { input: CreateStoreInput }, ctx: Context) => {

                return await ctx.prisma.store.create({
                    data: {...args.input}
                })

            },
            updateStore: async (_parent: any, args: { id: string, input: UpdateStoreInput }, ctx: Context) => {
                return await ctx.prisma.store.update({
                    where: {id: args.id},
                    data: {...args.input}
                })
            },
            deleteStore: (_parents: any, args: { id: string }, ctx: Context) => {
                return ctx.prisma.store.delete({
                    where: {id: args.id}
                })

            }
        }
    }
;
