<script setup>
import axios from "axios";
</script>

<template>
  <!-- <h2>{{ $route.params.id }}</h2>
  <div v-for="movie in movies" :key="movie.id">
    <router-link to="/film/`${movie.id}`">{{ movie.titleSweden }}</router-link>
    <RouterView />
  </div> -->
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
.poster {
  height: 600px;
  max-height: 50vh;
  max-width: 50vw;
}
</style>
