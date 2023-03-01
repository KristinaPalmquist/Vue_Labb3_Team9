<script setup>
import DateMonth from "../components/DateMonth.vue";
</script>

<template>
  <div class="">
    <FeedbackPage />
    <div class="feedback">
      <h1>Feedback</h1>
      <DateMonth />
    </div>
  </div>
</template>
<script>
import FeedbackPage from "../components/FeedbackPage.vue";
export default {
  components: { FeedbackPage },
};
</script>

<style scoped>
body {
  width: auto;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>
<style scoped></style>
