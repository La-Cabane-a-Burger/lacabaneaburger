<template>
  <div class="order-history font-extrabold p-4 text-center">
    <h2>Vos commandes</h2>
    {{data.orders}}
    <order-history-card :date="data.orders[0].date" :price="data.orders[0].price" :items="data.orders[0].items" />
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
