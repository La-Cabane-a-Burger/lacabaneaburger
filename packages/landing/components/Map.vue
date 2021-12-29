<template>
  <div class="h-full w-full" id="map" ref="map"></div>
</template>

<script lang="ts">
import {defineComponent, onMounted, watch, ref} from "vue";

export default defineComponent({
  props: {
    locations: Array,
    position: Object,
    selected: Number,
  },
  setup(props, { emit }) {
    const map = ref(null);
    const lat = 47.43081;
    const lng = -2.07996;
    const zoom = 7;
    let markers = [];
    let infowindow = null;
    let user = null;

    onMounted(() => {
      map.value = new google.maps.Map(map.value, {
        center: {lat: lat, lng: lng},
        zoom: zoom,
      });
      markers = props.locations.map((location) => {
        let marker = new google.maps.Marker({
          position: location.coords,
          map,
          title: location.city,
        });
        marker.setMap(map.value);
        return marker;
      });
    })

    const popup = (content, marker) => {
      if (infowindow) infowindow.close();
      infowindow = new google.maps.InfoWindow({
        content: `<p>${content}</p>`,
      });
      infowindow.open(map.value, marker);
      google.maps.event.addListener(infowindow, "closeclick", () => {
        emit("close");
      });
    }

    watch(
        () => props.position,
        (position) => {
          if (position.lat != 0 || position.lng != 0) {
            if (user) user.setMap(null);
            map.value.panTo(position);
            user = new google.maps.Marker({
              position,
              map,
              title: "user",
              icon: "../assets/images/user-position.png",
            });
            user.setMap(map.value);
          }
        }
    )

    watch(
        () => props.selected,
        (selected) => {
          if (selected !== null) {
            map.value.panTo(props.locations[selected].coords);
            popup(
                props.locations[selected].city,
                markers.find(
                    (marker) => marker.getTitle() === props.locations[selected].city
                )
            );
          }
        }
    )

    return {map}

  }
});
</script>
