<template>
  <h2 class="flex flex-col mb-10 text-3xl font-extrabold font-headline">
    <span class="uppercase text-gray-900">{{ topText }}</span
    ><span class="uppercase text-primary-900">{{ bottomText }}</span>
  </h2>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    topText: String,
    bottomText: String,
  },
})
</script>
