<template>
  <div class="flex flex-col items-start bg-white shadow rounded-3xl w-80">
    <img
      class="rounded-3xl"
      :src="require(`~/assets/images/${this.image}`)"
      alt="montagnard burger"
    />
    <div class="p-4">
      <h4 class="pb-2 text-xl text-dark">{{ this.title }}</h4>
      <p class="text-sm text-darkLight">
        {{ this.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    image: String,
    title: String,
    text: String,
  },
};
</script>

<style>
</style>