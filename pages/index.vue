<template>
  <div>
    <div v-if="mapVisible">
      <a-button
        type="primary"
        style="margin-bottom: 16px"
        @click="$router.push('/polygon')"
      >
        Polygon Data Layer Map
      </a-button>
      <a-button
        type="primary"
        style="margin-bottom: 16px"
        @click="$router.push('/mapInteraction')"
      >
        Map Interaction
      </a-button>
    </div>
    <client-only>
      <a-page-header title="Marker Points Map"></a-page-header>
    </client-only>
    <div id="map" style="height: 500px"></div>
  </div>
</template>

<script>
import { markerPointsData } from "../utils/markerPointsData";
export default {
  name: "IndexPage",
  data() {
    return {
      pointData: markerPointsData,
      mapVisible: false,
      map: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.mapVisible = true;
      if (!this.map) {
        this.map = L.map("map").setView([15.3173, 75.7139], 7);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
          this.map
        );

        // Add markers for each point to the map
        this.pointData.forEach((point) => {
          const { id, lat, lng, title, description } = point;
          const marker = L.marker([lat, lng]).addTo(this.map);

          // Add click event to open a popup with featured data
          marker
            .bindPopup(`<b>${title}</b><br>${description}`)
            .on("click", () => {
              console.log(`Marker ${id} clicked`);
            });
        });
      }
    },
  },
};
</script>
