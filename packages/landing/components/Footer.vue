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


      <div class="justify-between gap-4 hidden lg:flex">
        <div class="flex flex-col gap-3">
          <h2 class="font-bold text-xl">La Franchise</h2>
          <p class="w-40">Vous êtes intéréssé par la franchise ?</p>
          <div>
            <Button
                secondary
                @click="$router.push('/franchise')"
            >
              DÉCOUVREZ LA FRANCHISE
            </Button>
          </div>

        </div>


        <div class="flex flex-col gap-3">
          <h2 class="font-bold text-xl">Nos Restaurants</h2>
          <p class="w-40">Un de nos restaurant est peut-être prêt de chez vous !</p>
          <div>
            <Button
                secondary
                @click="$router.push('/information')"
            >
              NOUS TROUVER
            </Button>
          </div>

        </div>

        <div class="flex flex-col gap-3">
          <h2 class="font-bold text-xl">Notre concept</h2>
          <p class="w-40">Découvrez le concept de la cabane à burger.</p>
          <div>
            <Button
                secondary
                @click="$router.push('/concept')"
            >
              JE DÉCOUVRE
            </Button>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <h2 class="font-bold text-xl">La carte</h2>
          <p class="w-40">Découvrez nos produits du moment !</p>
          <div>
            <Button
                secondary
                @click="$router.push('/menu')"
            >
              VOIR LE MENU
            </Button>
          </div>

        </div>
      </div>

      <div class="text-center">
        <p class="text-xl font-extrabold tracking-tighter">POUR VOTRE SANTE, MANGEZ CINQ FRUITS ET LEGUMES PAR JOUR. WWW.MANGERBOUGER.FR</p>
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
          <a class="hover:text-primary-600 whitespace-nowrap" href="/menu">La Carte</a>
          /
          <a class="hover:text-primary-600 whitespace-nowrap" href="/information">Infos Pratiques</a>
          /
          <a class="hover:text-primary-600 whitespace-nowrap" href="/concept">Le Concept</a>
          /
          <a class="hover:text-primary-600 whitespace-nowrap" href="/franchise">La Franchise</a>
        </div>
        <div class="flex gap-2">
          <a href="#">
            <FacebookIcon class="fill-white hover:fill-primary-600"/>
          </a>
          <a href="#">
            <InstagramIcon class="fill-white hover:fill-primary-600"/>
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
import Button from "~/components/form/Button";

export default {
  components: {Button, Logo, FacebookIcon, InstagramIcon}
}
</script>
