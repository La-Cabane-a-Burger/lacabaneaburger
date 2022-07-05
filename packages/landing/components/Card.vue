<template>
  <div class="flex flex-col items-start bg-white shadow-md rounded-3xl w-80">
    <img
        v-if="image"
        class="rounded-3xl"
        :src="image"
        :alt="image_alt"
    />
    <div class="p-4 w-full font-headline">
      <h4 v-if="title" class="pb-2 text-xl text-dark font-semibold">{{ title }}</h4>
      <p class="text-sm text-darkLight font-medium" v-if="text">
        {{ text }}
      </p>
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: String,
  image_alt: String,
  title: String,
  text: String,
})

</script>
