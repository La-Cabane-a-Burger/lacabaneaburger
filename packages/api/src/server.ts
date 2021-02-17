import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './schema'
import { createContext } from './context'
const usedPort = process.env.PORT || 4000;

new ApolloServer({ typeDefs, resolvers, context: createContext }).listen(
  { port: usedPort },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:4000\n⭐️`,
    ),
)
