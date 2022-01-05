<template>
  <div class="relative flex items-start">
    <div class="flex items-center h-5">
      <input :id="name" :name="name" type="checkbox"
             class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"/>
    </div>
    <div class="ml-3 text-sm">
      <label :for="name" class="font-medium text-gray-700">{{ label }}</label>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    name: {type: String, required: true},
    label: {type: String}
  }
})
</script>
