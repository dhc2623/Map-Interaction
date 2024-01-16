export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "maps-assessment",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "//unpkg.com/leaflet/dist/leaflet.css" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["ant-design-vue/dist/antd.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: ["@/plugins/antd-ui"],{ src: '~/plugins/vue2-google-maps', ssr: false }
  plugins: [
    { src: "@/plugins/antd-ui", ssr: false },
    { src: "@/plugins/vue2leaflet", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: ["vue2-google-maps"],
  /* googleMaps: {
    key: "AIzaSyB4S2jfdeKKadWOTmY6m2UT8Cy5rleLxo4", // Replace with your actual API key
  }, */
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
