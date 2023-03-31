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
        .get("/movies.json")
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
        .get("/cinemas.json")
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
          <div id="text">
            <h8 class="film-title">{{ movie.titleSweden }}</h8>
            <div v-for="cinema in cinemas" :key="cinema.id">
              <div v-if="cinema.movies.includes(movie.id)">
                <h9
                  class="cinemaList"
                  @click="onClickCinemaHero(cinema.nameId)"
                >
                  {{ cinema.name }}
                </h9>
              </div>
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
.card2 {
  min-width: 250px;
  height: 350px;
  width: 240px;
  border-radius: 15px;
  opacity: 0.9;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
}

.card2:hover {
  cursor: pointer;
  opacity: 1;
}

/* Innehåller texten under cards */
.cinemaList {
  color: var(--white);
  cursor: pointer;
}
.cinemaList:hover {
  color: var(--yellow);
}

@media screen and (min-width: 1200px) {
  .container2 {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 300px;
    flex-wrap: wrap;
    z-index: 1;
  }
  .card2 {
    min-width: 250px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .col-lg-4 {
    flex: 0 0 auto;
    width: 25%;
  }
}

@media screen and (min-width: 650px) and (max-width: 991px) {
  .col-lg-4 {
    flex: 0 0 auto;
    width: 50%;
  }
}

.film-title {
  margin-top: 10px;
}
</style>
