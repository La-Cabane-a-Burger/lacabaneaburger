<template>
  <div class="flex container">
    <div class="w-full">
      <SelectProduct @changeMenu="changeMenu" />
    </div>
    <CardMenu :activeMenu="activeMenu" />
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
  data: () => ({
    activeMenu: "burger",
  }),
  methods: {
    changeMenu(newMenu) {
      this.activeMenu = newMenu;
    },
  },
};
</script>

<style scoped>
</style>