<template>
  <div class="order-history-card shadow-lg px-2 py-3 text-left rounded">
    <div class="flex items-center">
      <img class="w-32 h-32 object-cover rounded-full" src="../assets/img/burger2.jpg" alt="">
      <div class="ml-5">
        <h3>{{ formattedDate }}</h3>
        <p>{{ price }}€</p>
        <p v-if="items">{{items.length}} plat</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: String,
    price: Number,
    items: Array
  },
  computed: {
    formattedDate() {
      const DDate = new Date(this.date);
      const jour = DDate.getDate();
      return jour
    }
  }
}
</script>
