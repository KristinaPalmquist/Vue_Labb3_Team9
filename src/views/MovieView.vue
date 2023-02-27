<script setup>
import TestCard2 from "../components/TestCard2.vue";
</script>

<template>
  <div class="movie">
    <TestCard2 />
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
