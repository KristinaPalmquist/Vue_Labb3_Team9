<script setup>
import MoviesList from "../components/MoviesList.vue";
import screeningsToday from "../components/screeningsToday.vue";
</script>

<template>
  <screeningsToday />
  <!-- remove after testing -->
  <div class="button-container">
    <input type="button" class="btn-light" value="Button 5" />
    <input type="button" class="btn-dark" value="Button 6" />
  </div>
  <!-- end of button-test -->
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
