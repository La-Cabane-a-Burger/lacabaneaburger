<template>
  <div
    class="progress-bar rounded-3xl pt-2 pr-2 pb-2 pl-6 flex-row bg-gray-200 flex justify-center h-max"
  >
    <div
      class="progress-bar-counter text-secondary-900 text-2xl font-bold m-auto"
    >
      {{ value }}/{{ max }}
    </div>
    <CabIcon class="h-8" />
    <div class="progress-bar-bar rounded-3xl bg-primary-300 w-full h-8">
      <div
        class="progress-bar-bar-inner rounded-3xl bg-primary-900 h-8"
        :style="{ width: (value / max) * 100 + '%' }"
      ></div>
    </div>
  </div>
</template>
<script>
import CabIcon from "~/assets/icons/CabIcon.vue";
export default defineComponent({
  name: "ProgressBar",
  components: {
    CabIcon,
  },
  props: {
    value: {
      type: String,
      default: "0",
    },
    max: {
      type: String,
      default: "15",
    },
  },
});
</script>
