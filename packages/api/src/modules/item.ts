import {Context} from "../context";
import {Category} from '@prisma/client'

export const Item = `

    type Recipe {
        itemId: ID!
        ingredient: Ingredient
    }

    type Item {
        id: ID!
        name: String
        price: String
        category: String
        description: String
        ingredients: [Recipe]
        storeId: ID
    }
    
    type Query {
        getItems: [Item]
        storeItemsByCategory(storeId: ID!, category: String!): [Item]
        getItem(id: ID!): Item
        }
    
    type Mutation {
        createItem(input: CreateItemInput!): Item
        deleteItem(id: ID!): Item
        updateItem(id: ID!, input: UpdateItemInput!): Item
    }
    
    input CreateItemInput {
        name: String,
        price: Float,
        category: String,
        description: String 
        ingredients: [String]
        storeId: ID
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
    category: Category,
    description: string,
    ingredients: [string],
    storeId: string
}

interface UpdateItemInput {
    name: string,
    price: number,
    category: Category,
    description: string
}

export const ItemResolver = {

    Query: {
        getItems: async (_parents: any, _args: any, ctx: Context) => {
            return await ctx.prisma.item.findMany({
                include: {
                    ingredients: {
                        select: {
                            itemId: true,
                            ingredient: true
                        }
                    },
                }
            });
        },
        storeItemsByCategory: async (_parents: any, _args: { storeId: string, category: Category }, ctx: Context) => {
            return await ctx.prisma.item.findMany({
                where: {
                    OR: [{
                        storeId: _args.storeId,
                    }, {
                        storeId: null,
                    }],
                    category: _args.category
                },
                include: {
                    ingredients: {
                        select: {
                            itemId: true,
                            ingredient: true
                        }
                    },
                }
            });
        },
        getItem: async (_parents: any, _args: { id: string }, ctx: Context) => {
            return await ctx.prisma.item.findUnique({
                where: {id: _args.id}
            })
        }
    },
    Mutation: {
        createItem: async (_parents: any, args: { input: CreateItemInput }, ctx: Context) => {
            const {ingredients: ingredientsData, ...itemData} = args.input;

            const ingredients = {
                create: ingredientsData.map((id: string) => ({
                    ingredient: {
                        connect: {
                            id
                        }
                    }
                }))
            }


            return await ctx.prisma.item.create({
                data: {
                    ...itemData,
                    ingredients
                }
            })
        },
        updateItem: async (_parents: any, args: { id: string, input: UpdateItemInput }, ctx: Context) => {
            return await ctx.prisma.item.update({
                where: {id: args.id},
                data: {...args.input}
            })
        },
        deleteItem: async (_parents: any, args: { id: string }, ctx: Context) => {
            return ctx.prisma.item.delete({
                where: {id: args.id}
            })
        }
    }
};
