import {defineNuxtPlugin, NuxtApp} from '#app'
import L from 'leaflet'


export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
    nuxtApp.provide("L", L)
})