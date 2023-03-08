<script setup>
import axios from "axios";
import { ref } from "vue";
import moment from "moment/min/moment-with-locales";
</script>

<template>
  <div class="cards-div">
    <!--film cards todays film-->
    <div class="row" v-if="this.dateProps == undefined">
      <div class="date-header">
        <h1>
          {{ $store.state.datefixed }}
        </h1>
      </div>
      <div
        class="card mb-1 col-md-4 filmcard text-white"
        style="width: 12rem"
        v-for="movie in movies"
        @click="onClick(movie.titleId)"
      >
        <img :src="movie.img" class="card-img-top" :alt="movie.titleEnglish" />
        <div class="card-body">
          <h1 class="card-title">{{ movie.titleSweden }}</h1>
          <p class="card-text">IMDB: {{ movie.imdb }}</p>
        </div>
      </div>
    </div>
    <!--film cards chosen film-->
    <div class="row" v-if="this.dateProps != undefined">
      <div class="date-header">
        <h1>
          {{ moment(dateProps).lang("sv").format("LL") }}
        </h1>
      </div>
      <div
        class="card mb-1 col-md-4 filmcard text-white"
        style="width: 12rem"
        v-for="movie in selectedMovies"
        @click="onClickTwo(movie.titleId)"
      >
        <img :src="movie.img" class="card-img-top" :alt="movie.titleEnglish" />
        <div class="card-body">
          <h1 class="card-title">{{ movie.titleSweden }}</h1>
          <p class="card-text">IMDB: {{ movie.imdb }}</p>
        </div>
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
  watch: {
    dateProps(value) {
      this.getChosenScreenings(value);
      this.getChosenMovies(value);
    },
  },
  created() {
    this.getScreenings();
    this.getMovies();
    this.getChosenMovies();
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
    getChosenScreenings(value) {
      axios
        .get("screenings.json")
        .then(
          (response) =>
            (this.chosenScreenings =
              response.data[moment(value).dayOfYear()].Victoria)
        );
    },
    // skickar till IndividualMovie
    onClick(titleId) {
      this.$router.replace("film/" + titleId);
    },
    // skickar till IndividualMovie
    onClickTwo(titleId) {
      this.$router.replace("film/" + titleId);
    },
    getMovies() {
      axios.get("movies.json").then((response) => {
        this.movies = response.data;
        this.movies = this.movies.filter(
          (movie) => this.todaysScreenings.indexOf(movie.id) > -1
        );
      });
    },
    getChosenMovies() {
      axios.get("movies.json").then((response) => {
        this.selectedMovies = response.data;
        this.selectedMovies = this.selectedMovies.filter(
          (selectedMovie) =>
            this.chosenScreenings.indexOf(selectedMovie.id) > -1
        );
      });
    },
  },
};
</script>

<style scoped>
.cards-div {
  background-color: #131415;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.filmcard {
  margin: 45px;
  cursor: pointer;
  background-color: #131415 !important;
}
.card-title {
  font-size: medium;
}

.date-header {
  text-align: center;
  margin-top: 20px;
}
</style>
