<template>
  <div>
    <div
        class="z-40 w-full h-screen"
        :style="{
        backgroundImage: `url('./assets/img/breizh-burger.png')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }"
    >
      <div class="absolute left-16 top-64 lg:top-auto lg:bottom-32 lg:left-32 bg-black/40  rounded-md p-2">
        <div>
          <p class="uppercase text-primary-900">Nouveau</p>
          <p class="flex flex-col font-extrabold text-white uppercase text-8xl font-header">
            <span>Le Breizh</span>
            <span>Burger</span>
          </p>
        </div>
        <div
            class="flex-row justify-between hidden h-20 p-4 rounded-lg w-160 gap-4 lg:flex bg-primary-900"
        >
          <ul
              class="grid grid-flow-col grid-rows-2 list-disc list-inside gap-y-2 gap-x-6"
          >
            <li class="text-sm font-semibold text-white font-text">Salade</li>
            <li class="text-sm font-semibold text-white font-text">
              Sauce poivre
            </li>
            <li class="text-sm font-semibold text-white font-text">
              Viande hachée
            </li>
            <li class="text-sm font-semibold text-white font-text">
              Andouille au lard
            </li>
            <li class="text-sm font-semibold text-white font-text">
              Confit d'oignons
            </li>
            <li class="text-sm font-semibold text-white font-text">
              Roquefort
            </li>
          </ul>
          <div class="w-px bg-white"></div>
          <div class="grid grid-flow-col grid-rows-2 gap-y-2 gap-x-6">
            <p class="text-xl font-bold text-white font-text">10.90€</p>
            <p class="text-white font-text">
              <span class="text-xs uppercase">Menu</span
              ><span class="ml-1 text-sm font-bold">13.50€</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
        class="flex justify-center w-full"
        :style="{
        backgroundImage: `url('./assets/backgrounds/background-transparent.png')`,
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
            <p class="pb-10 text-center lg:text-left text-md font-text">
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
            <img src="../assets/img/burger.png" alt=""/>
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
        class="flex justify-center w-full "
        :style="{
        backgroundImage: `url('./assets/backgrounds/background-transparent.png')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }"
    >
      <div class="w-10/12 py-20">
        <Subtitle topText="Decouvrez" bottomText="nos burgers"/>
        <CardCarrousel :cards="burgers"/>
        <div
            class="flex-row justify-between hidden p-10 my-20 lg:flex rounded-3xl bg-primary-400"
        >
          <div class="flex-1">
            <h4 class="mb-2 text-lg font-semibold text-dark">
              Le Burger du Mois
            </h4>
            <p class="text-xs text-dark lg:text-base">
              Chaque mois une nouvelle recette, imaginée par nos chefs pour vous
              proposer un burger de saison.
            </p>
          </div>
          <div class="flex items-center justify-center flex-1">
            <img
                src="../assets/img/burger-board.png"
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

<script lang="ts">
import Subtitle from "../components/Subtitle.vue";
import CardCarrousel from "../components/CardCarrousel.vue";

import Bun from "assets/icons/BunIcon.vue";
import Steak from "assets/icons/SteakIcon.vue";
import Potatoes from "assets/icons/PotatoesIcon.vue";
import Bullet from "assets/icons/BulletIcon.vue";

import {defineComponent} from 'vue';


export default defineComponent({
  components: {
    Subtitle,
    CardCarrousel,
    Bun,
    Steak,
    Potatoes,
    Bullet
  }, setup() {
    const burgers = [
          {
            title: "Le Montagnard",
            image: "montagnard.png",
            text:
                "Pain, steak, galette de pomme de terre, raclette, poitrine fumée, oignons confits",
          },
          {
            title: "Le Savoyard",
            image: "savoyard.png",
            text:
                "Pain, steak, galette de pomme de terre, raclette, poitrine fumée, oignons confits",
          },
          {
            title: "Le Gaulois",
            image: "gaulois.png",
            text:
                "Pain, steak, galette de pomme de terre, raclette, poitrine fumée, oignons confits",
          },
        ]

    return { burgers }
  }
})
</script>

