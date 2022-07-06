<template>
  <div class="bg-white shadow mt-4 overflow-hidden p-4 sm:rounded-lg w-96">
    <div class="font-bold text-xl">{{ item.name }}</div>
    <div>
        <span class="text-gray-500 pb-4" v-for="(data, i) in item.ingredients" :key="data.id">
          {{
            data.ingredient.name
          }}{{ item.ingredients[i] === item.ingredients[item.ingredients.length - 1] ? '' : ', ' }}
        </span>
      <span class="text-gray-500 pb-4" v-if="item.description">
          {{ item.description}}
        </span>


    </div>
    <div class="font-medium flex flex-col gap-1 mt-3">
      <div class="flex items-center gap-2">
        <div v-if="item.menu">
          SEUL
        </div>
        <div class="bg-primary-900 text-white rounded w-fit px-3 py-1 font-bold">{{ formatPrice(item.price) }} €</div>
      </div>
      <div class=" text-gray-800" v-if="item.menu"><span>MENU</span> <span class="text-xs text-gray-500 mr-1">Burger / Frite / Soda 33cl </span> <span class="font-bold">{{ formatPrice(item.menu.price) }} €</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const formatPrice = (price:number) => {
  const slicedPrice = price.toString().split('.');
  if(!slicedPrice[1] || slicedPrice[1].length > 1) {
    return price;
  } else {
    return price + '0';
  }
}

</script>
