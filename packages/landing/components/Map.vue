<template>
  <div class="w-full h-full" id="map" ref="map"></div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "vue";

export default defineComponent({
  props: {
    maps: Object,
    locations: Array,
    position: Object,
    selected: Number,
  },
  setup({ maps, locations, position, selected }, { emit }) {
    const mapContainer = ref();
    let map: google.maps.Map;
    const mapOptions: google.maps.MapOptions = {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 4,
    };
    let markers: Array<google.maps.Marker> = [];
    let infowindow: google.maps.InfoWindow;
    let user: google.maps.Marker;

    const initializeMap = ({ Map, Marker }, locations) => {
      map = new Map(mapContainer.value, mapOptions);

      markers = locations.map((location) => {
        let marker = new Marker({
          position: location.coords,
          map,
          title: location.city,
        });
        marker.setMap(map);
        return marker;
      });
      console.log(map);
    };

    const createPopup = (
      content: HTMLElement,
      marker: google.maps.Marker,
      { InfoWindow }: { InfoWindow: google.maps.InfoWindow }
    ) => {
      if (infowindow) infowindow.close();
      infowindow = new InfoWindow({
        content: `<p>${content}</p>`,
      });
      infowindow.open(map, marker);
      google.maps.event.addListener(infowindow, "closeclick", () => {
        emit("close");
      });
    };

    watch(
      () => position,
      (position) => {
        if (position.lat != 0 || position.lng != 0) {
          if (user) user.setMap(null);
          map.panTo(position);
          user = new maps.Marker({
            position,
            map,
            title: "user",
            icon: "../assets/images/user-position.png",
          });
          user.setMap(map);
        }
      }
    );

    watch(
      () => maps,
      (maps) => {
        if (maps != null && maps != undefined) {
          initializeMap(maps, locations);
        }
      }
    );

    watch(
      () => selected,
      (selected) => {
        if (selected !== null && selected !== undefined) {
          map.panTo(locations[selected].coords);
          createPopup(
            locations[selected].city,
            markers.find(
              (marker) => marker.getTitle() === locations[selected].city
            ),
            maps
          );
        }
      }
    );

    return { mapContainer };
  },
});
</script>
