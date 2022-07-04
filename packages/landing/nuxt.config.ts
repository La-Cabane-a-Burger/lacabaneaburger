import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["leaflet/dist/leaflet.css"],
  publicRuntimeConfig: {
    apiURL: process.env.API_URL,
    mapboxToken: process.env.MAPBOX_TOKEN || "",
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
      '@apollo/client/core',
      '@vue/apollo-composable'
    ],
  },
  nitro: {
    preset: 'netlify'
  }
});
