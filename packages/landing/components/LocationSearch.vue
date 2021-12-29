<template>
  <div class="flex p-2 my-4 border border-gray-500 rounded-md bg-gray-50">
    <SearchIcon/>
    <input
        ref="autocomplete"
        class="w-full h-auto ml-2 text-lg bg-gray-50"
        type="text"
        name="address"
        id="address"
        placeholder="Saisir une adresse"
    />
    <GeolocateIcon
        class="cursor-pointer hover:text-blue-600"
        v-on:click="onGeolocate"
    />
  </div>
</template>

<script lang="ts">
import SearchIcon from "@/assets/icons/SearchIcon";
import GeolocateIcon from "@/assets/icons/GeolocateIcon";
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
  components: {
    SearchIcon,
    GeolocateIcon
  },
  setup(_props, {emit}) {
    const autocomplete = ref(null);
    let geocoder = null;

    onMounted(() => {
      autocomplete.value = new google.maps.places.Autocomplete(
          autocomplete.value,
          {componentRestrictions: {country: "fr"}}
      );
      geocoder = new google.maps.Geocoder();
      google.maps.event.addListener(autocomplete.value, "place_changed", () => {
        geocoder.geocode(
            {address: autocomplete.value},
            (results, status) => {
              if (status == "OK") {
                let {location} = results[0].geometry;
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
    })

    const onGeolocate = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const {latitude: lat, longitude: lng} = position.coords;
          emit("geolocate", {lat, lng});
        });
      } else {
        alert("geolocation is not supported by your browser");
      }
    }

    return {onGeolocate}

  }
})

</script>
