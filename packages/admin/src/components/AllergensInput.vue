<template>
  <div>
    <div class="flex gap-2 w-full mb-4">
      <Select class="grow" :items="selectableAllergens" v-model="selected"/>
      <Button color="white" @click="addAllergen">Ajouter</Button>
    </div>
    <div v-if="modelValue.length" class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div v-for="item in modelValue" :key="item"
           class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3">
        <!--        <div class="flex-shrink-0">-->
        <!--          hey-->
        <!--        </div>-->
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900">
            {{ translate(item) }}
          </p>
        </div>
        <button @click="removeAllergen(item)" type="button"
                class="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          <TrashIcon class="h-3 w-3" aria-hidden="true"/>
        </button>
      </div>
    </div>
    <div class="text-sm text-gray-500 italic" v-else>Pas d'allergène</div>
  </div>
</template>

<script setup lang="ts">
import {toRefs, toRef, ref, computed} from "vue";
import Select from "./Select.vue";
import Button from "./Button.vue";
import {TrashIcon} from '@heroicons/vue/solid'
import useAllergens from "../composable/useAllergens"
import {Allergen} from "../generated/graphql";

const props = defineProps({
  modelValue: {type: Array, default: () => []}
})

const selected = ref('');

const {modelValue} = toRefs(props);

const emit = defineEmits(['update:modelValue'])

const {translate, allergens} = useAllergens();

const selectableAllergens = computed(() => allergens.filter(a => !modelValue?.value?.includes(a.id)))

const addAllergen = () => {
  const selectedAllergens = [...props.modelValue]
  selectedAllergens.push(selected.value);
  selected.value = '';
  emit('update:modelValue', selectedAllergens);
}

const removeAllergen = (allergen: Allergen) => {
  const selectedAllergens = [...props.modelValue];
  emit('update:modelValue', selectedAllergens.filter(a => a !== allergen));
}

</script>
