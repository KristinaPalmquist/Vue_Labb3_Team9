<script setup>
import MoviesList from "../components/MoviesList.vue";
</script>

<template>
  <!-- remove after testing -->
  <div class="button-container">
    <p>Button 1</p>
    <input type="button" class="button btn1" value="Button 1" />
    <p>Button 2</p>
    <input type="button" class="button btn2" value="Button 2" />
    <p>Button 3</p>
    <input type="button" class="button btn3" value="Button 3" />
    <p>Button 4</p>
    <input type="button" class="button btn4" value="Button 4" />
    <p>Button 5</p>
    <input type="button" class="button btn5" value="Button 5" />
    <p>Button 6</p>
    <input type="button" class="button btn6" value="Button 6" />
  </div>
  <!-- end of button-test -->
  <MoviesList />
</template>

<style scoped></style>
