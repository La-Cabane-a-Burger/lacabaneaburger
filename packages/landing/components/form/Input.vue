<template>
  <div>
    <label v-if="label" :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="mt-1">
      <input :type="type" :required="required" :disabled="disabled" :autocomplete="autocomplete" :name="name" :id="name"
             class="shadow-sm border border-gray-300 focus:ring-primary-500 focus:outline-primary-500 focus:border-primary-500 block w-full placeholder-gray-400 sm:text-sm rounded-md px-3 py-2"
             placeholder="you@example.com"/>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    name: {type: String, required: true},
    label: {type: String},
    autocomplete: {type: String},
    type: {type: String, default: 'text'},
    required: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false}
  }
})
</script>
