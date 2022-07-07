<template>
  <div>
    <Html>
    <Head>
      <Title>La Cabane à Burger</Title>
      <Meta name="description"
            content="Pour déguster des burgers gourmets, préparés à la demande et sur commande au coin de la rue, rendez-vous à La Cabane à Burger !"/>
    </Head>
    </Html>
    <div
        class="z-40 w-full h-screen homeSlide"
        :style="{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }"
    >
      <div class="absolute left-16 top-64 lg:top-auto lg:bottom-32 lg:left-32 bg-black/40  rounded-md p-2">
        <div>
          <p class="uppercase font-extrabold font-headline text-primary-900">DÉCOUVREZ</p>
          <p class="flex flex-col text-white uppercase text-4xl sm:text-8xl font-black font-headline tracking-tight">
            <span>Le</span>
            <span>Montagnard</span>
          </p>
        </div>
        <div
            class="font-headline mt-2 flex-row justify-between hidden h-20 p-4 rounded-lg w-160 gap-4 lg:flex bg-primary-900"
        >
          <ul
              class="grid grid-flow-col grid-rows-2 list-disc list-inside gap-y-2 gap-x-6"
          >
            <li class="text-sm font-semibold text-white ">Steak haché</li>
            <li class="text-sm font-semibold text-white">
              Confit d'oignons jaunes
            </li>
            <li class="text-sm font-semibold text-white">
              Galette de pomme de terre
            </li>
            <li class="text-sm font-semibold text-white">
              Poitrine fumée
            </li>
            <li class="text-sm font-semibold text-white">
              Raclette
            </li>
            <li class="text-sm font-semibold text-white">
              Sauce Barbecue            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
        class="flex justify-center w-full"
        :style="{
        backgroundImage: `url(${BackgroundTransparent})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: '#FBD69F',
      }"
    >
      <div class="w-10/12 py-20">
        <div class="flex flex-col items-start lg:flex-row">
          <div class="flex flex-col items-center flex-1 mb-10 lg:items-start">
            <Subtitle
                class="text-center lg:text-left"
                topText="Les burgers gourmets"
                bottomText="à coté de chez vous"
            />
            <p class="pb-10 text-center lg:text-left text-md font-medium text-gray-900">
              Pour déguster des burgers gourmets, préparés à la demande et sur
              commande au coin de la rue, rendez-vous à La Cabane à Burger !
              Notre pain bio, créé uniquement pour notre carte, s’accorde avec
              des produits frais sélectionnés par nos soins pour vous régaler et
              réveiller vos papilles. Chaque mois, retrouvez une recette
              originale de saison, accompagnée de frites fraiches de La Cabane.
            </p>
            <button color="#EF7202" border size="l"
            >Intérréssé par la franchise ? C’est par ici !
            </button>
          </div>
          <div class="flex justify-center flex-1 w-full lg:justify-end">
            <img src="@/assets/img/burger.png" alt=""/>
          </div>
        </div>
        <ul class="justify-between hidden mt-20 lg:flex">
          <li class="flex flex-col items-center justify-center">
            <Bun class="pb-4 text-dark w-full fill-current text-dark"/>
            <Subtitle
                class="items-center"
                topText="Pains bio"
                bottomText="recette Spéciale"
            />
          </li>
          <li class="flex flex-col items-center justify-center">
            <Bullet class="text-dark w-full fill-current text-dark"/>
          </li>
          <li class="flex flex-col items-center justify-center">
            <Steak class="pb-4 text-dark w-full fill-current text-dark"/>
            <Subtitle
                class="items-center"
                topText="Viande bovine"
                bottomText="française"
            />
          </li>
          <li class="flex flex-col items-center justify-center">
            <Bullet class="text-black w-full fill-current text-dark"/>
          </li>
          <li class="flex flex-col items-center justify-center">
            <Potatoes class="pb-4 w-full fill-current text-dark"/>
            <Subtitle
                class="items-center"
                topText="Frites fraîches"
                bottomText="de la cabane"
            />
          </li>
        </ul>
      </div>
    </div>
    <div
        class="flex justify-center w-full"
        :style="{
        backgroundImage: `url(${BackgroundTransparent})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }"
    >
      <div class="w-10/12 py-20">
        <Subtitle topText="Decouvrez" bottomText="nos burgers"/>
        <CardCarrousel :cards="burgers"/>
        <div
            class="flex-row justify-between hidden p-10 my-20 lg:flex rounded-3xl bg-primary-400 font-headline"
        >
          <div class="flex-1">
            <h4 class="mb-2 text-lg font-extrabold uppercase text-dark">
              Le Burger du Mois
            </h4>
            <p class="text-xs text-dark lg:text-base">
              Chaque mois une nouvelle recette, imaginée par nos chefs pour vous
              proposer un burger de saison.
            </p>
          </div>
          <div class="flex items-center justify-center flex-1">
            <img
                src="@/assets/img/burger-board.png"
                alt="Burger sur une planche en bois"
            />
          </div>
          <div class="flex items-center justify-end flex-1">
            <Button secondary
            >Découvrir le burger du mois
            </Button>
          </div>
        </div>
        <div class="flex justify-center w-full">
          <Button>Voir la carte</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Subtitle from "@/components/Subtitle.vue";
import CardCarrousel from "@/components/CardCarrousel.vue";
import Button from "@/components/form/Button.vue";

import Bun from "@/assets/icons/BunIcon.vue";
import Steak from "@/assets/icons/SteakIcon.vue";
import Potatoes from "@/assets/icons/PotatoesIcon.vue";
import Bullet from "@/assets/icons/BulletIcon.vue";

import MontagnardImg from "@/assets/img/montagnard.png"
import SavoyardImg from "@/assets/img/savoyard.png"
import GauloisImg from "@/assets/img/gaulois.png"
import BackgroundTransparent from "@/assets/backgrounds/background-transparent.png"

const burgers = [
  {
    title: "Le Montagnard",
    image: MontagnardImg,
    text:
        "Pain, steak, galette de pomme de terre, raclette, poitrine fumée, oignons confits",
  },
  {
    title: "Le Savoyard",
    image: SavoyardImg,
    text:
        "Pain, steak, galette de pomme de terre, raclette, poitrine fumée, oignons confits",
  },
  {
    title: "Le Gaulois",
    image: GauloisImg,
    text:
        "Pain, steak, galette de pomme de terre, raclette, poitrine fumée, oignons confits",
  },
]

</script>

<style lang="css" scoped>

@media only screen and (max-width: 1024px) {
  .homeSlide {
    background-image: url("@/assets/img/mobile-homeslide-montagnard.jpg");
    background-position: center bottom;
  }
}

@media only screen and (min-width: 700px) {
  .homeSlide {
    background-image: url("@/assets/img/desktop-homeslide-montagnard.jpg");
    background-position: center bottom;
  }
}
</style>

