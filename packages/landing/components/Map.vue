<template>
  <div class="w-full h-full" id="map" ref="container"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, watch, ref } from "vue";
import { Store } from "~~/generated/graphql";

export default defineComponent({
  props: {
    locations: Array as PropType<Store[]>,
    position: Object,
    selected: String,
  },
  setup(props, { emit }) {
    const { $L } = useNuxtApp();
    const config = useRuntimeConfig();
    let map: L.Map;
    let markers: Array<L.Marker> = [];
    const container = ref(null);
    let user;

    const initializeMap = (
      center: L.LatLngExpression,
      zoom: number,
      locations: Store[]
    ) => {
      map = $L.map(container.value).setView(center, zoom);

      $L.tileLayer(
        `https://api.mapbox.com/styles/v1/marceaudavid/cl0jk6z9i004v14qbzpkz0knc/tiles/256/{z}/{x}/{y}@2x?access_token=${config.mapboxToken}`,
        {
          attribution:
            'Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          detectRetina: true,
        }
      ).addTo(map);

      map.on("click", (e) => {
        emit("selected", { id: null });
      });

      let icon = $L.icon({
        iconUrl: "../assets/img/cab-logo-variant.png",
        iconSize: [40, 40],
        tooltipAnchor: [0, -20],
      });

      markers = locations.map((location: any) => {
        let { latitude, longitude, city } = location;
        let store = $L
          .marker([latitude, longitude], { icon, title: city })
          .addTo(map)
          .on("click", () => {
            emit("selected", location);
          });
        return store;
      });
    };

    const createTooltips = (stores: Array<L.Marker>) => {
      stores.map((store: L.Marker) => {
        return store.bindPopup(store.options.title || "", {
          offset: [0, -10],
          className: "text-base",
        });
      });
    };

    onMounted(() => {
      initializeMap([46.62, 2], 5.3, props.locations);
      createTooltips(markers);
    });

    watch(
      () => props.position,
      (position) => {
        if (position.lat != 0 || position.lng != 0) {
          if (user !== undefined) {
            map.removeLayer(user);
          }
          user = $L.marker([position.lat, position.lng]).addTo(map);
          map.flyTo([position.lat, position.lng], 8);
        } else {
          map.removeLayer(user);
        }
      }
    );

    watch(
      () => props.selected,
      (selected) => {
        if (selected !== null && selected !== undefined && selected !== "") {
          let location: Store = props.locations.filter(
            (location) => location.id === selected
          )[0];
          map.flyTo([location.latitude, location.longitude], 8);
          markers
            .filter((marker) => marker.options.title === location.city)[0]
            .openPopup();
        } else {
          map.closePopup();
          map.flyTo([46.62, 2], 5.3);
        }
      }
    );

    return { container };
  },
});
</script>
