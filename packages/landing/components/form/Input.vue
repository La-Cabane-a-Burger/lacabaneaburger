<template>
  <div>
    <label v-if="label" :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="mt-1">
      <input :type="type" v-model="value" :required="required" :disabled="disabled"
             :autocomplete="autocomplete" :name="name" :id="name"
             class="shadow-sm border border-gray-300 focus:ring-primary-500 focus:outline-primary-500 focus:border-primary-500 block w-full placeholder-gray-400 sm:text-sm rounded-md px-3 py-2"
             :placeholder="placeholder"/>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";

export default defineComponent({
  props: {
    name: {type: String, required: true},
    label: {type: String},
    autocomplete: {type: String},
    type: {type: String, default: 'text'},
    placeholder: {type: String, default: 'you@example.com'},
    required: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    modelValue: {type: String, required: true}
  }, setup(props, {emit}) {
    const value = computed({
      get: () => props.modelValue,
      set: val => emit('update:modelValue', val)
    });
    return {
      value
    }
  }
})
</script>
