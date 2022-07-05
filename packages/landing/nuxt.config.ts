import { defineNuxtConfig } from "nuxt";
import '@nuxt3/apollo-module';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@nuxt3/apollo-module'
  ],
  apollo: {
    clientConfigs: {
      default: {
        uri: process.env.API_URL
        // see https://www.apollographql.com/docs/react/api/core/ApolloClient/#ApolloClient.constructor
      }
    },
    // Cookie parameters used to store authentication token
    cookieAttributes: {
      /**
       * Define when the cookie will be removed. Value can be a Number
       * which will be interpreted as days from time of creation or a
       * Date instance. If omitted, the cookie becomes a session cookie.
       */
      expires: 7,

      /**
       * Define the path where the cookie is available. Defaults to '/'
       */
      path: '/',

      /**
       * Define the domain where the cookie is available. Defaults to
       * the domain of the page where the cookie was created.
       */
      domain: 'example.com',

      /**
       * A Boolean indicating if the cookie transmission requires a
       * secure protocol (https). Defaults to false.
       */
      secure: false,
    },
  },
  css: ["leaflet/dist/leaflet.css"],
  runtimeConfig: {
    apiURL: process.env.API_URL,
    public: {
      mapboxToken: process.env.MAPBOX_TOKEN || "",
    },
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: [
      "@turf/distance",
      "@turf/helpers",
      "@lacabaneaburger/ui",
      "@apollo/client",
      "ts-invariant",
      "@apollo/client/core",
      "@vue/apollo-composable",
    ],
  },
  nitro: {
    preset: "netlify",
  },
});
