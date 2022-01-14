import {defineNuxtConfig} from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    apiURL: process.env.API_URL || 'http://localhost:4000'
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        }
      }
    },
    transpile: ['@turf/distance', '@turf/helpers', '@lacabaneaburger/ui', '@apollo/client', 'ts-invariant']
  },
});

