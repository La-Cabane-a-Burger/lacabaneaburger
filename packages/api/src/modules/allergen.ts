import { Context } from '../context'

export const Allergen = `
    type Allergen {
        id: ID!
        name: Int
        category: String
    }

    type Query {
        getAllergens: [Allergen]
        getAllergen(id: ID!): Allergen
    }

    type Mutation {
        createAllergen(name: Int, category: String): Allergen
        updateAllergen(id: ID!, name: Int, category: String): Allergen
        deleteAllergen(id: ID!): Allergen
    }

    input CreateAllergenInput {
        name: Int
        category: String
    }

    input UpdateAllergenInput {
        name: Int
        category: String
    }
`
interface CreateAllergenInput {
  name: string
  category: string
}

interface updateAllergenInput {
  name: string
  category: string
}

export const AllergenResolver = {
  Query: {
    getAllergens: (_parent: any, _args: any, ctx: Context) => {
      return ctx.prisma.allergen.findMany()
    },
    getAllergen: (_parent: any, args: { id: string }, ctx: Context) => {
      return ctx.prisma.allergen.findUnique({
        where: { id: args.id },
      })
    },
  },
  Mutation: {
    createAllergen: async (
      _parent: any,
      args: { input: CreateAllergenInput },
      ctx: Context,
    ) => {
      let allergen = await ctx.prisma.allergen.create({
        data: { ...args.input },
      })

      return allergen
    },
    updateAllergen: async (
      _parent: any,
      args: { id: string; input: updateAllergenInput },
      ctx: Context,
    ) => {
      const allergen = await ctx.prisma.allergen.update({
        where: { id: args.id },
        data: { ...args.input },
      })
      return allergen
    },
    deleteAllergen: (_parents: any, args: { id: string }, ctx: Context) => {
      return ctx.prisma.allergen.delete({
        where: { id: args.id },
      })
    },
  },
}
