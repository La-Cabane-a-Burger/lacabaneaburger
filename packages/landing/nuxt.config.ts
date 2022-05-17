import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["leaflet/dist/leaflet.css"],
  publicRuntimeConfig: {
    apiURL: process.env.API_URL || "http://localhost:4000",
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
    ],
  },
});
