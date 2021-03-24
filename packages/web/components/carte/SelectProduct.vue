<template>
  <div>
    <vs-sidebar class="sidebar" v-model="active" absolute open>
      <vs-sidebar-item id="burger">
        <template #icon>
          <img class="svg" src="~/assets/img/hamburger.svg" />
          {{ text }}
        </template>
        <div>Nos Burgers</div>
      </vs-sidebar-item>
      <vs-sidebar-item id="nuggets">
        <template #icon>
          <img class="svg" src="~/assets/img/chicken.svg" />
        </template>
        <div>Nuggets</div>
      </vs-sidebar-item>
      <vs-sidebar-item id="cake">
        <template #icon>
          <img class="svg" src="~/assets/img/cake.svg" />
        </template>
        <div>Nos Desserts</div>
      </vs-sidebar-item>
      <vs-sidebar-item id="unit">
        <template #icon>
          <img class="svg" src="~/assets/img/french-fries.svg" />
        </template>
        <div>A l’unité</div>
      </vs-sidebar-item>
      <vs-sidebar-item id="drink">
        <template #icon>
          <img class="svg" src="~/assets/img/coke.svg" />
        </template>
        <div>Nos Boissons</div>
      </vs-sidebar-item>
    </vs-sidebar>
  </div>
</template>

  <script>
export default {
  data: () => ({
    active: "home",
    food: "burger",
  }),
  computed: {
    text() {
      if (this.active === "burger") {
        return "burger";
      }
      if (this.active === "nuggets") {
        return "nuggets";
      }
      if (this.active === "cake") {
        return "nuggets";
      }
      if (this.active === "unit") {
        return "nuggets";
      }
      if (this.active === "drink") {
        return "nuggets";
      }
    },
  },
  watch: {
    active(newMenu) {
      this.$emit("changeMenu", newMenu);
    },
  },
};
</script>

<style scoped>
.svg {
  width: 100%;
  max-width: 25px;
  fill: black;
}

.sidebar {
  padding-top: 35px;
}

.vs-sidebar__item.active {
  color: #ef7202;
}
</style>