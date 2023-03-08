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
          <span @click="previousDay"><i class="change-day left"></i></span>
          {{ $store.state.datefixed }}
          <span @click="nextDay"><i class="change-day right"></i></span>
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
    todaysScreenings(value) {
      this.getMovies(value);
    },
  },
  mounted() {
    this.getMovies();
  },
  created() {
    this.getScreenings();
    this.getChosenMovies();
  },
  methods: {
    getScreenings() {
      axios
        .get("screenings.json")
        .then(
          (response) =>
            (this.todaysScreenings =
              response.data[this.$store.state.date].Victoria)
        );
    },
    nextDay() {
      this.$store.commit("increment");
      axios
        .get("screenings.json")
        .then(
          (response) =>
            (this.todaysScreenings =
              response.data[this.$store.state.date].Victoria)
        );
    },
    previousDay() {
      this.$store.commit("previous");
      axios
        .get("screenings.json")
        .then(
          (response) =>
            (this.todaysScreenings =
              response.data[this.$store.state.date].Victoria)
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
    getMovies(value) {
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

/*change day buttons*/
.change-day {
  border: solid white;
  border-width: 0 3px 3px 0;
  height: 1rem;
  width: 1rem;
  display: inline-block;
  padding: 3px;
  margin-bottom: 5px;
}

.change-day:hover {
  cursor: pointer;
  border: solid #4f6754;
  border-width: 0 3px 3px 0;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
</style>
