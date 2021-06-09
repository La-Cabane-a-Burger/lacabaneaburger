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
                    <div class="lg:2/6 xl:w-2/4 mt-24 lg:mt-18 lg:ml-16 text-left">
                        <div class="font-semibold leading-none">Votre accompagnement</div>
                    </div>
                    <div class="grid grid-cols-2 w-full text-center justify-items-center mt-24">
                        <div class="w-80 h-full  relative">
                            <div class="p-24 bg-friesCard py-4 px-4 border-8 border-friesCard rounded-3xl h-full shadow-2xl">
                                <img src="~/assets/img/french-fries-color-1.png"
                                    class="w-64 h-64 " />
                                    <div class="py-4 space-x-2 items-center">
                                        <p class="text-lg font-semibold">Frites Nature</p>
                                    </div>
                            </div>
                        </div>
                        <div class="w-80 h-full  relative">
                            <div class="bg-friesCard py-4 px-4 border-8 border-friesCard rounded-3xl h-full shadow-2xl">
                                <img src="~/assets/img/french-fries-color-2.png"
                                    class="w-64 h-64 " />
                                    <div class="py-4 space-x-2 items-center">
                                        <p class="text-lg font-semibold">Frites Ail/Paprika doux</p>
                                    </div>
                            </div>
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
export default {
  data() {
    return {
      page:2
    };
  },
};
</script>