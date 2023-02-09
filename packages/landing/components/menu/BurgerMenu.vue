<template>
  <div class="mb-20">
    <div class="pb-5 border-b border-gray-200">
      <h3 class="text-3xl leading-6 font-black text-gray-900 uppercase ml-2">Nos burgers</h3>
    </div>
    <div v-if="loading" class="py-5 flex flex-wrap gap-4">
      <MenuItem
          v-for="n of 3"
          loading
          :key="n"
      />
    </div>
    <div v-else-if="burgers && !loading">
      <div class="mt-6 mx-2" v-for="(burgers, category) of groupBy(burgers, 'category')" :key="category">
        <p class="font-medium text-lg uppercase text-primary-900">{{ categories[category] }}</p>
        <div class="flex flex-wrap gap-4">
          <MenuItem v-for="burger in burgers" :key="burger.id" :item="burger"/>
        </div>
      </div>
      <p class="font-medium text-lg uppercase text-primary-900 mt-6">KIDS</p>
      <MenuItem :item="kidMenu"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useStoreItemsByTypeQuery} from "@/generated/graphql";
import MenuItem from "@/components/menu/MenuItem.vue";
import {computed} from "vue";
import useUtils from "~/composables/useUtils";

const {groupBy} = useUtils();

const props = defineProps({
  storeId: {
    type: String
  }
})

const {result, loading} = useStoreItemsByTypeQuery({
  storeId: props.storeId,
  type: 'BURGER',
});

const categories = {
  UNMISSABLE: "Les Incontournables",
  LEGENDARY: "Les Légendaires",
  CREATIVE: "Les Créatifs",
  VEGGIE: "Le Végé",

}

const burgers = computed(() => result?.value?.storeItemsByType ?? []);

const kidMenu = {
  name: "Menu kids",
  price: 6.5,
  description: "Burger steak haché, cheddar, ketchup ou 4 nuggets de filet de poulet / frites fraîches / compote à boire / jus de fruits 20 cl ou eau de source 50 cl / surprise."
}
</script>
