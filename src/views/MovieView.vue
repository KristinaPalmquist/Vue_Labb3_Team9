<script setup>
import MoviePresentation from "../components/MoviePresentation.vue";
import TestCard2 from "../components/TestCard2.vue";
</script>

<template>
  <div class="movie">
    <MoviePresentation />
    <TestCard2 />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (min-width: 1024px) {
  .movie {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
