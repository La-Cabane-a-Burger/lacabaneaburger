import { createApp } from 'vue'
import App from './App.vue'
import router from "./route";
import './assets/tailwind.scss'
import {DefaultApolloClient} from "@vue/apollo-composable";
import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client/core";

const httpLink = createHttpLink({
    uri: 'http://localhost:4000',
})

const apolloClient = new ApolloClient({
    ssrMode: true,
    link: httpLink,
    cache: new InMemoryCache()
})

createApp(App).use(router).provide(DefaultApolloClient, apolloClient).mount('#app')
