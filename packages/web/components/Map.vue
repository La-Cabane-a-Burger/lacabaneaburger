<template>
  <div style="h-full w-full" id="map" ref="map"></div>
</template>

<script>
export default {
  name: "Map",
  props: {
    locations: Array,
    position: Object,
    selected: Number,
  },
  data() {
    return {
      map: null,
      lat: 47.43081,
      lng: -2.07996,
      zoom: 7,
    };
  },
  async mounted() {
    this.map = new google.maps.Map(this.$refs.map, {
      center: { lat: this.lat, lng: this.lng },
      zoom: this.zoom,
    });
    this.markers = this.locations.map((location) => {
      let marker = new google.maps.Marker({
        position: location.coords,
        map,
        title: location.city,
      });
      marker.setMap(this.map);
      return marker;
    });
  },
  methods: {
    popup(content, marker) {
      if (this.infowindow) this.infowindow.close();
      this.infowindow = new google.maps.InfoWindow({
        content: `<p>${content}</p>`,
      });
      this.infowindow.open(this.map, marker);
      google.maps.event.addListener(this.infowindow, "closeclick", () => {
        this.$emit("close");
      });
    },
  },
  watch: {
    position: {
      deep: true,
      handler(position) {
        if (position.lat != 0 || position.lng != 0) {
          if (this.user) this.user.setMap(null);
          this.map.panTo(position);
          this.user = new google.maps.Marker({
            position,
            map,
            title: "user",
            icon: require("../assets/images/user-position.png"),
          });
          this.user.setMap(this.map);
        }
      },
    },
    selected: {
      handler(selected) {
        if (selected !== null) {
          this.map.panTo(this.locations[selected].coords);
          this.popup(
            this.locations[selected].city,
            this.markers.find(
              (marker) => marker.getTitle() === this.locations[selected].city
            )
          );
        }
      },
    },
  },
};
</script>

<style>
</style>