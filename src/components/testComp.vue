<script setup>
import axios from "axios";
import { ref } from "vue";
import moment from "moment/min/moment-with-locales";
</script>

<template>
  <div class="test" v-if="this.dateProps == undefined">
    <h1>
      {{ moment().format("LL") }}
    </h1>
    <h1>
      {{ moment().dayOfYear() }}
    </h1>
    <h1>
      {{ this.todaysScreenings }}
    </h1>
  </div>
  <div class="test" v-if="this.dateProps != undefined">
    <h1>
      {{ moment(dateProps).format("LL") }}
    </h1>
    <h1>
      {{ moment(dateProps).dayOfYear() }}
    </h1>
    <h1>
      {{ this.chosenScreenings }}
    </h1>
  </div>
  <!--film cards-->
  <div class="row">
    <div
      class="card mb-1 col-md-4 filmcard text-white"
      style="width: 12rem"
      v-for="movie in movies"
    >
      <img :src="movie.img" class="card-img-top" :alt="movie.titleEnglish" />
      <div class="card-body">
        <h1 class="card-title">{{ movie.titleSweden }}</h1>
        <p class="card-text">IMDB: {{ movie.imdb }}</p>
      </div>
    </div>
  </div>

  <div class="row">
    <div
      class="card mb-1 col-md-4 filmcard text-white"
      style="width: 12rem"
      v-for="movie in selectedMovies"
    >
      <img :src="movie.img" class="card-img-top" :alt="movie.titleEnglish" />
      <div class="card-body">
        <h1 class="card-title">{{ movie.titleSweden }}</h1>
        <p class="card-text">IMDB: {{ movie.imdb }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todaysDate: moment().dayOfYear(),
      chosenDate: null,
      filmIds: "",
      todaysScreenings: [],
      chosenScreenings: [],
      movies: null,
      selectedMovies: null,
    };
  },
  props: {
    dateProps: {
      type: Date,
      require: true,
    },
  },
  created() {
    this.getScreenings();
    this.getMovies();
  },
  methods: {
    getScreenings() {
      axios
        .get("screenings.json")
        .then(
          (response) =>
            (this.todaysScreenings = response.data[this.todaysDate].Victoria)
        );
    },
    getChosenScreenings() {
      axios
        .get("screenings.json")
        .then(
          (response) =>
            (this.chosenScreenings = response.data[this.chosenDate].Victoria)
        );
    },
    getMovies() {
      axios.get("movies.json").then((response) => {
        this.movies = response.data;
        this.movies = this.movies.filter(
          (movie) => this.todaysScreenings.indexOf(movie.id) > -1
        );
      });
    },
    getTodaysMovies() {
      axios.get("movies.json").then((response) => {
        this.selectedMovies = response.data;
        this.selectedMovies = this.movies.filter(
          (movie) => this.todaysScreenings.indexOf(movie.id) > -1
        );
      });
    },
  },
};
</script>

<style scoped>
.test {
  height: 50vh;
}
</style>
