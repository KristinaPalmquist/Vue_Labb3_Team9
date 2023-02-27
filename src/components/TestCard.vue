<script>
import axios from "axios";

export default {
  created() {
    this.apiCall();
  },
  methods: {
    apiCall() {
      axios
        .get("movies.json")
        .then((response) => (this.movies = response.data));
    },
  },
  data() {
    return {
      movies: [],
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="movie in movies" :key="movie.id">
        <div class="card mb-1" style="width: 12rem">
          <img
            :src="movie.img"
            class="card-img-top"
            :alt="movie.titleEnglish"
          />
          <div class="card-body">
            <h5 class="card-title">{{ movie.titleSweden }}</h5>
            <p class="card-text">Ranking IMDB: {{ movie.imdb }}</p>
            <a class="card-text" :href="movie.trailer" target="_blank">
              Trailer
            </a>
            <p class="card-text">Premiere: {{ movie.premiere }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
