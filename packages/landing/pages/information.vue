<template>
  <div>
    <div
        class="flex items-center justify-center w-full h-screen"
    >
      <div
          class="flex flex-row w-10/12 mt-48 bg-white shadow-lg h-4/6 rounded-xl"
      >
        <div class="relative flex-1 p-10">
          <h3 class="text-lg font-semibold font-text">
            Selectionnez une Cabane à Burger
          </h3>
<!--          <GeoSearch @geolocate="onGeolocate" @stop="onStop"/>-->
          <div class="relative z-0 w-full overflow-scroll h-full">
            <LocationCard
                v-for="(location, index) in sortedLocations"
                :key="index"
                :location="location"
                :isSelected="selected === location.id"
                @click="selected = location.id"
            />
          </div>
        </div>
        <div class="flex-1">
          <Map
              :selected="selected"
              :position="position"
              :locations="sortedLocations"
              @selected="selected = $event.id"
              class="rounded-r-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

import {point} from "@turf/helpers";
import distance from "@turf/distance";
import Map from "@/components/Map.vue";
import LocationCard from "@/components/LocationCard.vue";
import GeoSearch from "@/components/GeoSearch.vue";
import {Store, useGetStoresQuery} from "@/generated/graphql";

useHead({
  title: 'Informations - La Cabane à Burger',
})

const selected = ref("");
let position = ref({lat: 0, lng: 0});

const {result, loading} = useGetStoresQuery();

const locations = computed(() => result?.value?.getStores ?? []);

const sortedLocations = computed(() => {
  if (position.value.lat !== 0 || position.value.lng !== 0) {
    let sortedLocations = locations.value
        .map(({latitude, longitude, ...rest}) => {
          let location = point([longitude, latitude]);
          let user = point([position.value.lng, position.value.lat]);
          return {
            distance: distance(location, user),
            latitude,
            longitude,
            ...rest,
          };
        })
        .sort((a, b) => a.distance - b.distance);
    selected.value = sortedLocations[0].id;
    return sortedLocations;
  } else {
    return locations.value;
  }
});

const onGeolocate = (p: { lat: number; lng: number }) => {
  position.value = p;
};

const onStop = () => {
  position.value = {lat: 0, lng: 0};
  selected.value = "";
};

</script>
