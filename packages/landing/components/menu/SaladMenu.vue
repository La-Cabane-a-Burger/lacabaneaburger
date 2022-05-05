<template>
  <div>
    <div class="pb-5 border-b border-gray-200">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Nos salades</h3>
    </div>
    <div class="py-5 flex flex-wrap gap-4">
      <MenuItem v-for="salad in salads" :key="salad.id" :item="salad"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useStoreItemsByCategoryQuery} from "~/generated/graphql";
import {useResult} from "@vue/apollo-composable";
import MenuItem from "./MenuItem";

const {result, loading} = useStoreItemsByCategoryQuery({
  storeId: '1c01297d-cb1f-42c6-87e3-dc3d2e0477cf',
  category: 'SALAD',
});

const salads = useResult(result, []);
</script>
