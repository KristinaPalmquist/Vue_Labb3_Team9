<script setup>
import axios from "axios";
import { ref } from "vue";
</script>

<template>
  <div class="test">
    <h1>{{ myprops }}</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.test {
  height: 50vh;
}
</style>
