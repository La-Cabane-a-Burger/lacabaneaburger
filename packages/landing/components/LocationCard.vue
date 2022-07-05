<template>
  <div
    class="flex flex-col justify-between p-3 mt-10 border border-white rounded-md cursor-pointer hover:border-gray-400"
    :class="{ 'border-gray-400': isSelected }"
  >
    <div class="flex flex-row">
      <div class="flex-col flex-1">
        <div class="flex flex-row items-center mb-4">
          <img
            class="w-12 h-12"
            src="@/assets/img/cab-logo-variant.png"
            alt="Petit logo de la Cabane à Burger"
          />
          <h4 class="ml-2 font-semibold text-md font-text">
            - {{ location.city }}
          </h4>
        </div>
        <div class="flex flex-row items-center mb-4">
          <PointIcon />
          <p class="ml-2 font-normal text-gray-600 font-text">
            {{ location.address }}
          </p>
        </div>
        <div class="flex flex-row items-center mb-4">
          <PhoneIcon />
          <p class="ml-2 font-normal text-gray-600 font-text">
            {{ location.phone }}
          </p>
        </div>
      </div>
    </div>
    <div class="relative">
      <button class="font-semibold text-green-500">Ouvert</button>
    </div>
  </div>
</template>

<script lang="ts">
import PointIcon from "@/assets/icons/PointIcon";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import Button from "~/components/form/Button.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    PointIcon,
    PhoneIcon,
    Button,
  },
  props: {
    location: Object,
    isSelected: Boolean,
  },
});
</script>
