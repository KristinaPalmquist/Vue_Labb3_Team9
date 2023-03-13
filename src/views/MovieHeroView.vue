<script setup>
import MovieHero from "../components/MovieHero.vue";
</script>

<template>
  <MovieHero />
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
