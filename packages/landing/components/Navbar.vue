<template>
  <div
      class="fixed z-50 flex flex-col w-full h-auto ellipse font-headline"
      :class="{ 'bg-navbar': isMenuOpen, 'bg-black/90' : scrollPosition > 0|| isMenuOpen }"
      style="transition: 0.4s"
  >
    <div class="flex justify-between mx-2 my-2 sm:mx-16">
      <div class="flex-row items-center flex-1 hidden lg:flex text-white gap-5"
           :class="{'text-gray-900' : !isTextWhite && scrollPosition <= 0}">
        <nuxt-link class="transition hover:text-primary-600" to="/menu" active-class="text-primary-600 cursor-default">
          Carte
        </nuxt-link>
        <nuxt-link class="transition hover:text-primary-600" to="/information"
                   active-class="text-primary-600 cursor-default">Informations
        </nuxt-link>
        <nuxt-link class="transition hover:text-primary-600" to="/concept"
                   active-class="text-primary-600 cursor-default">Concept
        </nuxt-link>
        <nuxt-link class="transition hover:text-primary-600" to="/franchise"
                   active-class="text-primary-600 cursor-default">Franchise
        </nuxt-link>
      </div>
      <div class="flex items-center flex-1 lg:hidden text-white">
        <Menu v-if="!isMenuOpen" class="w-full text-primary" :class="{'fill-black' : !isTextWhite && scrollPosition <= 0}" @click="onToggleMenu"/>
        <Cross v-if="isMenuOpen" class="w-full fill-white text-primary" @click="onToggleMenu"  />
      </div>
      <div class="flex items-center justify-center flex-1">
        <nuxt-link to="/">
          <Logo class="w-40 transition-all	" :class="{'w-16' : scrollPosition > 0 }"/>
        </nuxt-link>
      </div>
      <div class="flex items-center justify-end flex-1">
        <Button class="font-text mr-4 hidden"
        >Commander
        </Button>
        <div class="hidden">
          <!--            <User class="rounded-full h-10 w-10"/>-->
          <div>
            <button type="button"
                    class="bg-gray-50 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500"
                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <User class="rounded-full h-8 w-8 text-primary-900 bg-gray-900" alt=""/>
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
      <nuxt-link class="m-4 text-white font-text" @click="isMenuOpen = false" to="/menu">Carte</nuxt-link>
      <nuxt-link class="m-4 text-white font-text" @click="isMenuOpen = false" to="/information">Informations</nuxt-link>
      <nuxt-link class="m-4 text-white font-text" @click="isMenuOpen = false" to="/concept">Concept</nuxt-link>
      <nuxt-link class="m-4 text-white font-text" @click="isMenuOpen = false" to="/franchise">Franchise</nuxt-link>
    </div>

  </div>
</template>

<script setup lang="ts">
import User from "assets/icons/UserIcon.vue";
import Menu from "assets/icons/MenuIcon.vue";
import Cross from "assets/icons/CrossIcon.vue";
import Logo from "~/assets/img/logo.vue";
import Button from "~/components/form/Button.vue";
import {computed, onMounted, ref} from "vue";
import {onUnmounted} from "#imports";


const scrollPosition = ref(0);
const handleScroll = () => {
  return scrollPosition.value = window ? window.scrollY : 0;
}

const isMenuOpen = ref(false);
const route = useRoute();

const isTextWhite = computed(() => route.name === 'index');


const onToggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const onScroll = () => {
  console.log('hello')
}

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll))

</script>


<style>
.ellipse {
  clip-path: ellipse(150% 100% at 50% 0);
}
</style>
