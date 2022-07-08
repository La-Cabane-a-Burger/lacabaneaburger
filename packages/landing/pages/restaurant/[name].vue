<template>
  <div v-if="myStore && !loading && !pageNotFound">
    <div
        class="flex items-center justify-center w-full"
        :style="{
        backgroundImage: `url('./assets/backgrounds/background-transparent.png'})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }"
    >
      <div class="flex flex-col lg:flex-row w-10/12 mt-48 mb-12 bg-white shadow-lg h-4/6 rounded-xl">
        <div class="flex-[0_1_50%] p-10">
          <Subtitle class="ml-5" :top-text="'La cabane à burger - ' + myStore.city"/>
          <div class="flex">
            <div>
              <LocationMarkerIcon class="w-7 mr-5"/>
            </div>
            <div>
              <p>La Cabane A Burger {{ myStore.city }}</p>
              <p>{{ myStore.address }}</p>
              <p>{{ myStore.postal_code }} {{ myStore.city }}</p>
              <p>{{ myStore.phone }}</p>
            </div>
          </div>
          <hr class="w-full mt-5">
          <div class="mt-5 mb-5">
            <Accordion class="mb-4">
              <template #title>
                <p>Voir les horaires d'ouverture</p>
              </template>
              <template #content>
                <table class="border-collapse border border-gray-400 m-auto mt-5">
                  <thead>
                  <tr>
                    <th class="border border-white w-1/3"></th>
                    <th class="border border-white"></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="openning in formattedOpennings" :key="openning.day">
                    <td class="border border-white w-1/2">{{ openning.day }}</td>
                    <td class="border border-white">{{ openning.time }}</td>
                  </tr>
                  </tbody>
                </table>
              </template>
            </Accordion>
          </div>
          <hr class="w-full mt-5">
          <div class="w-full flex items-center	justify-center">
            <Button class="mt-5 mx-5" @click="map(myStore.latitude, myStore.longitude)">J'Y VAIS</Button>
            <Button class="mt-5 mx-5" @click="goToMenu" >Voir la carte</Button>
          </div>
          <hr class="w-full mt-5">
          <div class="mt-5 flex justify-center flex-col sm:flex-row items-left">
            <div class="flex mr-2">
              <div class="w-6 h-6 rounded-full inline-flex items-center justify-center bg-green-500 text-white mr-2">
                <CheckIcon class="w-5 inline"/>
              </div>
              <div>À emporter</div>
            </div>

            <div class="flex mr-2">
              <div class="w-6 h-6 rounded-full inline-flex items-center justify-center bg-green-500 text-white mr-2">
                <CheckIcon class="w-5 inline"/>
              </div>
              <div>Sur place</div>
            </div>

<!--            <div class="flex mr-2">-->
<!--              <div class="w-6 h-6 rounded-full inline-flex items-center justify-center bg-green-500 text-white mr-2">-->
<!--                <CheckIcon class="w-5 inline"/>-->
<!--              </div>-->
<!--              <div>En livraison</div>-->
<!--            </div>-->

<!--            <div class="flex">-->
<!--              <div class="w-6 h-6 rounded-full inline-flex items-center justify-center bg-green-500 text-white mr-2">-->
<!--                <CheckIcon class="w-5 inline"/>-->
<!--              </div>-->
<!--              <div>En click & collect</div>-->
<!--            </div>-->
          </div>
        </div>
        <div class="flex-1">
          <iframe
              :src="'https://www.google.com/maps?q='+ myStore.address +','+ myStore.postal_code + myStore.city +'&output=embed'"
              class="lg:rounded-r-xl w-full h-full block h-80 lg:h-full" allowfullscreen="true" loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {LocationMarkerIcon, CheckIcon} from "@heroicons/vue/solid";
import Accordion from "@/components/Accordion.vue";
import Subtitle from "@/components/Subtitle.vue";
import Button from "@/components/form/Button.vue";
import {useGetStoreBySlugQuery} from '@/generated/graphql';

const route = useRoute()
const router = useRouter();

const restaurantSlug = router.currentRoute.value.params.name.toString();
const {result, loading, onResult} = useGetStoreBySlugQuery({slug: restaurantSlug });

const myStore = computed(() => result?.value?.getStoreBySlug ?? {openings: []});

const pageNotFound = computed(() => {
  if(!result.value?.getStoreBySlug) {
    return router.push('/404')
  }
})

const goToMenu = () => {
   router.push('/menu/' + restaurantSlug)
}

useHead({
  titleTemplate: () => myStore?.value?.city + ' - La Cabane à Burger'
})

const formattedOpennings = computed(() => {

  if (myStore.value?.openings) {
    const weekdays = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
    const finalWeek: { day: string; time: string; }[] = []
    const finalDay: { day: string; time: string; }[] = []
    let time1 = ""
    const memory: string[] = []
    let valid = false

    function sortFunc(a: { day: string; }, b: { day: string; }) {
      return weekdays.indexOf(a.day.toLowerCase()) - weekdays.indexOf(b.day.toLowerCase());
    }

    const weekOpenings = myStore.value.openings.map(function (opening) {
      return opening?.start === opening?.end ? opening?.weekday + ':' + opening?.start : opening?.weekday + ':' + opening?.start + '/' + opening?.end
    });
    weekdays.forEach(weekday => {
      weekOpenings.forEach(weekOpening => {
        const formatWeek = weekOpening.split(':')
        const objectWeek = {day: formatWeek[0], time: formatWeek[1]}
        if (formatWeek[0].toLowerCase() === weekday) {
          finalWeek.push(objectWeek)
        }
      });
    });
    weekdays.forEach(weekday => {
      finalWeek.forEach(day => {
        if (weekday === day.day.toLowerCase()) {
          if (!memory.includes(weekday)) {
            time1 = day.time
            valid = true
          } else {
            valid = false
          }

          if (time1 !== null && valid === true) {
            memory.push(weekday)
            finalDay.push(day)
          } else {
            finalDay.splice(-1, 1);
            Object.keys(day).forEach((key) => {
              if (key === "time") {
                const arrTime1 = time1.length === 10 || time1.length === 9 ? "0" + time1 : time1
                const arrTime2 = day[key].length === 10 || day[key].length === 9 ? "0" + day[key] : day[key]
                const arr = [arrTime1, arrTime2]
                arr.sort();
                const hour = arr[0] === arrTime1 ? time1 + ', ' + day[key] : day[key] + ', ' + time1
                day[key] = hour;
              }
            });
            finalDay.push(day)
          }
        }
      });
    });
    if (finalDay.length !== 7) {
      weekdays.forEach((weekday) => {
        let end = false
        finalDay.forEach((day, idx) => {
          if (weekday === day.day.toLowerCase()) {
            end = true
          }
          if (idx === finalDay.length - 1 && !end) {
            finalDay.push({day: weekday.charAt(0).toUpperCase() + weekday.substring(1).toLowerCase(), time: "Fermé"})
          }
        });
      });
    }
    finalDay.sort(sortFunc);
    return finalDay
  } else {
    return {}
  }
});

function map(lat, long) {
  window.open('https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=' + lat + ',' + long, '_blank').focus();
}
</script>
