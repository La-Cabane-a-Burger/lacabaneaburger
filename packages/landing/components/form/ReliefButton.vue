<template>
  <button
    type="button"
    :class="
      'px-14 py-1.5 text-white font-semibold border-b-4 border-black rounded-xl bg-' +
      type +
      '-900'
    "
  >
    <slot />
  </button>
</template>

<script>
import { defineComponent } from "vue";

//Attention : mauvais rendu avec la couleur primaire
export default defineComponent({
  props: {
    type: { type: String, default: "primary" },
  },
});
</script>
