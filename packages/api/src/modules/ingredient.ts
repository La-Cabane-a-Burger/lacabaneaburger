import { Context } from '../context'

export const Ingredient = `
    type Ingredient {
        id: ID!
        name: String!
        category: String
        price: Float!
        allergens: [String]
    }

    type Query {
        getIngredients: [Ingredient]
        getIngredient(id: ID!): Ingredient
    }

    type Mutation {
        createIngredient(input: CreateIngredientInput): Ingredient
        updateIngredient(id: ID!,input: UpdateIngredientInput): Ingredient
        deleteIngredient(id: ID!): Ingredient
    }

    input CreateIngredientInput {
        name: String!
        category: String
        price: Float!
        allergens: [String]
    }

    input UpdateIngredientInput {
        id: ID!
        name: String
        category: String
        price: Float
        allergens: [String]
    }
        
`
interface CreateIngredientInput {
  name: string
  category: string
  price: number
  allergens: string[]
}

interface UpdateIngredientInput {
  name: string
  category: string
  price: number
  allergens: string[]
}

export const IngredientResolver = {
  Query: {
    getIngredients: async (_parent: any, _args: any, ctx: Context) => {
      return ctx.prisma.ingredient.findMany()
    },
    getIngredient: async (_parent: any, args: any, ctx: Context) => {
      return ctx.prisma.ingredient.findUnique({
        where: { id: args.id },
      })
    },
  },
  Mutation: {
    createIngredient: async (
      _parent: any,
      args: { input: CreateIngredientInput },
      ctx: Context,
    ) => {
      let ingredient = await ctx.prisma.ingredient.create({
        data: { ...args.input },
      })
      return ingredient
    },
    updateIngredient: async (
      _parent: any,
      args: { id: string; input: UpdateIngredientInput },
      ctx: Context,
    ) => {
      const ingredient = await ctx.prisma.ingredient.update({
        where: { id: args.id },
        data: { ...args.input },
      })
      return ingredient
    },
    deleteIngredient: async (
      _parent: any,
      args: { id: string },
      ctx: Context,
    ) => {
      return ctx.prisma.ingredient.delete({
        where: { id: args.id },
      })
    },
  },
}
