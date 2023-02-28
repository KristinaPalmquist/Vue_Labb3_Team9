<script setup>
import axios from "axios";
import TestCard2 from "../components/TestCard2.vue";
</script>

<template>
  <div class="movie">
    <h2>{{ $route.params.id }}</h2>
    <div v-for="movie in movies" :key="movie.id">
      <router-link to="/film/`${movie.id}`">{{ movie.titleSweden }}</router-link>
      <RouterView />
    </div>

  </div>
  <TestCard2 />
</template>

<script>
export default {
  data() {
    return {
      movies: [],
    };
  },
  created() {
    this.fetchMovies();
  },
  methods: {
    fetchMovies() {
      axios
        .get("../../public/movies.json")
        .then((movies) => (this.movies = movies.data));
    },
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .movie {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
