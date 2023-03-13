<script setup>
import HomeCategory from "../components/HomeCategory.vue";
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
  <HomeCategory />
  <FeedbackNavigator />
</template>
<script>


</script>
<style scoped></style>
