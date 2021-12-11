<template>
  <!-- Footer -->
  <footer class="bg-secondary-900 text-white px-5 lg:px-20 py-6">
    <div class="flex flex-col gap-10">
      <div class="flex justify-between items-center gap-5 lg:gap-20">
        <hr class="w-full h-px bg-white">
        <div>
          <Logo style="width: 100px" class="cab-logo"/>
        </div>
        <hr class="w-full h-px bg-white">
      </div>


      <div class="flex justify-between gap-4 hidden lg:flex">
        <div class="flex flex-col gap-3">
          <h2 class="font-bold text-xl">La Franchise</h2>
          <p class="w-40">Vous êtes intéréssé par la franchise ?</p>
          <div>
            <Button
                secondary
            >
              CONTACTEZ NOUS
            </Button>
          </div>

        </div>


        <div class="flex flex-col gap-3">
          <h2 class="font-bold text-xl">Nos Restaurants</h2>
          <p class="w-40">Un de nos restaurant est peut-être prêt de chez vous !</p>
          <div>
            <Button
                secondary
            >
              NOUS TROUVER
            </Button>
          </div>

        </div>

        <div class="flex flex-col gap-3">
          <h2 class="font-bold text-xl">Commande</h2>
          <p class="w-40">Pour moins d'attente, n'hésitez pas à commander en ligne.</p>
          <div>
            <Button
                secondary
            >
              JE COMMANDE
            </Button>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <h2 class="font-bold text-xl">La carte</h2>
          <p class="w-40">Découvrez nos produits du moment !</p>
          <div>
            <Button
                secondary
            >
              VOIR LE MENU
            </Button>
          </div>

        </div>
      </div>
      <div class="grid grid-cols-3">
        <div class="col-start-2 col-end-2">
          <Button
              class="lg:hidden  whitespace-nowrap"
              secondary
              @click="active = 1"
          >
            JE COMMANDE
          </Button>
        </div>
      </div>


      <div class="text-center">
        <h4 class="font-header text-2xl">POUR VOTRE SANTE, MANGEZ CINQ FRUITS ET LEGUMES PAR JOUR. WWW.MANGERBOUGER.FR</h4>
        <div class="mt-2 text-xs">
          <a class="hover:text-primary-600" href="#">Mentions légales</a>
          -
          <a class="hover:text-primary-600" href="#">CGV</a>
          -
          <a class="hover:text-primary-600" href="#">Données personnelles</a>
        </div>
      </div>

      <hr class="w-full h-px">

      <div class="flex justify-center gap-4 lg:justify-between flex-wrap">
        <div class="flex gap-2 lg:gap-4 text-xs lg:text-xl">
          <a class="hover:text-primary-600 whitespace-nowrap" href="#">La Carte</a>
          /
          <a class="hover:text-primary-600 whitespace-nowrap" href="#">Infos Pratiques</a>
          /
          <a class="hover:text-primary-600 whitespace-nowrap" href="#">Le Concept</a>
          /
          <a class="hover:text-primary-600 whitespace-nowrap" href="#">La Franchise</a>
        </div>
        <div class="flex gap-2">
          <a href="#">
            <FacebookIcon class="fill-white hover:fill-primary-600"/>
          </a>
          <a href="#">
            <InstagramIcon class="fill-white hover:fill-primary-600"/>
          </a>
          <a href="#">
            <TwitterIcon class="fill-white hover:fill-primary-600"/>
          </a>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer -->
</template>
<script>
import Logo from "~/assets/img/logo";
import FacebookIcon from "~/assets/icons/FacebookIcon"
import InstagramIcon from "~/assets/icons/InstagramIcon"
import TwitterIcon from "~/assets/icons/TwitterIcon"
import Button from "~/components/Button";

export default {
  components: {Button, TwitterIcon, Logo, FacebookIcon, InstagramIcon}
}
</script>
