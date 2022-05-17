<template>
  <div>
    <div
      class="flex items-center justify-center w-full h-screen"
      :style="{
        backgroundImage: `url('~/assets/backgrounds/background-transparent.png'})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }"
    >
      <div
        class="flex flex-row w-10/12 mt-48 bg-white shadow-lg h-4/6 rounded-xl"
      >
        <div class="relative flex-1 p-10">
          <h3 class="text-lg font-semibold font-text">
            Selectionnez une Cabane à Burger
          </h3>
          <GeoSearch @geolocate="onGeolocate" @stop="onStop" />
          <div class="relative z-0 w-full overflow-scroll h-4/6">
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

<script lang="ts">
import { computed, defineComponent, onMounted, ref, reactive } from "vue";

import { point } from "@turf/helpers";
import distance from "@turf/distance";
import Map from "../components/Map.vue";
import LocationCard from "../components/LocationCard.vue";
import GeoSearch from "../components/GeoSearch.vue";
import { Store } from "~~/generated/graphql";

export default defineComponent({
  components: {
    Map,
    LocationCard,
    GeoSearch,
  },
  setup() {
    const selected = ref("");
    let position = ref({ lat: 0, lng: 0 });

    onMounted(async () => {});

    const locations: Array<Store> = [
      {
        id: "38217e29-88fb-48d5-a86d-4427d2660be2",
        city: "Dijon",
        address: "36-38 Rue de la Liberté, 21000 Dijon",
        latitude: 47.32233,
        longitude: 5.03715,
        phone: "02 45 17 23 34",
        openings: [
          { id: "1", weekday: "monday", start: "11h30", end: "13h45" },
          { id: "2", weekday: "monday", start: "17h00", end: "20h00" },
          { id: "3", weekday: "tuesday", start: "11h30", end: "13h45" },
          { id: "4", weekday: "tuesday", start: "17h00", end: "20h00" },
          { id: "5", weekday: "wednesday", start: "11h30", end: "13h45" },
          { id: "5", weekday: "wednesday", start: "17h00", end: "20h00" },
          { id: "6", weekday: "thursday", start: "11h30", end: "13h45" },
          { id: "7", weekday: "thursday", start: "17h00", end: "20h00" },
          { id: "8", weekday: "friday", start: "11h30", end: "13h45" },
          { id: "9", weekday: "friday", start: "17h00", end: "20h00" },
          { id: "10", weekday: "saturday", start: "11h30", end: "13h45" },
          { id: "11", weekday: "saturday", start: "17h00", end: "20h00" },
          { id: "12", weekday: "sunday", start: "17h00", end: "20h00" },
        ],
      },
      {
        id: "38217e29-88fb-48d5-a86d-4427d2660be1",
        city: "Pontchâteaux",
        address: "2A rue Gutenberg ZI du Landas",
        latitude: 47.43081,
        longitude: -2.07996,
        phone: "02 51 75 39 32",
        openings: [
          { id: "1", weekday: "monday", start: "11h30", end: "13h45" },
          { id: "2", weekday: "monday", start: "17h00", end: "20h00" },
          { id: "3", weekday: "tuesday", start: "11h30", end: "13h45" },
          { id: "4", weekday: "tuesday", start: "17h00", end: "20h00" },
          { id: "5", weekday: "wednesday", start: "11h30", end: "13h45" },
          { id: "5", weekday: "wednesday", start: "17h00", end: "20h00" },
          { id: "6", weekday: "thursday", start: "11h30", end: "13h45" },
          { id: "7", weekday: "thursday", start: "17h00", end: "20h00" },
          { id: "8", weekday: "friday", start: "11h30", end: "13h45" },
          { id: "9", weekday: "friday", start: "17h00", end: "20h00" },
          { id: "10", weekday: "saturday", start: "11h30", end: "13h45" },
          { id: "11", weekday: "saturday", start: "17h00", end: "20h00" },
          { id: "12", weekday: "sunday", start: "17h00", end: "20h00" },
        ],
      },
    ];

    const sortedLocations = computed(() => {
      if (position.value.lat !== 0 || position.value.lng !== 0) {
        let sortedLocations = locations
          .map(({ latitude, longitude, ...rest }) => {
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
        return locations;
      }
    });

    const onGeolocate = (p: { lat: number; lng: number }) => {
      position.value = p;
    };

    const onStop = () => {
      position.value = { lat: 0, lng: 0 };
      selected.value = "";
    };

    return {
      sortedLocations,
      onGeolocate,
      onStop,
      selected,
      position,
    };
  },
});
</script>
