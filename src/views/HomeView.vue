<script setup>
import MoviesList from "../components/MoviesList.vue";
import testComp from "../components/testComp.vue";
</script>

<template>
  <testComp @emit="receiveDate" :value="date" />
  <!-- remove after testing -->
  <div class="button-container">
    <input type="button" class="btn1" value="Button 1" />
    <input type="button" class="btn2" value="Button 2" />
    <input type="button" class="btn3" value="Button 3" />
    <input type="button" class="btn4" value="Button 4" />
    <input type="button" class="btn5" value="Button 5" />
    <input type="button" class="btn6" value="Button 6" />
  </div>
  <!-- end of button-test -->
  <MoviesList />
</template>

<style scoped></style>
