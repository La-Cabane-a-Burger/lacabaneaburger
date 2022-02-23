import {defineNuxtPlugin, NuxtApp} from '#app'
import { DefaultApolloClient, provideApolloClient } from '@vue/apollo-composable';
import {
    ApolloClient,
    InMemoryCache,
    createHttpLink
} from '@apollo/client/core'

export default defineNuxtPlugin((nuxt: NuxtApp) => {

    const httpLink = createHttpLink({
        uri: 'http://localhost:4000',
    })

    let apolloClient: ApolloClient<any>;
    const cache = new InMemoryCache();
    if (process.server) {
        apolloClient = new ApolloClient({
            ssrMode: true,
            link: httpLink,
            cache: new InMemoryCache()
        })
        nuxt.hook("app:rendered", () => {
            // store the result
            nuxt.payload.data["apollo"] = apolloClient.extract();
        });
    } else {
        // restore to cache, so the client won't request
        cache.restore(nuxt.payload.data["apollo"])
        apolloClient = new ApolloClient({
            link: httpLink,
            cache: cache,
            // ssrForceFetchDelay: 100,
        })
    }

    // provide client, used in useQuery()
    provideApolloClient(apolloClient)
    nuxt.provide("apollo", { DefaultApolloClient, apolloClient })
})
