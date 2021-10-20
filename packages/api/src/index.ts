import 'reflect-metadata'
import * as tq from 'type-graphql'
import { DateTimeResolver } from 'graphql-scalars'
import { context } from './context'
import { GraphQLScalarType } from 'graphql'
import {ApolloServer} from "apollo-server";

const app = async () => {
    const schema = await tq.buildSchema({
        resolvers:[],
        scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }]
    })

    await new ApolloServer({schema, context: context}).listen({port: 4000}, () =>
        console.log(`
🚀 Server ready at: http://localhost:4000`,
        ),
    )


}

app()