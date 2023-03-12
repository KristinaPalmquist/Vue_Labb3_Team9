<script>
import axios from "axios";

export default {
  // förladdning av json filerna
  created() {
    this.apiCall();
    this.cinemaSearch();
    // this.getDramas();
  },
  methods: {
    // hämtar filmernas json
    apiCall() {
      axios.get("movies.json").then((response) => {
        this.movies = response.data; // loading the whole film json
        // creating drama array randomising and choosing 3 movies
        this.dramas = this.movies
          .filter((movie) => movie.category.includes("Drama"))
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        // creating comedy list
        this.comedys = this.movies
          .filter((movie) => movie.category.includes("Komedi"))
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        // creating documentary list
        this.documentarys = this.movies
          .filter((movie) => movie.category.includes("Dokumentär"))
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
      });
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
      dramas: [],
      comedys: [],
      documentarys: []
    };
  },
};
</script>

<template>
  <div class="container">
    DRAMA
    <hr class="hr hr-blurry" />
    <div class="row">
      <div v-for="movie in dramas" :key="movie.titleId" class="col-md-4">
        <div>
          <div class="container2">
            <div
              class="card2"
              :style="{ backgroundImage: `url(${movie.img})` }"
              :alt="movie.titleSweden"
              @click="onClick(movie.titleId)"
            ></div>
          </div>
        </div>
        <!-- <div v-for="cinema in cinemas" :key="cinema.id">
          <div v-if="cinema.movies.includes(movie.id)">
            <h2 class="cinemaList" @click="onClickCinemaHero(cinema.nameId)">
              {{ cinema.name }}
            </h2>
          </div>
        </div> -->
      </div>
    </div>
    KOMEDI
    <hr class="hr hr-blurry" />
    <div class="row">
      <div v-for="movie in comedys" :key="movie.titleId" class="col-md-4">
        <div>
          <div class="container2">
            <div
              class="card2"
              :style="{ backgroundImage: `url(${movie.img})` }"
              :alt="movie.titleSweden"
              @click="onClick(movie.titleId)"
            ></div>
          </div>
        </div>
      </div>
    </div>
    DOKUMENTÄR
    <hr class="hr hr-blurry" />
    <div class="row">
      <div v-for="movie in documentarys" :key="movie.titleId" class="col-md-4">
        <div>
          <div class="container2">
            <div
              class="card2"
              :style="{ backgroundImage: `url(${movie.img})` }"
              :alt="movie.titleSweden"
              @click="onClick(movie.titleId)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  flex-wrap: wrap;
  z-index: 1;
}
.container2 .card2 {
  min-width: 150px;
  width: 250px;
  height: 350px;
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
