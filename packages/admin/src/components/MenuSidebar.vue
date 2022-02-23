<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
                         enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                         leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75"/>
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                         enter-from="-translate-x-full" enter-to="translate-x-0"
                         leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                         leave-to="-translate-x-full">
          <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-primary-700">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                             enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100"
                             leave-to="opacity-0">
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button type="button"
                        class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true"/>
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <logo class="h-8 w-auto" />
            </div>
            <nav class="mt-5 flex-shrink-0 h-full divide-y divide-primary-800 overflow-y-auto" aria-label="Sidebar">
              <div class="px-2 space-y-1">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                   :class="[item.current ? 'bg-primary-800 text-white' : 'text-primary-100 hover:text-white hover:bg-primary-600', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']"
                   :aria-current="item.current ? 'page' : undefined">
                  <component :is="item.icon" class="mr-4 flex-shrink-0 h-6 w-6 text-primary-200" aria-hidden="true"/>
                  {{ item.name }}
                </a>
              </div>
              <div class="mt-6 pt-6">
                <div class="px-2 space-y-1">
                  <a v-for="item in secondaryNavigation" :key="item.name" :href="item.href"
                     class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-primary-100 hover:text-white hover:bg-primary-600">
                    <component :is="item.icon" class="mr-4 h-6 w-6 text-primary-200" aria-hidden="true"/>
                    {{ item.name }}
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow bg-primary-900 pt-5 pb-4 overflow-y-auto">
        <div class="flex items-center justify-center flex-shrink-0 px-4">
          <logo class="w-20 h-20"/>
        </div>
        <nav class="mt-5 flex-1 flex flex-col divide-y divide-primary-800 overflow-y-auto" aria-label="Sidebar">
          <div class="px-2 space-y-1">
            <router-link v-for="item in navigation" :key="item.name" :to="item.link"
                         :class="[item.name === $route.name ? 'bg-primary-700 text-white' : 'text-primary-100 hover:text-white hover:bg-primary-800', 'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md']"
                         :aria-current="item.name === $route.name ? 'page' : undefined">
              <component :is="item.icon" class="mr-4 flex-shrink-0 h-6 w-6 text-primary-200" aria-hidden="true"/>
              {{ item.name }}
            </router-link>
          </div>
          <div class="mt-6 pt-6">
            <div class="px-2 space-y-1">
              <a v-for="item in secondaryNavigation" :key="item.name" :href="item.href"
                 class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-primary-100 hover:text-white hover:bg-primary-800">
                <component :is="item.icon" class="mr-4 h-6 w-6 text-primary-200" aria-hidden="true"/>
                {{ item.name }}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {ClockIcon, CogIcon, HomeIcon, QuestionMarkCircleIcon, ScaleIcon, ShieldCheckIcon, XIcon} from "@heroicons/vue/outline";
import logo from '../assets/logo.vue';

import {
  Dialog,
  DialogOverlay,
  Menu,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

export default defineComponent({
  components: {
    logo,
    Dialog,
    DialogOverlay,
    Menu,
    TransitionChild,
    TransitionRoot,
    XIcon
  },
  props: {
    sidebarOpen: {type: Boolean, default: false}
  },
  setup() {

    const navigation = [
      {name: 'Home', href: '#', icon: HomeIcon, current: true, link: '/'},
      {name: 'Items', href: '#', icon: ClockIcon, current: false, link: '/items'},
      {name: 'Ingredients', href: '#', icon: ScaleIcon, current: false, link: 'ingredients'}
    ]

    const secondaryNavigation = [
      {name: 'Settings', href: '#', icon: CogIcon},
      {name: 'Help', href: '#', icon: QuestionMarkCircleIcon},
      {name: 'Privacy', href: '#', icon: ShieldCheckIcon},
    ]

    return {
      navigation,
      secondaryNavigation
    }
  }
})
</script>
