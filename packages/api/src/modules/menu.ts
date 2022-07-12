import {Context, prisma} from '../context'
import {ItemType} from "@prisma/client";

export const Menu = `
    type Menu {
        id: ID!
        name: String
        price: Float
        type: String
        description: String
        MenuItems: [String]
    }

    type Query {
        getMenus: [Menu]
        getMenu(id: ID!): Menu
        getKidMenuByStore(storeId: ID!): Menu
    }
    
    type Mutation {
        createMenu(input: CreateMenuInput): Menu
        updateMenu(id: ID!, input: UpdateMenuInput): Menu
        deleteMenu(id: ID!): Menu
    }

    input CreateMenuInput {
        name: String
        price: Float
        type: String
        description: String
        MenuItems: [String]
    }

    input UpdateMenuInput {
        name: String
        price: Float
        type: String
        description: String
        MenuItems: [String]
    }
    
`

interface CreateMenuInput {
    name: string
    price: number
    type: string
    description: string
    MenuItems: string[]
}

interface UpdateMenuInput {
    name: string
    price: number
    type: string
    description: string
    MenuItems: string[]
}

export const MenuResolver = {
    Query: {
        getMenus: async (_parent: any, _args: any, ctx: Context) => {
            return ctx.prisma.menu.findMany()
        },
        getMenu: async (_parent: any, args: any, ctx: Context) => {
            return ctx.prisma.menu.findUnique({
                where: {id: args.id},
            })
        },
        getKidMenuByStore: async (_parent: any, args: { storeId: string }, ctx: Context) => {
            return prisma.menu.findFirst({
                where: {storeId: args.storeId, type: ItemType.KID},
            })
        },
    },
    Mutation: {
        createMenu: async (
            _parent: any,
            args: { input: CreateMenuInput },
            ctx: Context,
        ) => {
            let menu = await ctx.prisma.menu.create({
                data: {...args.input},
            })
            return menu
        },
        updateMenu: async (
            _parent: any,
            args: { id: string; input: UpdateMenuInput },
            ctx: Context,
        ) => {
            const menu = await ctx.prisma.menu.update({
                where: {id: args.id},
                data: {...args.input},
            })
            return menu
        },
        deleteMenu: async (_parent: any, args: { id: string }, ctx: Context) => {
            return ctx.prisma.menu.delete({
                where: {id: args.id},
            })
        },
    },
}
