<template>
  <div class="mb-20">
    <StarsBackground />

    <div class="pt-40">
      <div class="relative w-full z-10">
        <CabDrawingImage
          class="mx-auto vertical-middle xl:w-[1200px]"
        />
        <div class="absolute top-1/2 w-full mx-auto">
          <h1
            class="
              uppercase
              text-s
              md:text-sm
              custom:text-base
              xl:text-xl
              font-extrabold
              tracking-tighter
              text-white text-center
            "
          >
            Et si vous aussi,<br />vous aviez votre propre<br /><span
              class="text-yellow-600"
              >Cabane à Burger ?</span
            >
          </h1>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="mt-10 grid gap-4 lg:grid-cols-2 grid-cols-1">
        <div class="p-10 pl-12 m-auto vertical-middle">
          <Subtitle
            top-text="Le goût d'apprendre"
            bottom-text="et d'entreprendre"
          />
          <p class="mt-10 text-justify ...">
            Vous souhaitez devenir franchisé ? <br />Vous avez la volonté de
            lancer votre propre
            <span class="text-primary-900">Cabane à Burger</span> ?
            <br /><br />Faites-le-nous savoir !
          </p>
          <div class="text-center mt-10">
            <Button
              class="card-form__button w-1/3 justify-center"
              @click="active = 1"
              warn
            >
              Plus d'infos
            </Button>
          </div>
        </div>
        <div class="p-10">
          <img
            alt="..."
            class="mx-auto vertical-middle"
            src="~/assets/img/burger_franchise.png"
          />
        </div>
      </div>
      <div class="mt-10 grid gap-4 grid-cols-1">
        <div class="m-auto vertical-middle">
          <Subtitle top-text="Vos avantages" />
        </div>
      </div>
      <div class="grid gap-4 md:grid-cols-2 grid-cols-1 xl:p-10 ml-2">
        <div class="flex flex-row ml-5 vertical-middle">
          <div class="flex flex-2 justify-center items-center">
            <img
              alt="..."
              class="mx-auto vertical-middle lg:float-left w-full"
              src="~/assets/img/wallet.png"
            />
          </div>
          <div class="flex flex-1 items-center">
            <p class="p-10">
              Un investissement minimum pour une rentabilité maximum
            </p>
          </div>
        </div>
        <div class="flex flex-row ml-5 vertical-middle">
          <div class="flex flex-2 justify-center items-center">
            <img
              alt="..."
              class="mmx-auto vertical-middle lg:float-left w-full"
              src="~/assets/img/key.png"
            />
          </div>
          <div class="flex flex-1 items-center">
            <p class="p-10">
              Une solution clé en main : vous signez, vous vous lancez !
            </p>
          </div>
        </div>
        <div class="flex flex-row ml-5 vertical-middle">
          <div class="flex flex-2 justify-center items-center">
            <img
              alt="..."
              class="mx-auto vertical-middle lg:float-left w-full"
              src="~/assets/img/training.png"
            />
          </div>
          <div class="flex flex-1 justify-center items-center">
            <p class="p-10">
              Formation et accompagnement assurés (conseil sur le choix du lieu
              d’implantation, installation de la structure, réseau
              d’approvisionnement négocié...)
            </p>
          </div>
        </div>
        <div class="flex flex-row ml-5 vertical-middle">
          <div class="flex flex-2 justify-center items-center">
            <img
              alt="..."
              class="mx-auto vertical-middle lg:float-left w-full"
              src="~/assets/img/location.png"
            />
          </div>
          <div class="flex flex-1 justify-center items-center">
            <p class="p-10">
              Une carte nationale partagée, mais aussi une liberté de création
              de recettes suivant vos envies et vos régions.
            </p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <Button @click="active = 1" class="mt-10"> Je souhaite me lancer </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/form/Button";
import Subtitle from "../components/Subtitle";
import CabDrawingImage from "../assets/img/CabDrawingImage";
import StarsBackground from "../components/StarsBackground";
export default {
  components: { StarsBackground, CabDrawingImage, Subtitle, Button },
};
</script>
