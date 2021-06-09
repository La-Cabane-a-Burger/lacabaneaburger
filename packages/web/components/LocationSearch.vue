<template>
  <div class="flex p-2 my-4 border border-gray-500 rounded-md bg-gray-50">
    <Search />
    <input
      ref="autocomplete"
      class="w-full h-auto ml-2 text-lg bg-gray-50"
      type="text"
      name="address"
      id="address"
      placeholder="Saisir une adresse"
    />
    <Geolocate
      class="cursor-pointer hover:text-blue-600"
      v-on:click="onGeolocate"
    />
  </div>
</template>

<script>
import Search from "../assets/icons/search.svg?inline";
import Geolocate from "../assets/icons/geolocate.svg?inline";

export default {
  name: "LocationSearch",
  components: {
    Search,
    Geolocate,
  },
  mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.$refs.autocomplete,
      { componentRestrictions: { country: "fr" } }
    );
    this.geocoder = new google.maps.Geocoder();
    google.maps.event.addListener(this.autocomplete, "place_changed", () => {
      this.geocoder.geocode(
        { address: this.$refs.autocomplete.value },
        (results, status) => {
          if (status == "OK") {
            let { location } = results[0].geometry;
            this.$emit("geolocate", {
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
  },
  methods: {
    onGeolocate() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude: lat, longitude: lng } = position.coords;
          this.$emit("geolocate", { lat, lng });
        });
      } else {
        alert("geolocation is not supported by your browser");
      }
    },
  },
};
</script>

<style>
</style>