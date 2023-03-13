<script setup>
// import axios from "axios";
import CinemaHero from "../components/CinemaHero.vue";
</script>

<template>
  <body>
    <div class="cinemaHero">
      <CinemaHero />
    </div>
  </body>
  <FeedbackNavigator />
</template>

<script>
import FeedbackNavigator from "../components/FeedbackNavigator.vue";
export default {
  component: {
    FeedbackNavigator,
  },
};
</script>

<style scoped>
.cinemaHero {
  display: flex;
}
</style>
