<template>
  <h2 class="flex flex-col mb-10 text-5xl font-header">
    <span class="uppercase text-dark">{{ this.topText }}</span
    ><span class="uppercase text-primary">{{ this.bottomText }}</span>
  </h2>
</template>

<script>
export default {
  name: "Subtitle",
  props: {
    topText: String,
    bottomText: String,
  },
};
</script>