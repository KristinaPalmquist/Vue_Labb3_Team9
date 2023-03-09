<script setup>
import TheaterCard from "../components/TheaterCard.vue";
</script>

<template>
  <TheaterCard />
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
