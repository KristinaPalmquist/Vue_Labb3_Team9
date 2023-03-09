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
      this.$router.push("film/" + titleId);
    },
    // skickar till CinemaHero sida
    onClickCinemaHero(nameId) {
      this.$router.push("biograf/" + nameId);
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
        <div
          class="col-md-4 filmcard"
          v-for="movie in movies"
          :key="movie.titleId"
        >
          <div class="container2">
            <div
              class="card2"
              :style="{ backgroundImage: `url(${movie.img})` }"
              :alt="movie.titleSweden"
              @click="onClick(movie.titleId)"
            >
              <div class="content2">
                <h2></h2>
                <h3>{{ movie.titleSweden }}</h3>
                <br />
                <h3 v-if="movie.imdb">imdb: {{ movie.imdb }}</h3>
                <h3 v-if="movie.rtTomatometer">
                  Tomatoes: {{ movie.rtTomatometer }}
                </h3>
                <h3 v-if="movie.rtAudienceScore">
                  Audience: {{ movie.rtAudienceScore }}
                </h3>
              </div>
            </div>
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
.filmcard {
  cursor: pointer;
}

body {
  display: flex;
  justify-self: center;
  align-items: center;
  min-height: 100vh;
  background: #131415;
}
.container2 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  flex-wrap: wrap;
  z-index: 1;
}
.container2 .card2 {
  position: relative;
  min-width: 200px;
  height: 400px;
  margin: 30px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  opacity: 0.8;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
}
.container2 .card2 .content2 {
  padding: 20px;
  text-align: center;
  transform: translateY(100px);
  opacity: 0;
  transition: 0.5s;
}
.container2:hover .content2 {
  transform: translateY(0px);
  opacity: 1;
}
/* Text that rolls up on the card image */
/* This H2 is the one which lowers the text initially */
.container2 .card2 .content2 h2 {
  position: absolute;
  top: -100px;
  right: 30px;
  pointer-events: none;
}
.container2 .card2 .content2 h3 {
  font-size: 2em;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0 0 20px #610c04, 0 0 10px #93000A;
  font-weight: 600;
  z-index: 1;
}

/* Innehåller texten under cards */
.cinemaList {
  color: rgba(255, 255, 255, 1);
  font-size: 1em;
  margin-left: 25%;
}
</style>
