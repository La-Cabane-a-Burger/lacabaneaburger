import { defineNuxtPlugin, NuxtApp } from "#app";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

export default defineNuxtPlugin((nuxt: NuxtApp) => {
  const config = useRuntimeConfig();

  console.log("url", config.apiURL);

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: config.apiURL,
    ssrMode: true,
  });
  nuxt.vueApp.provide(DefaultApolloClient, apolloClient);
});
