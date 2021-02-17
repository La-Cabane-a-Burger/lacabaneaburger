import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './schema'
import { createContext } from './context'

new ApolloServer({ typeDefs, resolvers, context: createContext }).listen(
  { port: 8080 },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:4000\n⭐️`,
    ),
)
