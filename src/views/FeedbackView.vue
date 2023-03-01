<script setup>
import DateMonth from "../components/DateMonth.vue";
</script>

<template>
  <div class="feedback">
    <h1>Feedback</h1>
    <DateMonth />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .feedback {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
