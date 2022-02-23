<template>
  <div :v-if="myStore && !loading">
    <div
        class="flex items-center justify-center w-full"
        :style="{
        backgroundImage: `url('./assets/backgrounds/background-transparent.png'})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }"
    >
      <div class="flex flex-row w-10/12 mt-48 mb-12 bg-white shadow-lg h-4/6 rounded-xl">
        <div class="flex-[0_1_50%] p-10">
          <Subtitle class="ml-5" :top-text="'La cabane à burger - '" />
          <div class="flex">
            <div>
              <LocationMarkerIcon class="w-7 mr-5" />
            </div>
            <div>
              <p>La Cabane A Burger {{ myStore.city }}</p>
              <p>{{ myStore.address }}</p>
              <p>{{ myStore.postal_code }} {{ myStore.city }}</p>
              <p>{{ myStore.phone }}</p>
              <span class="rounded-sm text-green-500"><CheckIcon class="w-7 inline"/>&nbsp;Ouvert</span>
            </div>
          </div>
          <hr class="w-full mt-5">
          <div class="mt-5 mb-5">
          <Accordion class="mb-4">
            <template v-slot:title>
              <p>Voir les horaires d'ouverture</p>
            </template>
            <template v-slot:content>
              <table class="border-collapse border border-gray-400 ...">
              <thead>
                <tr>
                  <th class="border border-white w-1/2 ..."></th>
                  <th class="border border-white ...">Horaires</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-white w-1/2 ...">Lundi<!-- <div class="border-dashed border w-3/4 inline-block ml-1"></div> --></td>
                  <td class="border border-white ...">11h30/13h45, 17h00/20h00</td>
                </tr>
                <tr>
                  <td class="border border-white w-1/2 ...">Mardi</td>
                  <td class="border border-white ...">11h30/13h45, 17h00/20h00</td>
                </tr>
                <tr>
                  <td class="border border-white w-1/2 ...">Mercredi</td>
                  <td class="border border-white ...">11h30/13h45, 17h00/20h00</td>
                </tr>
                <tr>
                  <td class="border border-white w-1/2 ...">Jeudi</td>
                  <td class="border border-white ...">11h30/13h45, 17h00/20h00</td>
                </tr>
                <tr>
                  <td class="border border-white w-1/2 ...">Vendredi</td>
                  <td class="border border-white ...">11h30/13h45, 17h00/20h00</td>
                </tr>
                <tr>
                  <td class="border border-white w-1/2 ...">Samedi</td>
                  <td class="border border-white ...">11h30/13h45, 17h00/20h00</td>
                </tr>
                <tr>
                  <td class="border border-white w-1/2 ...">Dimanche</td>
                  <td class="border border-white ...">11h30/13h45, 17h00/20h00</td>
                </tr>
              </tbody>
            </table>
            </template>
          </Accordion>
          </div>
          <hr class="w-full mt-5">
          <div class="w-full flex items-center	justify-center">
            <Button class="mt-5 mx-5">J'Y VAIS</Button>
            <Button class="mt-5 mx-5" secondary>COMMANDER</Button>
          </div>
          <hr class="w-full mt-5">
          <div class="mt-5 inline-flex">
            <div class="flex">
              <div class="w-6 h-6 rounded-full inline-flex items-center justify-center bg-green-500 text-white mr-2"><CheckIcon class="w-5 inline"/>
              </div>
              <div>A emporter</div>
            </div>

            <div class="flex ml-2">
              <div class="w-6 h-6 rounded-full inline-flex items-center justify-center bg-green-500 text-white mr-2"><CheckIcon class="w-5 inline"/>
              </div>
              <div>Sur place</div>
            </div>
            <br>
            <div class="flex ml-2">
              <div class="w-6 h-6 rounded-full inline-flex items-center justify-center bg-green-500 text-white mr-2"><CheckIcon class="w-5 inline"/>
              </div>
              <div>En livraison</div>
            </div>

            <div class="flex ml-2">
              <div class="w-6 h-6 rounded-full inline-flex items-center justify-center bg-green-500 text-white mr-2"><CheckIcon class="w-5 inline"/>
              </div>
              <div>En click & collect</div>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <iframe :src="'https://www.google.com/maps?q='+ myStore.address +','+ myStore.postal_code + myStore.city +'&output=embed'" class="rounded-r-xl w-full h-full block" allowfullscreen="true" loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, defineAsyncComponent} from "vue";
import { LocationMarkerIcon, CheckIcon } from "@heroicons/vue/solid";
import Accordion from "../../components/Accordion.vue";
import Button from "../../components/form/Button.vue";
import { useResult } from '@vue/apollo-composable';
import { useGetStoreBySlugQuery } from '../../generated/graphql';
export default defineComponent({
  components: {LocationMarkerIcon, CheckIcon, Button, Accordion},
  setup() {
    const route = useRoute()
    const { result, loading } = useGetStoreBySlugQuery({slug: route.params.name })
    const myStore = useResult(result, {})
    return { myStore, loading }
  }
})
</script>
