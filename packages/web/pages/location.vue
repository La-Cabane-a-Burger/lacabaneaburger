<template>
  <!-- <Map /> -->
  <div>
    <Navbar />
    <div
      class="flex items-center justify-center w-full h-screen"
      :style="{
        backgroundImage: `url(${require('~/assets/backgrounds/background-transparent.png')})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }"
    >
      <div
        class="flex flex-row w-8/12 mt-48 bg-white shadow-lg h-4/6 rounded-xl"
      >
        <div class="flex-1 p-10">
          <h3 class="text-lg font-semibold font-text">
            Selectionnez une Cabane à Burger
          </h3>
          <LocationSearch @geolocate="onGeolocate" />
          <div class="w-full overflow-scroll h-4/6">
            <LocationCard
              v-for="(location, index) in sortedLocations"
              :key="index"
              :location="location"
              @click.native="selected = index"
            />
          </div>
        </div>
        <div class="flex-1">
          <Map
            :selected="selected"
            :position="position"
            :locations="sortedLocations"
            @close="selected = null"
            class="rounded-r-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const apiKey = "AIzaSyDCCdDLPdY7DCtU5aaVEqr6JgDtCNq7B1o";

import { point } from "@turf/helpers";
import distance from "@turf/distance";
import Map from "../components/Map.vue";
import Navbar from "../components/Navbar.vue";
import LocationCard from "../components/LocationCard.vue";
import LocationSearch from "../components/LocationSearch.vue";

export default {
  components: {
    Map,
    Navbar,
    LocationCard,
    LocationSearch,
  },
  head() {
    return {
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`,
        },
      ],
    };
  },
  computed: {
    sortedLocations() {
      if (this.position.lat !== 0 || this.position.lng !== 0) {
        return this.locations
          .map(({ coords, ...rest }) => {
            let location = point([coords.lng, coords.lat]);
            let user = point([this.position.lng, this.position.lat]);
            return { distance: distance(location, user), coords, ...rest };
          })
          .sort((a, b) => a.distance - b.distance);
      } else {
        return this.locations;
      }
    },
  },
  data() {
    return {
      selected: null,
      position: { lat: 0, lng: 0 },
      locations: [
        {
          city: "Rennes",
          address: "3 Allée du Guadel",
          coords: { lat: 48.56325, lng: 2.59923 },
          phone: "02 51 75 39 32",
          openings: [
            { day: "monday", windows: ["11h30/13h45", "17h00/20h00"] },
            { day: "tuesday", windows: ["11h30/13h45", "17h00/20h00"] },
            { day: "wednesday", windows: ["11h30/13h45", "17h00/20h00"] },
            { day: "thursday", windows: ["11h30/13h45", "17h00/20h00"] },
            { day: "friday", windows: ["11h30/13h45", "17h00/20h00"] },
            { day: "saturday", windows: ["11h30/13h45", "17h00/20h00"] },
            { day: "sunday", windows: ["17h00/20h00"] },
          ],
        },
        {
          city: "Pontchâteaux",
          address: "2A rue Gutenberg ZI du Landas",
          coords: { lat: 47.43081, lng: -2.07996 },
          phone: "02 51 75 39 32",
          openings: [
            { day: "monday", windows: ["11h30/13h45", "17h00/20h00"] },
            { day: "tuesday", windows: ["11h30/13h45", "17h00/20h00"] },
            { day: "wednesday", windows: ["11h30/13h45", "17h00/20h00"] },
            { day: "thursday", windows: ["11h30/13h45", "17h00/20h00"] },
            { day: "friday", windows: ["11h30/13h45", "17h00/20h00"] },
            { day: "saturday", windows: ["11h30/13h45", "17h00/20h00"] },
            { day: "sunday", windows: ["17h00/20h00"] },
          ],
        },
      ],
    };
  },
  methods: {
    onGeolocate(position) {
      this.position = position;
    },
  },
};
</script>

<style>
</style>