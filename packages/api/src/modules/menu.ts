import { Context } from '../context'
export const Menu = `
    type Menu {
        id: ID!
        name: String
        price: Float
        category: String
        description: String
        MenuItems: [String]
    }

    type Query {
        getMenus: [Menu]
        getMenu(id: ID!): Menu
    }
    
    type Mutation {
        createMenu(input: CreateMenuInput): Menu
        updateMenu(id: ID!, input: UpdateMenuInput): Menu
        deleteMenu(id: ID!): Menu
    }

    input CreateMenuInput {
        name: String
        price: Float
        category: String
        description: String
        MenuItems: [String]
    }

    input UpdateMenuInput {
        name: String
        price: Float
        category: String
        description: String
        MenuItems: [String]
    }
    
`

interface CreateMenuInput {
  name: string
  price: number
  category: string
  description: string
  MenuItems: string[]
}

interface UpdateMenuInput {
  name: string
  price: number
  category: string
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
        where: { id: args.id },
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
        data: { ...args.input },
      })
      return menu
    },
    updateMenu: async (
      _parent: any,
      args: { id: string; input: UpdateMenuInput },
      ctx: Context,
    ) => {
      const menu = await ctx.prisma.menu.update({
        where: { id: args.id },
        data: { ...args.input },
      })
      return menu
    },
    deleteMenu: async (_parent: any, args: { id: string }, ctx: Context) => {
      return ctx.prisma.menu.delete({
        where: { id: args.id },
      })
    },
  },
}
