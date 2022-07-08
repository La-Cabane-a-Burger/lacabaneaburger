<template>
    <div class="bg-white shadow mt-4 overflow-hidden p-4 sm:rounded-lg w-96 flex flex-col justify-between">
      <div>
        <div v-if="loading">
          <div class="animate-pulse bg-slate-200 rounded-lg w-40 h-5"></div>
          <div class="flex gap-2">
            <div class="animate-pulse bg-slate-200 rounded-lg w-12 h-3 mt-4"></div>
            <div class="animate-pulse bg-slate-300 rounded-lg w-24 h-3 mt-4"></div>
            <div class="animate-pulse bg-slate-400 rounded-lg w-16 h-3 mt-4"></div>
          </div>
          <div class="animate-pulse bg-slate-200 rounded-lg w-32 h-3 mt-2"></div>
          <div class="flex gap-2">
            <div class="animate-pulse bg-slate-300 rounded-lg w-32 h-3 mt-2"></div>
            <div class="animate-pulse bg-slate-400 rounded-lg w-32 h-3 mt-2"></div>
          </div>
        </div>
        <div v-else class="font-bold text-xl">{{ item.name }}</div>
        <div v-if="item.capacity" class="text-gray-500">
          {{ item.capacity }} cl
        </div>
        <div class="text-gray-500" v-if="item.description">
          {{ item.description }}
        </div>
        <div>
        <span class="text-gray-500 font-medium pb-4" v-for="(data, i) in item.ingredients" :key="data.id">
          {{
            data.ingredient.name
          }}{{ item.ingredients[i] === item.ingredients[item.ingredients.length - 1] ? '' : ', ' }}
        </span>
        </div>
      </div>


      <div v-if="item.price || item?.menu?.price" class="font-medium flex flex-col gap-1 mt-3">
        <div class="flex items-center gap-2">
          <div v-if="item.menu">
            SEUL
          </div>
          <div class="bg-primary-900 text-white rounded w-fit px-3 py-1 font-bold">{{ formatPrice(item.price) }} €</div>
        </div>
        <div class=" text-gray-800" v-if="item.menu"><span>MENU</span> <span class="text-xs text-gray-500 mr-1">{{ categories[item.category]}} / Frite / Soda 33cl </span>
          <span class="font-bold">{{ formatPrice(item.menu.price) }} €</span></div>
      </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
  item: {
    type: Object,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const categories = {
  BURGER: "Burger",
  NUGGETS: "Nuggets"
}

const formatPrice = (price: number) => {
  const slicedPrice = price.toString().split('.');
  if (!slicedPrice[1] || slicedPrice[1].length > 1) {
    return price;
  } else {
    return price + '0';
  }
}

</script>
