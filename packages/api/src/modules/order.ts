import {Context} from "../context";

export const Order = `
    type Order {
        id: ID!
        user: User
        store: Store
        price: Int!
        date: String!
        items: [Item]
    }
    
    type Query {
        getOrders: [Order]
        getOrder(id: ID!): Order
    }
    
    type Mutation {
        createOrder(input: CreateOrderInput!): Order
    }
    
    input CreateOrderInput {
        userId: String!,
        storeId: String!,
        price: Float!,
        items: [String]
    }
`

interface CreateOrderInput {
    userId: string,
    storeId: string,
    price: number,
    OrderItems: [string]
}

export const OrderResolver = {
    Query: {
        getOrders: async (_parents: any, _args: any, ctx: Context) => {
            return await ctx.prisma.order.findMany();
        },
        getOrder: async (_parents: any, args: { id: string }, ctx: Context) => {
            return await ctx.prisma.order.findUnique({
                where: {id: args.id}
            })
        }
    },
    Mutation: {
        createOrder: async (_parents: any, args: { input: CreateOrderInput }, ctx: Context) => {
            const {OrderItems, ...orderData} = args.input;

            return await ctx.prisma.order.create({
                data: {
                    date: new Date(),
                    orderItems: {
                        create: OrderItems.map(name => ({
                            item: {
                                connect: {name}
                            }
                        }))
                    },
                    ...orderData
                },
            })
        }
    }
};
