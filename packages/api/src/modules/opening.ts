export const Opening = `
    type Opening {
        id: ID!
        weekday: String
        start: String
        end: String
        store: Store
    }

    type Query {
        getOpenings: [Opening]
        getOpening(id: ID!): Opening
    }

    type Mutation {
        createOpening(input: CreateOpeningInput!): Opening
        deleteOpening(id: ID!): Opening
        updateOpening(id: ID!, input: UpdateOpeningInput!): Opening
    }

    input CreateOpeningInput {
        weekday: String
        start: String
        end: String
        storeId: String
    }

    input UpdateOpeningInput {
        weekday: String
        start: String
        end: String
        storeId: String
    }
`

interface CreateOpeningInput {
    weekday: number,
    start: string,
    end: string,
    storeId: string
}

interface UpdateOpeningInput {
    weekday: number,
    start: string,
    end: string,
    storeId: string
}

export const OpeningResolver = {
    Query: {
        getOpenings: (_parents: any, _args: any, ctx: Context) => {
            return ctx.prisma.opening.findMany();
        },
        getOpening: (_parents: any, _args: { id: string }, ctx: Context) => {
            return ctx.prisma.opening.findUnique({
                where: {id: _args.id}
            });
        }
    },
    Mutation: {
        createOpening: async (_parent: any, args: { input: CreateOpeningInput }, ctx: Context) => {

            let opening = await ctx.prisma.opening.create({
                data: {...args.input}
            })

            return opening;
        },
        updateOpening: async (_parent: any, args: { id: string, input: UpdateOpeningInput }, ctx: Context) => {
            const opening = await ctx.prisma.opening.update({
                where: {id: args.id},
                data: {...args.input},
            })
            return opening;
        },
        deleteOpening: (_parents: any, args: { id: string }, ctx: Context) => {
            return ctx.prisma.opening.delete({
                where: {id: args.id}
            })

        }
    }
};
