<template>
  <div>
    <Navbar/>
    <NuxtPage/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import './assets/main.scss'
import Footer from "~/components/Footer.vue";
import Navbar from "~/components/Navbar.vue";
import {defineComponent} from 'vue'

defineComponent({
  components: {
    Footer, Navbar
  },
})


</script>

