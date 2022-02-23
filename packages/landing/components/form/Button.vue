<template>
  <button
    type="button"
    class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-sm shadow-sm text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    :class="{
      'inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-primary-900 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500':
        secondary,
    }"
  >
    <slot />
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    secondary: { type: Boolean, default: false },
  },
});
</script>
