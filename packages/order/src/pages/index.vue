<template>
  <div>
    <!-- Static sidebar for desktop -->
    <CategoriesSidebar />
    <div class="md:pl-64 flex flex-col flex-1">
      <TopBar />
      <div class="flex-1 min-w-0 bg-white xl:flex">
        <main class="flex-1">
          <router-view />
        </main>
        <CartSidebar />
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
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

import CategoriesSidebar from "../components/CategoriesSidebar.vue";
import TopBar from "../components/TopBar.vue";
import CartSidebar from "../components/CartSidebar.vue";

export default defineComponent({
  components: {
    CartSidebar,
    TopBar,
    CategoriesSidebar,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
  }, setup() {

    return {
    }
  }

})
</script>
