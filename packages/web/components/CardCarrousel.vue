<template>
  <div class="flex items-center justify-between">
    <ChevronLeft
      @click="onClickLeft"
      class="w-full h-full mr-5 cursor-pointer sm:w-1/4 sm:h-1/4 lg:w-20 lg:h-20"
    />
    <div
      ref="carrousel"
      class="flex items-center justify-between overflow-y-auto"
    >
      <div class="flex flex-row justify-between flex-1 py-5">
        <Card
          v-for="card in cards"
          :key="card.title"
          :image="card.image"
          :title="card.title"
          :text="card.text"
          class="mr-5"
        />
      </div>
    </div>
    <ChevronRight
      @click="onClickRight"
      class="w-full h-full ml-5 cursor-pointer sm:w-1/4 sm:h-1/4 h-1/12 lg:w-20 lg:h-20"
    />
  </div>
</template>

<script>
import Card from "./Card";
import ChevronLeft from "~/assets/icons/chevron-left.svg?inline";
import ChevronRight from "~/assets/icons/chevron-right.svg?inline";

export default {
  name: "CardCarrousel",
  components: {
    Card,
    ChevronLeft,
    ChevronRight,
  },
  props: {
    cards: Array,
  },
  methods: {
    onClickLeft() {
      this.$refs.carrousel.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    },
    onClickRight() {
      this.$refs.carrousel.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
</style>