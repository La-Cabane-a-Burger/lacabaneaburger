<template>
  <div class="mb-20">
    <div class="pt-40 bg-gradient-to-t from-yellow-500 to-blue-500">
      <div class=" relative w-full">
        <CabDrawingImage class="mx-auto vertical-middle" style="width: 1200px" />
        <div class="absolute top-1/2 w-full mx-auto">
          <h1 class="uppercase text-s md:text-sm custom:text-base xl:text-xl font-extrabold tracking-tighter text-white text-center">Et si vous aussi,<br>vous aviez votre propre<br><span class="text-yellow-600">Cabane à Burger ?</span></h1>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="mt-10 grid gap-4 lg:grid-cols-2 grid-cols-1">
        <div class="p-10 pl-12 m-auto vertical-middle">
          <Subtitle top-text="Le goût d'apprendre" bottom-text="et d'entreprendre" />
          <p class="mt-10 text-justify ...">Vous souhaitez devenir franchisé ?
            <br>Vous avez la volonté de lancer votre propre <span class="text-primary-900">Cabane à Burger</span> ?
            <br><br>Faites-le-nous savoir !
          </p>
          <Button
              class="card-form__button"
              @click="active = 1"
              warn
          >
            Plus d'infos
          </Button>
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
      <div class="grid gap-4 lg:grid-cols-2 grid-cols-1">
        <div class="p-10 xl:mx-44 m-auto vertical-middle">
          <img
              alt="..."
              class="mx-auto vertical-middle lg:float-left"
              src="~/assets/img/wallet.png"
          />
          <div>
            <p class="mt-5 text-center ...">Un investissement minimum pour une rentabilité maximum</p>
          </div>
        </div>
        <div class="p-10 xl:mx-44 m-auto vertical-middle">
          <img
              alt="..."
              class="mx-auto vertical-middle lg:float-left"
              src="~/assets/img/key.png"
          />
          <p class="mt-5 text-center ...">Une solution clé en main : vous signez, vous vous lancez !</p>
        </div>
        <div class="p-10 xl:mx-44 m-auto vertical-middle">
          <img
              alt="..."
              class="mx-auto vertical-middle lg:float-left"
              src="~/assets/img/training.png"
          />
          <p class="mt-5 text-center ...">Formation et accompagnement assurés (conseil sur le choix du lieu d’implantation, installation de la structure, réseau d’approvisionnement négocié...)</p>
        </div>
        <div class="p-10 xl:mx-44 m-auto vertical-middle">
          <img
              alt="..."
              class="mx-auto vertical-middle lg:float-left"
              src="~/assets/img/location.png"
          />
          <p class="mt-5 text-center ...">Une carte nationale partagée, mais aussi une liberté de création de recettes suivant vos envies et vos régions.</p>
        </div>
      </div>
      <Button
          @click="active = 1"
      >
        Je souhaite me lancer
      </Button>
    </div>

  </div>
</template>

<script>
import Button from "../components/Button";
import Subtitle from "../components/Subtitle";
import CabDrawingImage from "../assets/img/CabDrawingImage";
export default {
  components: {CabDrawingImage, Subtitle, Button}
}
</script>
