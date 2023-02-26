<script setup>
import TestCard from "../components/TestCard.vue";
</script>

<template>
  <div class="movie">
    <h1>Movie</h1>
    <TestCard />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .movie {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
