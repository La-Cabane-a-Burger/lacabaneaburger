import { Context } from "../context";

export const Allergen = `
    type Allergen {
        id: ID!
        name: Int
        category: String
    }
`

export const AllergenResolver = {
    Query: {
        getAllergens: (_parent: any, _args: any, ctx: Context) => {
            return ctx.prisma.allergen.findMany()
        },
        getAllergen: (_parent: any, args: { id: string }, ctx: Context) => {
            return ctx.prisma.allergen.findUnique({
                where: {id: args.id},
            })
        },
    }
    
};
