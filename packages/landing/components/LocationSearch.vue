<template>
  <div class="flex p-2 my-4 border border-gray-500 rounded-md bg-gray-50">
    <SearchIcon class="w-10 h-10 text-slate-600" />
    <input
      ref="input"
      class="w-full h-auto ml-2 text-lg bg-gray-50"
      type="text"
      name="address"
      id="address"
      placeholder="Saisir une adresse"
    />
    <LocationMarkerIcon
      class="w-10 h-10 cursor-pointer hover:text-blue-600 text-slate-600"
      v-on:click="onGeolocate"
    />
  </div>
</template>

<script lang="ts">
import { SearchIcon } from "@heroicons/vue/solid";
import { LocationMarkerIcon } from "@heroicons/vue/solid";

import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  components: {
    SearchIcon,
    LocationMarkerIcon,
  },
  props: {
    google: Object,
  },
  setup({ google }, { emit }) {
    const input = ref();
    let autocomplete: google.maps.places.Autocomplete;
    let geocoder: google.maps.Geocoder;

    const initializeAutoComplete = (google) => {
      autocomplete = new google.maps.places.Autocomplete(input.value, {
        componentRestrictions: { country: "fr" },
      });

      geocoder = new google.maps.Geocoder();
      google.maps.event.addListener(autocomplete, "place_changed", () => {
        geocoder.geocode(
          { address: input.value.textContent },
          (results, status) => {
            if (status == "OK") {
              let { location } = results[0].geometry;
              emit("geolocate", {
                lat: location.lat(),
                lng: location.lng(),
              });
            } else {
              alert(
                "Geocode was not successful for the following reason: " + status
              );
            }
          }
        );
      });
    };

    const onGeolocate = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude: lat, longitude: lng } = position.coords;
          emit("geolocate", { lat, lng });
        });
      } else {
        alert("geolocation is not supported by your browser");
      }
    };

    return { onGeolocate };
  },
});
</script>
