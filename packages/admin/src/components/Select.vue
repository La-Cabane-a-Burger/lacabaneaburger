<template>
  <Listbox as="div" :modelValue="modelValue" @update:modelValue="select">
    <ListboxLabel v-if="label" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
    </ListboxLabel>
    <div class="relative">
      <ListboxButton
          class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
        <span v-if="selected" class="block truncate">{{ selected.name }}</span>
        <span v-else class="text-gray-500" >Sélectionner</span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                  leave-to-class="opacity-0">
        <ListboxOptions
            class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ListboxOption as="template" :class="{ 'opacity-50 cursor-not-allowed': item.disabled }"
                         :disabled="item.disabled" v-for="item in items" :key="item.id" :value="item.id"
                         v-slot="{ active }">
            <li :class="[active ? 'text-white bg-primary-900' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
              <span :class="[isSelected(item) ? 'font-semibold' : 'font-normal', 'block truncate']">
                {{ item.name }}
              </span>

              <span v-if="isSelected(item)"
                    :class="[active ? 'text-white' : 'text-primary-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true"/>
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script lang="ts">
import {computed} from 'vue'
import {Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions} from '@headlessui/vue'
import {CheckIcon, SelectorIcon} from '@heroicons/vue/solid'

export default {
  emits: ['update:modelValue', 'update-batch'],
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
  },
  props: {
    label: {type: String},
    items: {type: Array, default: () => []},
    modelValue: { type: [String, Number, Array], default: undefined }
  },
  setup(props: { items: any[]; modelValue: any }, {emit}: any) {
    const selected = computed(() => {
      return props.items.find((p:any) => p.id === props.modelValue);
    })

    const isSelected = (item: { id: string }) => {
        return props.modelValue === item.id;
    };

    const select = (value: string) => {
      console.log(value);
      emit('update:modelValue', value);
    }

    return {
      selected,
      select,
      isSelected
    }
  },
}
</script>
