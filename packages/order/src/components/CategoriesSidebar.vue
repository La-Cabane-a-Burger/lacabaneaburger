<template>
  <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
      <div class="flex justify-center items-center flex-shrink-0 px-4">

        <logo class="w-20 h-20"/>
      </div>
      <div class="mt-5 flex-grow flex flex-col">
        <nav class="flex-1 px-2 pb-4 space-y-1">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
             :class="[item.current ? 'bg-primary-700 text-white' : 'text-secondary-600 hover:bg-primary-50 hover:text-primary-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
            <component :is="item.icon"
                       :class="[item.current ? 'fill-white' : 'fill-secondary-400 group-hover:fill-primary-500', 'mr-3 flex-shrink-0 h-6 w-6']"
                       aria-hidden="true"/>
            {{ item.name }}
          </a>
        </nav>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  BellIcon,
  MenuAlt2Icon,
  XIcon,
} from '@heroicons/vue/outline'
import {SearchIcon} from '@heroicons/vue/solid'
import Logo from "../assets/logo.vue";
import BurgerIcon from "../assets/icons/BurgerIcon.vue";
import SaladIcon from "../assets/icons/SaladIcon.vue";
import CookieIcon from "../assets/icons/CookieIcon.vue";
import FriesIcon from "../assets/icons/FriesIcon.vue";
import BeverageIcon from "../assets/icons/BeverageIcon.vue";
import BucketIcon from "../assets/icons/BucketIcon.vue";
import ChickenIcon from "../assets/icons/ChickenIcon.vue";

export default defineComponent({
  components: {
    Logo,
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    MenuAlt2Icon,
    SearchIcon,
    XIcon,
  }, setup() {

    const navigation = [
      {name: 'Nos burgers', href: '#', icon: BurgerIcon, current: true},
      {name: 'Nos salades', href: '#', icon: SaladIcon, current: false},
      {name: 'Nos nuggets', href: '#', icon: ChickenIcon, current: false},
      {name: "Apero'Cab", href: '#', icon: BucketIcon, current: false},
      {name: 'Nos desserts', href: '#', icon: CookieIcon, current: false},
      {name: "A l'unité", href: '#', icon: FriesIcon, current: false},
      {name: 'Nos Boissons', href: '#', icon: BeverageIcon, current: false},
    ]

    const userNavigation = [
      {name: 'Your Profile', href: '#'},
      {name: 'Settings', href: '#'},
      {name: 'Sign out', href: '#'},
    ]

    const sidebarOpen = ref(false)

    return {
      navigation,
      userNavigation,
      sidebarOpen,
    }
  }

})
</script>
