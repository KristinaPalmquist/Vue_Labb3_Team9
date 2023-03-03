<script setup>
import searchBar from "../components/searchBar.vue";
import MoviesList from "../components/MoviesList.vue";
</script>

<template>
  <searchBar />
  <ChartComp />
  <ChartApp />
  <ChartModal />
  <div class="home">
    <h1>HOME</h1>
  </div>
  <MoviesList />
</template>
<script>
import ChartComp from "../components/ChartComp.vue";
import ChartApp from "../components/ChartApp.vue";
import ChartModal from "../components/ChartModal.vue";
export default {
  components: { ChartModal, ChartComp, ChartApp },
};
</script>

<style scoped></style>
