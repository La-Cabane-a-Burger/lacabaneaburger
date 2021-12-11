<template>
  <div class="flex flex-col items-start bg-white shadow-md rounded-3xl w-80">
    <img
        class="rounded-3xl"
        :src="`./assets/img/${image}`"
        alt="montagnard burger"
    />
    <div class="p-4">
      <h4 class="pb-2 text-xl text-dark">{{ title }}</h4>
      <p class="text-sm text-darkLight">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    image: String,
    title: String,
    text: String,
  },
})
</script>
