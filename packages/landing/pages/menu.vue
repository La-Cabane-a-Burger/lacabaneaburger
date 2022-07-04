<template>
  <div>
    <div v-if="showSearch">
      <suspense>
        <SearchRestaurant @link="showSearch = false" />
      </suspense>
    </div>
    <NuxtChild v-else />
  </div>
</template>
<script setup lang="ts">
import SearchRestaurant from "~/components/menu/SearchRestaurant";
import {useRouter} from "#app";
import {ref} from "vue";

const showSearch = ref(true);

const router = useRouter();

if(router.currentRoute.value.params.name){
  showSearch.value = false;
}

</script>
