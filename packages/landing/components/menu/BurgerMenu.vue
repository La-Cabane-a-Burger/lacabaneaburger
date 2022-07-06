<template>
  <div>
    <div class="pb-5 border-b border-gray-200">
      <h3 class="text-3xl leading-6 font-black text-gray-900 uppercase">Nos burgers</h3>
    </div>
    <div v-if="burgers" class="py-5 flex flex-wrap gap-4">
        <MenuItem v-for="burger in burgers" :key="burger.id" :item="burger"/>
    </div>
    <div v-else>Chargement</div>
  </div>
</template>

<script setup lang="ts">
import {useStoreItemsByCategoryQuery} from "@/generated/graphql";
import MenuItem from "@/components/menu/MenuItem.vue";
import {computed} from "vue";

const props = defineProps({
  storeId: {
    type: String
  }
})

const {result, loading} = useStoreItemsByCategoryQuery({
  storeId: props.storeId,
  category: 'BURGER',
});

const burgers = computed(() => result?.value?.storeItemsByCategory ?? [])
</script>
