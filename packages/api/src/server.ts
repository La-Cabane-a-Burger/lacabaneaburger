import {ApolloServer} from 'apollo-server'
import {createContext} from './context'
import {UserResolver, User} from "./modules/user";
import {merge} from "lodash";

const usedPort = process.env.PORT || 4000;

new ApolloServer({
    typeDefs: [User],
    resolvers: merge(UserResolver), context: createContext
}).listen(
    {port: usedPort},
    () =>
        console.log(
            `🚀 Server ready at: http://localhost:4000\n⭐️`,
        ),
)
