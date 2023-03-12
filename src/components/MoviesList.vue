<script>
import axios from "axios";

export default {
  // förladdning av json filerna
  created() {
    this.apiCall();
    this.cinemaSearch();
  },
  methods: {
    // hämtar filmernas json
    apiCall() {
      axios
        .get("movies.json")
        .then((response) => (this.movies = response.data));
    },
    // skickar till IndividualMovie
    onClick(titleId) {
      this.$router.replace("film/" + titleId);
    },
    // skickar till CinemaHero sida
    onClickCinemaHero(nameId) {
      this.$router.replace("biograf/" + nameId);
    },
    // hämtar biografernas json
    cinemaSearch() {
      axios
        .get("cinemas.json")
        .then((response) => (this.cinemas = response.data));
    },
  },
  data() {
    return {
      movies: [],
      cinemas: [],
    };
  },
};
</script>
<template>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-lg-4" v-for="movie in movies" :key="movie.titleId">
          <div class="container2">
            <div
              class="card2"
              :style="{ backgroundImage: `url(${movie.img})` }"
              :alt="movie.titleSweden"
              @click="onClick(movie.titleId)"
            ></div>
          </div>
          <div v-for="cinema in cinemas" :key="cinema.id">
            <div v-if="cinema.movies.includes(movie.id)">
              <h2 class="cinemaList" @click="onClickCinemaHero(cinema.nameId)">
                {{ cinema.name }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<style scoped>

body {
  display: flex;
  justify-self: center;
  align-items: center;
  min-height: 100vh;
}
.container2 {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  flex-wrap: wrap;
  z-index: 1;
}
.container2 .card2 {
  min-width: 250px;
  height: 400px;
  margin: 30px;
  border-radius: 15px;
  opacity: 0.7;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container2 .card2:hover {
  cursor: pointer;
  opacity: 1;
}

/* Innehåller texten under cards */
.cinemaList {
  color: rgba(255, 255, 255, 1);
  font-size: 1em;
  cursor: pointer;
}
.cinemaList:hover {
  color: #f5c518;
}
</style>
