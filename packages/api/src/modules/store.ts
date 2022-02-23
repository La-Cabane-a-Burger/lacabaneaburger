import {Context} from "../context";

export const Store = `
    type Store {
        id: ID!
        city: String!
        slug: String!
        phone: String
        postal_code: Int
        address: String
        latitude: Float
        longitude: Float
        openings: [Opening]
    }

    type Query {
        getStores: [Store]
        getStore(id: ID!): Store
        getStoreBySlug(slug: String!): Store
    }

    type Mutation {
        createStore(input: CreateStoreInput!): Store
        deleteStore(id: ID!): Store
        updateStore(id: ID!, input: UpdateStoreInput!): Store
    }

    input CreateStoreInput {
        city: String!
        slug: String!
        phone: String
        postal_code: Int
        address: String
        latitude: Float
        longitude: Float
    }

    input UpdateStoreInput {
        city: String
        slug: String
        phone: String
        postal_code: Int
        address: String
        latitude: Float
        longitude: Float
    }
`

interface CreateStoreInput {
    city: string,
    slug: string,
    phone: string,
    postal_code: number,
    address: string,
    latitude: number,
    longitude: number
}

interface UpdateStoreInput {
    city: string,
    slug: string,
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
            getStore: (_parents: any, args: { id: string }, ctx: Context) => {
                return ctx.prisma.store.findUnique({
                    where: {id: args.id},
                    include: {openings: true}

                });
            },
            getStoreBySlug: (_parents: any, args: { slug: string }, ctx: Context) => {
                return ctx.prisma.store.findUnique({
                    where: {slug: args.slug},
                    include: {openings: true}
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
