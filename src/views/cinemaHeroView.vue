<script setup>
// import axios from "axios";
import CinemaHero from "../components/CinemaHero.vue";
</script>

<template>
  <body>
    <CinemaHero />
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

<style scoped></style>
