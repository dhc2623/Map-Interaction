<template>
  <div>
    <div v-if="mapVisible">
      <a-button
        type="primary"
        style="margin-bottom: 16px"
        @click="$router.push('/')"
      >
        Marker Points Map
      </a-button>
      <a-button
        type="primary"
        style="margin-bottom: 16px"
        @click="$router.push('/polygon')"
      >
        Polygon Data Layer Map
      </a-button>
    </div>
    <client-only>
      <a-page-header title="Map Interaction"></a-page-header>
    </client-only>
    <div id="map" style="height: 500px; cursor: pointer"></div>
    <div v-if="selectedFeature">
      <!-- Display feature data in UI cards -->
      <b>{{ selectedFeature }}</b>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFeature: null,
      mapVisible: false,
    };
  },
  mounted() {
    this.mapVisible = true;
    const map = L.map("map").setView([20.5937, 78.9629], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );

    // Add event listeners for map interaction
    map.on("click", this.handleMapClick);
  },
  methods: {
    handleMapClick(event) {
      this.selectedFeature = `Feature data for clicked location: ${event.latlng}`;
    },
  },
};
</script>
