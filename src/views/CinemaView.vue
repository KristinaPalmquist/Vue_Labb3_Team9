<script setup>
import TheaterCard from "../components/TheaterCard.vue";
</script>
<template>
  <div class="cinema">
    <h1>Cinema</h1>
    <TheaterCard />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .cinema {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
