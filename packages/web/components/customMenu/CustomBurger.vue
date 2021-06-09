<template>
    <div class="container">
        <div class="">
            <h1 class="font-bold">Votre burger</h1><br>
            <img
                alt="..."
                class="mr-auto ml-2 vertical-middle w-5/6"
                src="~/assets/img/burger_top.png"
            />
            <div class="mx-auto vertical-middle" v-for="(data, index) in burger.ingredients" v-bind:key="data">
                <vs-button
                border
                class="justify-center float-left w-300 ml-5"
                color="tumblr"
                >
                {{ data }}
                </vs-button>
                <vs-button
                    icon
                    color="pinterest"
                    class="float-left opacity-40"
                    @click="deleteIng(index)"
                >
                    <i class='bx bxl-pinterest text-xs'>-</i>
                </vs-button>
            </div>
            <div class="mx-auto vertical-middle" v-for="(data, index) in burger.supplements" v-bind:key="data.id">
                <vs-button
                border
                class="justify-center float-left w-300 ml-5"
                color="tumblr"
                >
                {{ data.name }}
                </vs-button>
                <vs-button
                    icon
                    color="pinterest"
                    class="float-left"
                    @click="deleteSup(index)"
                >
                    <i class='bx bxl-pinterest text-xs'>-</i>
                </vs-button>
            </div>
            <img
                alt="..."
                class="mr-auto ml-2 vertical-middle w-5/6"
                src="~/assets/img/burger_bottom.png"
            />
        </div>
    </div>
</template>
<script>
import json from "../carte/carte.json";
export default {
  data() {
    return {
      myJson: json,
    };
  },
  props: {
      burger: Object
  },
  computed: {
/*       ingredients() {
            return this.burger.ingredients.concat(this.burger.supplements.map(supp=>supp.name))
      } */
  },
  methods: {
    deleteSup(supplement) {
      this.$emit('deleteSup', supplement)
    },
    deleteIng(ingredient) {
      this.$emit('deleteIng', ingredient)
    }
  },
};
</script>

<style scoped>

</style>