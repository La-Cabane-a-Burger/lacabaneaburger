<template>
  <div>
    <vs-sidebar class="sidebar" v-model="active" absolute open>
      <vs-sidebar-item id="burger">
        <template #icon>
          <img
            @click="getResponse('burger')"
            class="svg"
            src="~/assets/img/hamburger.svg"
          />
        </template>
        <div @click="getResponse('burger')">Nos Burgers</div>
      </vs-sidebar-item>
      <vs-sidebar-item id="nuggets">
        <template #icon>
          <img
            @click="getResponse('nuggets')"
            class="svg"
            src="~/assets/img/chicken.svg"
          />
        </template>
        <div @click="getResponse('nuggets')">Nuggets</div>
      </vs-sidebar-item>
      <vs-sidebar-item id="cake">
        <template #icon>
          <img
            @click="getResponse('cake')"
            class="svg"
            src="~/assets/img/cake.svg"
          />
        </template>
        <div @click="getResponse('cake')">Nos Desserts</div>
      </vs-sidebar-item>
      <vs-sidebar-item id="unit">
        <template #icon>
          <img
            @click="getResponse('unit')"
            class="svg"
            src="~/assets/img/french-fries.svg"
          />
        </template>
        <div @click="getResponse('unit')">A l’unité</div>
      </vs-sidebar-item>
      <vs-sidebar-item id="drink">
        <template #icon>
          <img
            @click="getResponse('drink')"
            class="svg"
            src="~/assets/img/coke.svg"
          />
        </template>
        <div @click="getResponse('drink')">Nos Boissons</div>
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
  methods: {
    getResponse(productType) {
      console.log(productType);
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