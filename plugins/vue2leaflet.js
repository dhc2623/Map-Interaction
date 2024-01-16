/* import Vue from 'vue';
// import Vue2Leaflet from 'vue2-leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

// Vue.component('v-map', Vue2Leaflet.LMap);
// Vue.component('v-tilelayer', Vue2Leaflet.LTileLayer);
// Vue.component('v-marker', Vue2Leaflet.LMarker);

Vue.component('l-map', LMap);
Vue.component('l-tilelayer', LTileLayer);
Vue.component('l-marker', LMarker); */

import Vue from 'vue';
import { LMap, LTileLayer, LMarker, LGeoJson } from 'vue2-leaflet';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-geo-json', LGeoJson);