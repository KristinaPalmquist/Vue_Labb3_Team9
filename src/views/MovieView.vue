<script setup>
import axios from "axios";
import TestCard2 from "../components/TestCard2.vue";
// import useRouter from "vue-router";
</script>

<template>
  <div class="movie">
    <h2>{{ $route.params.id }}</h2>
    <div v-for="movie in movies" :key="movie.id">
      <input
        type="button"
        @click="onClick(movie.id)"
        :value="`${movie.titleSweden}`"
      />
      <!-- <router-link to="/film/`${movie.id}`">{{
        movie.titleSweden
      }}</router-link>
      <RouterView /> -->
    </div>
  </div>
  <TestCard2 />
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      id: Number,
    };
  },
  created() {
    this.fetchMovies();
  },
  methods: {
    fetchMovies() {
      axios.get("movies.json").then((movies) => (this.movies = movies.data));
    },
    onClick(id) {
      this.$router.push("/film/" + id);
    },
  },
};
</script>

<style scoped></style>
