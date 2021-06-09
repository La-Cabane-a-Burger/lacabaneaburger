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
                        <div class="font-semibold leading-none">Votre boisson</div>
                    </div>
                    <!-- /hero section -->
                    <div class="flex items-stretch mt-10 ml-4">
                        <vs-avatar size="70" class="m-2">
                            <img src="~/assets/img/drinks/coca.png" alt="">
                        </vs-avatar>
                        <vs-avatar size="70" class="m-2">
                            <img src="~/assets/img/drinks/cocaZero.png" alt="">
                        </vs-avatar>
                        <vs-avatar size="70" class="m-2">
                            <img src="~/assets/img/drinks/cocaCherry.png" alt="">
                        </vs-avatar>
                        <vs-avatar size="70" class="m-2">
                            <img src="~/assets/img/drinks/orangina.png" alt="">
                        </vs-avatar>
                        <vs-avatar size="70" class="m-2">
                            <img src="~/assets/img/drinks/fanta.png" alt="">
                        </vs-avatar>
                        <vs-avatar size="70" class="m-2">
                            <img src="~/assets/img/drinks/sprite.png" alt="">
                        </vs-avatar>
                        <vs-avatar size="70" class="m-2">
                            <img src="~/assets/img/drinks/oasis.png" alt="">
                        </vs-avatar>
                        <vs-avatar size="70" class="m-2">
                            <img src="~/assets/img/drinks/minutemaid.png" alt="">
                        </vs-avatar>
                        <vs-avatar size="70" class="m-2">
                            <img src="~/assets/img/drinks/perrier.png" alt="">
                        </vs-avatar>
                    </div>
                    <div class="flex items-stretch mt-10 ml-4">
                        <vs-avatar size="70" class="m-2">
                            <img src="~/assets/img/drinks/icetea.png" alt="">
                        </vs-avatar>
                        <vs-avatar size="70" class="m-2">
                            <img src="~/assets/img/drinks/christaline.png" alt="">
                        </vs-avatar>
                        <vs-avatar size="70" class="m-2">
                            <img src="~/assets/img/drinks/heineken.png" alt="">
                        </vs-avatar>
                        <vs-avatar badge badge-color="warn" size="70" class="m-2">
                            <img src="~/assets/img/drinks/despe.png" alt="">
                            <template #badge>
                            +1,00€
                            </template>
                        </vs-avatar>
                    </div>
                    <div class="center">
                    </div>
                    <div class="center mt-24 mb-10">
                        <vs-button
                            class=""
                            warn
                            flat
                            :active="active == 3"
                            @click="active = 3"
                        >
                            Ajouter à la commande
                        </vs-button>
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
      page:3,
      active: 0
    };
  },
};
</script>