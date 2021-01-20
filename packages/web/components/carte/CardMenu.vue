<template>
  <div class="card-container">
    <div v-for="data in myJson">
      <vs-card
        class="card"
        v-if="data.productType === 'burger' && burger === true"
      >
        <template #title>
          <h3>{{ data.productName }}</h3>
        </template>
        <template #img>
          <img src="https://vuesax.com/foto5.png" alt="" />
        </template>
        <template #text>
          <p>{{ data.ingredient }}</p>
          <p style="margin-top: 25px">
            SEUL {{ data.price_alone }}€ | MENU {{ data.price_menu }}€
          </p>
        </template>
        <template #interactions>
          <vs-button warn icon>
            <i class="bx bx-heart"></i>
          </vs-button>
        </template>
      </vs-card>
      <vs-avatar v-if="data.productType === 'boisson' && burger === false">
        <template #text> Lily </template>
      </vs-avatar>
    </div>
  </div>
</template>

<script>
import json from "./carte.json";
export default {
  data() {
    return {
      burger: true,
      myJson: json,
    };
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  margin-right: 15px;
  margin-left: 15px;
  margin-bottom: 50px;
  width: 40vh;
}
</style>