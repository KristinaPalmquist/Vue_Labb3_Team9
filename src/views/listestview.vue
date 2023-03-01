<script setup>
import listest from "../components/listestcomponent.vue";
</script>

<template>
  <div class="feedback">
    <listest :film="film" />
  </div>
</template>

<script></script>

<style scoped>
@media (min-width: 1024px) {
  .feedback {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
