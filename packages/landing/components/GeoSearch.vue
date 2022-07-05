<template>
  <div class="flex p-1 my-4 border border-gray-500 rounded-md bg-gray-50">
    <SearchIcon class="w-10 h-10 text-slate-600" />
    <input
      v-model="address"
      class="w-full h-auto ml-2 text-lg bg-gray-50 focus:outline-none"
      type="text"
      name="address"
      id="address"
      placeholder="Saisir une adresse"
      @keyup="onSubmit"
    />
    <LocationMarkerIcon
      class="w-10 h-10 cursor-pointer hover:text-blue-600 text-slate-600"
      :class="geolocationStatus ? 'text-blue-600' : 'text-slate-600'"
      v-on:click="onGeolocate"
    />
  </div>
  <ul
    class="absolute z-10 bg-white border border-b border-gray-500 rounded left-10 right-10"
    :class="results.length === 0 ? 'hidden' : ''"
  >
    <li
      class="border-b border-gray-500 cursor-pointer hover:bg-blue-500 hover:text-white last:border-b-0"
      v-for="result in results"
      :key="result.id"
      v-on:click="onChooseAddress(result)"
    >
      {{ result.place_name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { SearchIcon } from "@heroicons/vue/solid";
import { LocationMarkerIcon } from "@heroicons/vue/solid";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    SearchIcon,
    LocationMarkerIcon,
  },
  emits: ["geolocate", "stop"],
  setup({}, { emit }) {
    const config = useRuntimeConfig();
    let geolocationStatus = ref(false);
    let watchID = 0;
    let results = ref([]);
    let address = ref("");

    const onSubmit = async (e: Event) => {
      e.preventDefault();
      if (address.value.length >= 3) {
        const { data } = await useFetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${address.value}.json?access_token=${config.public.mapboxToken}`,
          { parseResponse: JSON.parse }
        );
        results.value = data.value.features;
      } else {
        emit("stop");
        results.value = [];
      }
    };

    const onChooseAddress = (e: any) => {
      const { geometry } = e as any;
      const { coordinates } = geometry;
      emit("geolocate", {
        lat: coordinates[1],
        lng: coordinates[0],
      });
      results.value = [];
      address.value = "";
    };

    const onGeolocate = () => {
      console.log(geolocationStatus.value);
      if (!geolocationStatus.value) {
        geolocationStatus.value = true;
        if ("geolocation" in navigator) {
          watchID = navigator.geolocation.watchPosition((position) => {
            const { latitude: lat, longitude: lng } = position.coords;
            emit("geolocate", { lat, lng });
          });
        } else {
          alert("geolocation is not supported by your browser");
        }
      } else {
        navigator.geolocation.clearWatch(watchID);
        geolocationStatus.value = false;
        emit("stop");
      }
      console.log(geolocationStatus.value);
    };
    return {
      onGeolocate,
      onSubmit,
      onChooseAddress,
      address,
      results,
      geolocationStatus,
    };
  },
});
</script>
