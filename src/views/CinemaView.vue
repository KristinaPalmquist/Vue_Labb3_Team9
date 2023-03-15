<script setup>
import TheaterCard from "../components/TheaterCard.vue";
</script>

<template>
    <h2>Biografer</h2>
    <p>Klicka på bilden för att läsa med om biografen</p>
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

<style scoped>
h2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
}

h2:before,
h2:after {
content: "";
flex: 1 1;
border-bottom: 1px solid #f5c65067;
margin: 25px;
}
</style>
