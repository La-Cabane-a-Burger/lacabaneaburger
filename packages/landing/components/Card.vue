<template>
  <div class="flex flex-col items-start bg-white shadow-md rounded-3xl w-80">
    <img
        v-if="image"
        class="rounded-3xl"
        :src="`./assets/img/${image}`"
        :alt="image_alt"
    />
    <div class="p-4 w-full">
      <h4 v-if="title" class="pb-2 text-xl text-dark">{{ title }}</h4>
      <p class="text-sm text-darkLight" v-if="text">
        {{ text }}
      </p>
      <slot/>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    image: String,
    image_alt: String,
    title: String,
    text: String,
  },
})
</script>
