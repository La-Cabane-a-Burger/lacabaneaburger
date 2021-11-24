import {ApolloServer} from 'apollo-server'
import {createContext} from './context'
import {UserResolver, User} from "./modules/user";
import {IngredientResolver, Ingredient} from "./modules/ingredient";
import {ItemResolver, Item} from "./modules/item";
import {MenuResolver, Menu} from "./modules/menu";
import {OpeningResolver, Opening} from "./modules/opening";
import {OrderResolver, Order} from "./modules/order";
import {RecipeResolver, Recipe} from "./modules/recipe";
import {StoreResolver, Store} from "./modules/store";
import {merge} from "lodash";

const usedPort = process.env.PORT || 4000;

new ApolloServer({
    typeDefs: [User, Ingredient, Item, Menu, Opening, Order, Recipe, Store],
    resolvers: merge(UserResolver, IngredientResolver, ItemResolver, MenuResolver, OpeningResolver, OrderResolver, RecipeResolver, StoreResolver),
    context: createContext
}).listen(
    {port: usedPort},
    () =>
        console.log(
            `🚀 Server ready at: http://localhost:4000\n⭐️`,
        ),
)
