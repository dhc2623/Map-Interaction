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
        @click="$router.push('/mapInteraction')"
      >
        Map Interaction
      </a-button>
    </div>
    <client-only>
      <a-page-header title="Polygon Data Layer Map"></a-page-header>
    </client-only>
    <div id="map"></div>
    <InfoControl :infoProps="info" />
    <LegendControl />
  </div>
</template>

<script>
import statesData from "../utils/statesData";

export default {
  data() {
    return {
      map: null,
      info: null,
      geojson: statesData,
      mapVisible: false,
    };
  },
  mounted() {
    this.initMap();
    this.initControls();
  },
  methods: {
    initMap() {
      this.mapVisible = true;
      if (!this.map) {
        this.map = L.map("map").setView([15.3173, 75.7139], 7);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(this.map);
        L.geoJson(this.geojson, {
          style: this.style,
          onEachFeature: this.onEachFeature,
        }).addTo(this.map);
      }
    },

    initControls() {
      // Use the existing map instance created in initMap
      const map = this.map;

      // Initialize the info control and assign it to this.info
      this.info = L.control();

      this.info.onAdd = function (map) {
        this._div = L.DomUtil.create("div", "info");
        this.update();
        return this._div;
      };

      this.info.update = function (props) {
        this._div.innerHTML = "";
      };

      this.info.addTo(map);

      // Initialize the legend control and assign it to this.legend
      this.legend = L.control({ position: "bottomright" });

      this.legend.onAdd = (map) => {
        this._div = L.DomUtil.create("div", "info legend");
        const grades = [0, 10, 20, 50, 100, 200, 500, 1000];
        for (let i = 0; i < grades.length; i++) {
          this._div.innerHTML +=
            '<i style="background:' +
            this.getColor(grades[i] + 1) +
            '"></i> ' +
            grades[i] +
            (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
        }
        return this._div;
      };

      this.legend.addTo(map);
    },

    // Adding some color
    getColor(d) {
      return d > 1000
        ? "#800026"
        : d > 500
        ? "#BD0026"
        : d > 200
        ? "#E31A1C"
        : d > 100
        ? "#FC4E2A"
        : d > 50
        ? "#FD8D3C"
        : d > 20
        ? "#FEB24C"
        : d > 10
        ? "#FED976"
        : "#FFEDA0";
    },

    // style function for geojson layer
    style(feature) {
      return {
        fillColor: this.getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7,
      };
    },

    // highlight the states visually while hovered with the mouse
    highlightFeature(e) {
      const layer = e.target;
      layer.setStyle({
        weight: 2,
        color: "#666",
        dashArray: "",
        fillOpacity: 0.7,
      });
      layer
        .bindPopup(this.getPopupContent(layer.feature.properties))
        .openPopup();
    },

    resetHighlight(e) {
      if (this.info) {
        e.target.closePopup();
      }
      e.target.setStyle({
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7,
      });
    },

    // zoom the states
    zoomToFeature(e) {
      this.map.fitBounds(e.target.getBounds());
    },

    // add the features on state layer
    onEachFeature(feature, layer) {
      layer.on({
        mouseover: this.highlightFeature,
        mouseout: this.resetHighlight,
        click: this.zoomToFeature,
      });
    },

    getPopupContent(properties) {
      return `
      <h4>Karnataka Population Density</h4>
    <h3><b>${properties.name}</b></h3>
    ${
      properties.density
        ? `<b>${properties.density} people / mi<sup>2</sup></b>`
        : "Data not available"
    }
  `;
    },
  },
};
</script>

<style scoped>
#map {
  height: 100vh;
}
</style>
