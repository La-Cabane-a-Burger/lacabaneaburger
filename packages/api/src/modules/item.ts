import {Context, prisma} from "../context";
import {Ingredient, ItemType} from '@prisma/client'

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
        type: String
        description: String
        capacity: Float
        ingredients: [Recipe]
        menu: Menu
        storeId: ID
        store: Store
    }
    
    type Query {
        getItems: [Item]
        storeItemsByType(storeId: ID!, type: String!): [Item]
        landingItems: [Item]
        getItem(id: ID!): Item
        }
    
    type Mutation {
        createItem(input: CreateItemInput!): Item
        deleteItem(id: ID!): Item
        updateItem(id: ID!, input: UpdateItemInput!): Item
    }
    
    input ingredientItemInput {
        id: String
    }
    
    input CreateItemInput {
        name: String,
        price: Float,
        category: String,
        description: String 
        ingredients: [ingredientItemInput]
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
    category: ItemCategory,
    type: ItemType,
    description: string,
    ingredients: [Ingredient],
    storeId: string
}

interface UpdateItemInput {
    name: string,
    price: number,
    category: ItemCategory,
    type: ItemType,
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
        storeItemsByType: async (_parents: any, _args: { storeId: string, type: ItemType }, ctx: Context) => {
            return await ctx.prisma.item.findMany({
                where: {
                    OR: [{
                        storeId: _args.storeId,
                    }, {
                        storeId: null,
                    }],
                    type: _args.type
                },
                include: {
                    ingredients: {
                        select: {
                            itemId: true,
                            ingredient: true
                        }
                    },
                    menu: {
                        select: {
                            id: true,
                            name: true,
                            price: true
                        }
                    }
                }
            });
        },
        landingItems: async (_parents: any) => {

            const store = await prisma.store.findUniqueOrThrow({
                where: {
                    slug: "pontchateau"
                }
            })

            return await prisma.item.findMany({
                where: {
                    OR: [{
                        name: "Montagnard"
                    }, {
                        name: "Savoyard"
                    }, {
                        name: "Gaulois"
                    }],
                    storeId: store.id
                },
                include: {
                    ingredients: {
                        select: {
                            itemId: true,
                            ingredient: true
                        }
                    }
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
                create: ingredientsData.map((i: Ingredient) => ({
                    ingredient: {
                        connect: {
                            id: i.id
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
