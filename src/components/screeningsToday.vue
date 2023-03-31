<script setup>
import axios from "axios";
</script>

<script>
export default {
  data() {
    return {
      filmIds: "",
      todaysScreenings: [],
      movies: null,
      selectedMovies: null,
    };
  },
  watch: {
    todaysScreenings(value) {
      this.getMovies(value);
    },
  },
  created() {
    this.getMovies();
    this.getScreenings();
  },
  methods: {
    getScreenings() {
      axios
        .get("/screenings.json")
        .then(
          (response) =>
            (this.todaysScreenings =
              response.data[this.$store.state.date].Victoria)
        );
    },
    nextDay() {
      this.$store.commit("increment");
      axios
        .get("/screenings.json")
        .then(
          (response) =>
            (this.todaysScreenings =
              response.data[this.$store.state.date].Victoria)
        );
    },
    previousDay() {
      this.$store.commit("previous");
      axios
        .get("/screenings.json")
        .then(
          (response) =>
            (this.todaysScreenings =
              response.data[this.$store.state.date].Victoria)
        );
    },
    // skickar till IndividualMovie
    onClick(titleId) {
      this.$router.replace("film/" + titleId);
    },
    getMovies() {
      axios.get("/movies.json").then((response) => {
        this.movies = response.data;
        this.movies = this.movies.filter(
          (movie) => this.todaysScreenings.indexOf(movie.id) > -1
        );
      });
    },
  },
};
</script>

<template>
  <div class="card-container">
    <div class="cards-div">
      <!--film cards todays film-->
      <h5 class="on-cinema">På bio</h5>
      <h6 class="date-header">
        <span @click="previousDay"><i class="change-day left"></i></span>
        {{ $store.state.datefixed }}
        <span @click="nextDay"><i class="change-day right"></i></span>
      </h6>
      <div class="row">
        <div
          class="card filmcard text-white"
          style="width: 12rem"
          v-for="movie in movies"
          :key="movie.id"
          @click="onClick(movie.titleId)"
        >
          <img
            :src="movie.img"
            class="card-img-top"
            :alt="movie.titleEnglish"
          />
          <div class="card-body">
            <h1 class="card-title">{{ movie.titleSweden }}</h1>
            <p class="card-text">IMDB: {{ movie.imdb }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.on-cinema {
  margin-top: 20px;
}

.date-header {
  margin-bottom: 20px;
}
.card {
  margin: 0 auto;
  float: none;
}

.card img {
  height: 250px;
}
.filmcard {
  cursor: pointer;
  background-color: #121212 !important;
}
.card-title {
  font-size: medium;
}

.card-container {
  margin: 0 2vh;
}

/*change day buttons*/
.change-day {
  border: solid #f5c65067;
  border-width: 0 3px 3px 0;
  height: 1rem;
  width: 1rem;
  display: inline-block;
  padding: 3px;
}

.change-day:hover {
  cursor: pointer;
  border: solid #f5c550;
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
