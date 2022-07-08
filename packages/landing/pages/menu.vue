<template>
  <div>
    <div v-if="showSearch">
      <suspense>
        <SearchRestaurant @link="showSearch = false" />
        <template #fallback>
          Loading...
        </template>
      </suspense>
    </div>
    <NuxtChild v-else />
  </div>
</template>
<script setup lang="ts">
import SearchRestaurant from "@/components/menu/SearchRestaurant.vue";
import {useRouter} from "#app";
import {ref} from "vue";

useHead({
  title: 'La Carte - La Cabane à Burger',
})

const showSearch = ref(true);

const router = useRouter();

if(router.currentRoute.value.params.name){
  showSearch.value = false;
}

</script>
