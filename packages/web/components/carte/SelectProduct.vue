<template>
  <div>
    <vs-sidebar class="sidebar" v-model="active" absolute open>
      <vs-sidebar-item id="burger">
        <template #icon>
          <img class="svg" src="~/assets/img/hamburger.svg" />
        </template>
        Nos Burgers
      </vs-sidebar-item>
      <vs-sidebar-item id="nuggets">
        <template #icon>
          <img class="svg" src="~/assets/img/chicken.svg" />
        </template>
        Nos Nuggets
      </vs-sidebar-item>
      <vs-sidebar-item id="cake">
        <template #icon>
          <img class="svg" src="~/assets/img/cake.svg" />
        </template>
        Nos Desserts
      </vs-sidebar-item>
      <vs-sidebar-item id="unit">
        <template #icon>
          <img class="svg" src="~/assets/img/french-fries.svg" />
        </template>
        A l’unité
      </vs-sidebar-item>
      <vs-sidebar-item id="dring">
        <template #icon>
          <img class="svg" src="~/assets/img/coke.svg" />
        </template>
        Nos Boissons
      </vs-sidebar-item>
    </vs-sidebar>
  </div>
</template>

  <script>
export default {
  data: () => ({
    active: "home",
  }),
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
</style>