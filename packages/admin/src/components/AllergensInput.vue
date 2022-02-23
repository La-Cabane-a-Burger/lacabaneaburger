<template>
  <div>
    <div class="flex gap-2 w-full mb-4">
      <Select class="grow" :items="allergens" v-model="selected"/>
      <button type="button"
              class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
        Ajouter
      </button>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div v-for="item in items" :key="item"
           class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3">
        <!--        <div class="flex-shrink-0">-->
        <!--          hey-->
        <!--        </div>-->
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900">
            {{ translate(item) }}
          </p>
        </div>
        <button type="button"
                class="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          <TrashIcon class="h-3 w-3" aria-hidden="true"/>
        </button>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import Select from "./Select.vue";
import {TrashIcon} from '@heroicons/vue/solid'
import {Allergen} from "../generated/graphql";


export default defineComponent({
  components: {
    Select,
    TrashIcon
  }, props: {
    items: {type: Array, default: () => []}
  }, setup() {
    const selected = ref('');
    const allergens = [
      {id: Allergen.Gluten, name: 'Gluten'},
      {id: Allergen.Shellfish, name: 'Crustacés'},
      {id: Allergen.Eggs, name: 'Oeufs'},
      {id: Allergen.Fish, name: 'Poissons'},
      {id: Allergen.Peanuts, name: 'Arachides'},
      {id: Allergen.Soy, name: 'Soja'},
      {id: Allergen.Milk, name: 'Lait'},
      {id: Allergen.Nuts, name: 'Fruits à coques'},
      {id: Allergen.Celery, name: 'Céleri'},
      {id: Allergen.Mustard, name: 'Moutarde'},
      {id: Allergen.Sesame, name: 'Graines de sésame'},
      {id: Allergen.Sulfur, name: 'Anhydride sulfureux'},
      {id: Allergen.Lupin, name: 'Lupin'},
      {id: Allergen.Molluscs, name: 'Mollusques'},
    ]

    const translate = (value: string) => allergens.find(t => value === t.id)?.name;

    return {allergens, selected, translate}
  }
})
</script>
