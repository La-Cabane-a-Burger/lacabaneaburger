<template>
  <div>
    <button
      @click="toggleAccordion"
      class="flex w-full"
    >
      <slot name="title" />
      <svg
        class="w-3 transition-all duration-200 transform float-right ml-auto my-auto"
        :class="{
          'rotate-180': isOpen,
          'rotate-0': !isOpen,
        }"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 10"
        aria-hidden="true"
      >
        <path
          d="M15 1.2l-7 7-7-7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <div v-show="isOpen">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent ({
  setup() {
    const isOpen = ref(false)
    const toggleAccordion = () => {
      isOpen.value = !isOpen.value
    }
    return { isOpen, toggleAccordion }
  },
});
</script>