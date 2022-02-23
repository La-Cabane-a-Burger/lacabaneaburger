<template>
  <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
    <button type="button"
            class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden"
            @click="sidebarOpen = true">
      <span class="sr-only">Open sidebar</span>
      <MenuAlt2Icon class="h-6 w-6" aria-hidden="true"/>
    </button>
    <div class="flex-1 px-4 flex justify-between">
      <div class="flex-1 gap-2 flex items-center text-primary-600">
        <LocationMarkerIcon class="w-6 h-6"/>
        <a href="#">Pontchâteau </a>
      </div>
      <div class="ml-4 flex items-center md:ml-6">

        <!-- Profile dropdown -->
        <Menu as="div" class="ml-3 relative">
          <div>
            <MenuButton
                class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full"
                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                   alt=""/>
            </MenuButton>
          </div>
          <transition enter-active-class="transition ease-out duration-100"
                      enter-from-class="transform opacity-0 scale-95"
                      enter-to-class="transform opacity-100 scale-100"
                      leave-active-class="transition ease-in duration-75"
                      leave-from-class="transform opacity-100 scale-100"
                      leave-to-class="transform opacity-0 scale-95">
            <MenuItems
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                <a :href="item.href"
                   :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{
                    item.name
                  }}</a>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

import {
  Dialog,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'

import {SearchIcon, LocationMarkerIcon} from '@heroicons/vue/solid'

import {
  MenuAlt2Icon
} from '@heroicons/vue/outline'


export default defineComponent({
  components: {
    Dialog,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    SearchIcon,
    MenuAlt2Icon,
    LocationMarkerIcon
  },
  setup() {
    const userNavigation = [
      {name: 'Your Profile', href: '#'},
      {name: 'Settings', href: '#'},
      {name: 'Sign out', href: '#'},
    ]

    const sidebarOpen = ref(false)

    return {
      userNavigation,
      sidebarOpen
    }
  }
})
</script>
