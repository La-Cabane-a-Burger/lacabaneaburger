<template>
  <div
    class="flex flex-col justify-between p-3 mt-10 border border-white rounded-md cursor-pointer  hover:border-gray-400"
  >
    <div class="flex flex-row">
      <div class="flex flex-col">
        <div class="flex flex-row items-center mb-4">
          <img
            class="w-12 h-12"
            src="~/assets/images/cab-logo-variant.png"
            alt="Petit logo de la Cabane à Burger"
          />
          <h4 class="ml-2 font-semibold text-md font-text">
            - {{ location.city }}
          </h4>
        </div>
        <div class="flex flex-row items-center mb-4">
          <Point />
          <p class="ml-2 font-normal text-gray-600 font-text">
            {{ location.address }}
          </p>
        </div>
        <div class="flex flex-row items-center mb-4">
          <Phone />
          <p class="ml-2 font-normal text-gray-600 font-text">
            {{ location.phone }}
          </p>
        </div>
      </div>
      <div class="flex flex-col items-end justify-center">
        <vs-button class="h-8" color="#EF7202">Commander</vs-button>
      </div>
    </div>
    <div class="relative">
      <button class="font-semibold text-green-500">Ouvert</button>
    </div>
  </div>
</template>

<script>
import Point from "~/assets/icons/point.svg?inline";
import Phone from "~/assets/icons/phone.svg?inline";

export default {
  name: "LocationCard",
  components: {
    Point,
    Phone,
  },
  props: {
    location: Object,
  },
};
</script>

<style>
</style>