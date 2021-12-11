<template>
  <div class="grid gap-4 lg:grid-cols-2 grid-cols-1 pt-60">
    <div class="pt-11">
      <img
          alt="..."
          class=""
          src="~/assets/img/concept_burger.png"
      />
    </div>
    <div class="p-10 pr-12">
      <Subtitle top-text="Notre" bottom-text="Savoir-faire"/>
      <p class="mt-5 text-justify ...">La Cabane à Burger, c’est des burgers gourmets à la Française, cuisinés à base de
        produits frais* sélectionnés par nos soins, sur demande et à la commande, à déguster sur place ou à emporter.
        <br><br>Notre pain bio, fabriqué spécialement pour nous suivant une recette tenue secrète, s’agrémente d’un
        steak haché et de légumes frais. Justes salées ou saupoudrées de notre mélange spécial d’ail et de paprika doux
        pour relever le bon gout de la pomme de terre, nos frites fraiches complètent l’expérience d’un repas savoureux
        cuisiné devant vous.
        <br><br>Pour prolonger la découverte, retrouvez chaque mois une nouvelle recette pensée et travaillée au gré des
        expériences gustatives des chefs.
      </p>
    </div>
    <div class="p-10 pl-12">
      <Subtitle top-text="Les" bottom-text="Créateurs"/>
      <p class="mt-5 text-justify ...">Charcutier Traiteur de formation, Laurent (à gauche) exerce depuis de nombreuses
        années le métier de pizzaiolo en tant que gérant d’établissement. Découvrant la qualité de ses pizzas, on lui
        suggère de se lancer dans les burgers, nouvelle tendance de la restauration. Séduit par le challenge et motivé
        par l’envie de proposer une alternative de qualité face aux fast food et aux grandes enseignes, il crée en 2016
        la 1ère Cabane à Burger surnommée par ses clients La Cab.
        <br><br>Roland (à droite) est gérant depuis 10 ans de deux établissements de restauration. Issu d’une famille de
        fromagers, il a parcouru les étals de marchés à leurs côtés, développant ainsi son goût et sa compétence à
        sélectionner des produits frais de qualité.
        <br><br>Partageant les mêmes valeurs de la bonne cuisine, Roland rejoint rapidement Laurent pour développer La
        Cab en réseau de franchise. Ils décident alors de proposer à d’autres passionnés de cuisine une solution clé en
        main pour se lancer.
      </p>
    </div>
    <div class="p-10">
      <img
          alt="..."
          class="mx-auto vertical-middle"
          src="~/assets/img/concept_patron.png"
      />
    </div>
  </div>
</template>

<script>
import Subtitle from "../components/Subtitle";

export default {
  components: {Subtitle}
}
</script>
<style>
</style>
