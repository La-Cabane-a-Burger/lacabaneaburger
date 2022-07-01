import {defineNuxtPlugin, NuxtApp} from '#app'
import { DefaultApolloClient } from '@vue/apollo-composable';
import {
    ApolloClient,
    InMemoryCache
} from '@apollo/client/core'

export default defineNuxtPlugin((nuxt: NuxtApp) => {

    const apolloClient = new ApolloClient({
        cache: new InMemoryCache(),
        uri: process.env.API_URL || 'http://localhost:4000',
        ssrMode: true,
    })
    nuxt.vueApp.provide(DefaultApolloClient, apolloClient)
})
