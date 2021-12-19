<template>
  <div
      class="fixed z-50 flex flex-col w-full h-auto ellipse"
      :class="{ 'bg-navbar': isMenuOpen, 'bg-black/50' : scrollPosition > 0 }"
      style="transition: 0.4s"
  >
    <div class="flex justify-between mx-2 my-6 sm:mx-16">
      <div class="flex-row items-center flex-1 hidden lg:flex text-white gap-5" :class="{'text-gray-900' : !isTextWhite }">
        <nuxt-link class="transition hover:text-primary-600" to="/menu" active-class="text-primary-600 cursor-default" >Carte</nuxt-link>
        <nuxt-link class="transition hover:text-primary-600" to="/info" active-class="text-primary-600 cursor-default">Informations</nuxt-link>
        <nuxt-link class="transition hover:text-primary-600" to="/concept" active-class="text-primary-600 cursor-default" >Concept</nuxt-link>
        <nuxt-link class="transition hover:text-primary-600" to="/franchise" active-class="text-primary-600 cursor-default">Franchise</nuxt-link>
      </div>
      <div class="flex items-center flex-1 lg:hidden">
        <Menu v-if="!isMenuOpen" class="w-full fill-current text-primary" @click="onToggleMenu"/>
        <Cross v-if="isMenuOpen" class="w-full fill-current text-primary" @click="onToggleMenu"/>
      </div>
      <div class="flex items-center justify-center flex-1">
        <nuxt-link to="/">
          <Logo class="w-40 transition-all	" :class="{'w-20' : scrollPosition > 0 }"/>
        </nuxt-link>
      </div>
      <div class="flex items-center justify-end flex-1">
        <Button class="font-text mr-4"
        >Commander
        </Button>
        <div class="hidden lg:block">
<!--            <User class="rounded-full h-10 w-10"/>-->
          <div>
            <button type="button" class="bg-gray-50 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <User class="rounded-full h-8 w-8 text-primary-900 bg-gray-900" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
        v-if="isMenuOpen"
        class="flex flex-col justify-start w-full pb-10 bg-opacity-95"
        style="transition: 0.4s"
    >
      <div class="m-4 text-white font-text">Carte</div>
      <div class="m-4 text-white font-text">Informations</div>
      <div class="m-4 text-white font-text">Concept</div>
      <div class="m-4 text-white font-text">Franchise</div>
    </div>

  </div>
</template>

<script lang="ts">
import User from "assets/icons/UserIcon.vue";
import Menu from "assets/icons/MenuIcon.vue";
import Cross from "assets/icons/CrossIcon.vue";
import Logo from "~/assets/img/logo.vue";
import Button from "~/components/Button.vue";
import {computed, defineComponent, ref} from "vue";
import { useRouter, useRoute } from 'vue-router'


const scrollPosition = ref(0);
const handleScroll = () => {
  return scrollPosition.value = window ? window.scrollY : 0;
}

export default defineComponent({
  components: {
    User,
    Menu,
    Cross,
    Logo,
    Button
  }, setup() {

    const isMenuOpen = ref(false);
    const route = useRoute()

    const isTextWhite = computed(() => route.name === 'index' || route.name === 'franchise');



    const onToggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    const onScroll = () => {
      console.log('hello')
    }

    return {
      onToggleMenu,
      isMenuOpen,
      onScroll,
      scrollPosition,
      isTextWhite
    }


  },
  mounted() {
      window.addEventListener("scroll", handleScroll);
  },
  unmounted() {
      window.removeEventListener("scroll", handleScroll);
  }
})
</script>


<style>
.ellipse {
  clip-path: ellipse(150% 100% at 50% 0);
}
</style>
