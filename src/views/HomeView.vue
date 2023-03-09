<script setup>
import MoviesList from "../components/MoviesList.vue";
</script>

<template>
  <MoviesList />
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
