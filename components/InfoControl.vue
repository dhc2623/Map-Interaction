<!-- components/InfoControl.vue -->
<template>
  <div class="info" v-if="infoProps">
    <h4>US Population Density</h4>
    <b>{{ infoProps.name }}</b><br />{{ infoProps.density }} people / mi<sup>2</sup>
  </div>
  <div class="info" v-else>
    Hover over a state
  </div>
</template>

<script>
export default {
  props: {
    infoProps: Object,
  },
};
</script>

<style scoped>
/* Add your InfoControl styles here */
</style>
