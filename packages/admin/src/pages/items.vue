<template>
  <main class="flex-1 pb-8">
    <TopBar title="Items" >
      <template #Right>
        <button type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          Créer un item
        </button>
      </template>
    </TopBar>
  </main>
</template>
<script>
import TopBar from "../components/TopBar.vue";
export default {
  components: {TopBar}
}
</script>
