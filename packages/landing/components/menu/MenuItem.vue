<template>
  <div class="bg-white shadow mt-4 overflow-hidden p-4 sm:rounded-lg w-96">
    <img class="w-80 py-2" src="../../assets/img/burger.png" alt="">
    <div class="font-bold text-xl">{{ item.name }}</div>
    <div>
        <span class="text-gray-500 pb-4" v-for="(data, i) in item.ingredients" :key="data.id">
          {{
            data.ingredient.name
          }}{{ item.ingredients[i] === item.ingredients[item.ingredients.length - 1] ? '' : ', ' }}
        </span>

      <div class="font-medium text-gray-800">
        {{ item.price }} €
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  item: {
    type: Object,
    required: true
  }
});

</script>
