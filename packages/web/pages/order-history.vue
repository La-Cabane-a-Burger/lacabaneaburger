<template>
  <div class="order-history p-4 flex flex-col items-center"       :style="{
        backgroundImage: `url(${require('~/assets/backgrounds/background-transparent.png')})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }">
    <br><br><br><br><br><br><br><br>
    <h2 class="text-3xl mb-10">Vos commandes</h2>
    <order-history-card class="w-full" v-for="order of data.orders" :key="order.id" :date="order.date" :price="order.price" :items="order.items" />
      <vs-button class="font-text" color="#EF7202" relief
      >Voir plus
      </vs-button>

  </div>
</template>

<script>
import orderHistoryCard from '~/components/order-history-card.vue'
import data from '../orders.json';

export default {
  components:{

    orderHistoryCard
  },
  data(){
    return {
      data: data
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.order-history{
  font-family: 'Poppins', sans-serif;
}
</style>
