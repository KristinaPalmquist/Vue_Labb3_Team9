<script setup>
import axios from "axios";
</script>

<script>
export default {
  computed: {
    movieName() {
      return this.$route.params.date;
    },
  },
  data() {
    return {
      movies: [],
      movie: {},
    };
  } /*
  created() {
    axios.get("/movies.json").then((response) => {
      this.movies = response.data;
      this.movies = this.movies.filter((movie) => {
        return movie.titleId === this.movieName;
      });
      if (this.movies.length > 0) {
        this.movie = this.movies[0];
      }
    });
  },*/,
};
</script>

<template>
  <div class="test">
    <h1>HEJHEJHEJ</h1>
  </div>
</template>

<style scoped>
.test {
  height: 50vh;
}
</style>
