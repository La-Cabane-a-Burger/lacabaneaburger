<template>
  <div class="flex container">
    <div class="w-full">
      <SelectProduct />
    </div>
    <CardMenu />
    <Order />
  </div>
</template>
<script>
import CardMenu from "~/components/carte/CardMenu.vue";
import SelectProduct from "~/components/carte/SelectProduct.vue";
import Order from "~/components/carte/Order.vue";

export default {
  components: {
    CardMenu,
    SelectProduct,
    Order,
  },
};
</script>

<style scoped>
</style>