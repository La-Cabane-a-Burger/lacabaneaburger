<template>
  <div>
    <MenuSidebar :sidebarOpen="sidebarOpen"/>
    <div class="lg:pl-64 flex flex-col flex-1">
      <AccountBar :sidebarOpen="sidebarOpen" />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import MenuSidebar from "./components/MenuSidebar.vue";
import AccountBar from "./components/AccountBar.vue";


export default defineComponent({
  components: {
    AccountBar,
    MenuSidebar
  },
  setup() {
    const sidebarOpen = ref(false);
    return {
      sidebarOpen
    }
  }
})
</script>
