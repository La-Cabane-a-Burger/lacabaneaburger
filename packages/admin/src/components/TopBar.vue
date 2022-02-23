<template>
    <div class="bg-white shadow">
      <div class="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <div class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
          <div class="flex-1 min-w-0">
            <!-- Profile -->
            <div class="flex items-center">
<!--              <UserCircleIcon class="text-gray-700 hidden h-16 w-16 sm:block"/>-->
              <div>
                <div class="flex items-center">
<!--                  <UserCircleIcon class="text-gray-700 h-16 w-16 rounded-full sm:hidden"/>-->
                  <h1 class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                    {{ title }}
                  </h1>
                </div>
                <dl class="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                  <dt class="sr-only">Restaurant</dt>
                  <dd class="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                    <OfficeBuildingIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                    Pontchâteau
                  </dd>
<!--                  <dt class="sr-only">Account status</dt>-->
<!--                  <dd class="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">-->
<!--                    <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true"/>-->
<!--                    Verified account-->
<!--                  </dd>-->
                </dl>
              </div>
            </div>
          </div>
          <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
            <slot name="Right"></slot>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'

import {
  BellIcon,
  MenuAlt1Icon,
} from '@heroicons/vue/outline'
import {
  CheckCircleIcon,
  ChevronDownIcon,
  OfficeBuildingIcon,
  SearchIcon,
  UserCircleIcon
} from '@heroicons/vue/solid'

export default defineComponent({
  components: {
    BellIcon,
    MenuAlt1Icon,
    CheckCircleIcon,
    ChevronDownIcon,
    OfficeBuildingIcon,
    SearchIcon,
    UserCircleIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  props: {
    title: { type: String, default: 'Good morning'}
  },
  setup() {

  }
})
</script>
