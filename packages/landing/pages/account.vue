<template>
  <div>
    <div class="flex items-center justify-center h-screen">
      <AccountCard/>
      <LoyaltyCard/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AccountCard from "~/components/AccountCard.vue";
import LoyaltyCard from "~/components/LoyaltyCard.vue";

export default defineComponent({
  components: {LoyaltyCard, AccountCard}
})

</script>

<style>
body {
  background: #ffffff;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
}
</style>
