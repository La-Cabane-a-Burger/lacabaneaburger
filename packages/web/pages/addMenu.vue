<template>
  <div>
    <div class="min-w-8/12 flex flex-col justify-center p-10">
        <div class="relative w-8/12 max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
            <div class="relative bg-white shadow-lg sm:rounded-3xl">
                <div class="px-20 py-6 item-center">
                        <div class="grid grid-cols-3 w-full mt-10">
                            <div>Ajouter en menu</div>
                            <div class="text-center font-bold	">Viking</div>
                            <div class="text-right">12,90€</div>
                        </div>
                    <!-- hero section -->
                    <div class="grid grid-cols-2 w-full">
                        <div class="mt-24 mx-auto">
                            <customBurger :burger='myBurger[0]' @deleteSup='deleteSup' @deleteIng='deleteIng'/>
                        </div>
                        <div class="mt-24 mx-auto">
                            <customSupplement :supplements='myJson' @addSup='addSup'/>
                        </div>
                    </div>
                    <!-- /hero section -->
                    <div class="center mt-24 mb-10">
                        <vs-pagination v-model="page" :length="3" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import customBurger from "~/components/customMenu/CustomBurger.vue";
import customSupplement from "~/components/customMenu/CustomSupplement.vue";
import json from "~/components/carte/supplements.json";
import burger from "~/components/carte/carte.json";
export default {
  components: {
    customBurger,
    customSupplement,
  },
  data() {
    return {
      myJson: json,
      myBurger: burger,
      page:1
    };
  },
  methods: {
    addSup(supplement) {
      this.myBurger[0].supplements.push(supplement)
    },
    deleteSup(index) {
      this.myBurger[0].supplements.splice(index, 1)
    },
    deleteIng(index) {
      this.myBurger[0].ingredients.splice(index, 1)
    }
  },
};
</script>

<style scoped>
</style>