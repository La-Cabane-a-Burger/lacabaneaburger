<template>
  <div class="flex items-center justify-between">
    <ChevronLeft
        @click="onClickLeft"
        class="w-full h-full mr-5 cursor-pointer fill-current sm:w-1/4 sm:h-1/4 lg:w-20 lg:h-20 hidden sm:block"
    />
    <div
        ref="carrousel"
        class="flex items-center justify-between overflow-y-auto scrollbar"
    >
      <div>

        <div class="flex flex-row justify-between flex-1 py-5" v-if="!loading">
          <MenuItem
              v-for="card in cards"
              :item="card"
              class="mr-5"
          />
        </div>
        <div class="flex flex-row justify-between flex-1 py-5" v-else>
          <MenuItem
              v-for="n of 3"
              loading
              :key="n"
              class="mr-5"
          />
        </div>


      </div>

    </div>
    <ChevronRight
        @click="onClickRight"
        class="w-full h-full ml-5 cursor-pointer fill-current sm:w-1/4 sm:h-1/4 h-1/12 lg:w-20 lg:h-20 hidden sm:block"
    />
  </div>
</template>

<script lang="ts">
import ChevronLeft from "assets/icons/LeftChevronIcon.vue";
import ChevronRight from "assets/icons/RightChevronIcon.vue";
import {defineComponent} from "vue";
import Card from "@/components/Card.vue";
import MenuItem from "@/components/menu/MenuItem.vue";

export default defineComponent({
  components: {
    MenuItem,
    Card,
    ChevronLeft,
    ChevronRight,
  },
  props: {
    cards: Array,
    loading: Boolean
  },
  setup() {
    const onClickLeft = () => {
      this.$refs.carrousel.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }

    const onClickRight = () => {
      this.$refs.carrousel.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
    return {
      onClickLeft, onClickRight
    }
  }
})
</script>

<style>
.scrollbar::-webkit-scrollbar {
  width: 11px;
}

.scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #90a4ae #ffffff;
}

.scrollbar::-webkit-scrollbar-track {
  background: #ffffff;
}

.scrollbar::-webkit-scrollbar-thumb {
  background-color: #90a4ae;
  border-radius: 999px;
  border: 3px solid #ffffff;
}
</style>
