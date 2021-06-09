<template>
  <div class="container">
    <div class="">
        <h1 class="font-bold">Suppléments disponibles</h1><br>
        <div v-for="data in supplements" v-bind:key="data.name">
            <vs-button
            border
            class="w-full justify-center"
            color="tumblr"
            @click="addSup(data)"
            >
            {{ data.name }} | MENU {{ data.price }}€
        </vs-button>
        </div>
    </div>
  </div>
</template>
<script>
import json from "../carte/supplements.json";
export default {
  data() {
    return {
      myJson: json,
    };
  },
  props: {
    supplements: Array
  },
  methods: {
    addSup(supplement) {
      this.$emit('addSup', supplement)
    }
  },
};
</script>

<style scoped>

</style>