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
    onClick(id) {
      this.$router.replace("film/" + id);
    },
    // skickar till CinemaHero sida
    onClickCinemaHero(id) {
      this.$router.replace("biograf/" + id);
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
        <div class="col-md-4 filmcard" v-for="movie in movies" :key="movie.id">
          <div class="container2">
            <div
              class="card2"
              :style="{ backgroundImage: `url(${movie.img})` }"
              :alt="movie.titleSweden"
              @click="onClick(movie.id)"
            >
              <div class="content2">
                <h2>{{ movie.id }}</h2>
                <h3>{{ movie.titleSweden }}</h3>
                <p>Ranking IMDB: {{ movie.imdb }}</p>
                <a class="card-text" :href="movie.trailer" target="_blank">
                  Trailer
                </a>
              </div>
            </div>
          </div>
          <div v-for="cinema in cinemas" :key="cinema.id">
            <div v-if="cinema.movies.includes(movie.id)">
              <h2 class="cinemaList" @click="onClickCinemaHero(cinema.id)">
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
.container2 .card2 .content2 h2 {
  position: absolute;
  top: -100px;
  right: 30px;
  font-size: 8em;
  color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}
.container2 .card2 .content2 h3 {
  font-size: 2em;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  z-index: 1;
}
.container2 .card2 .content2 p {
  font-size: 2em;
  color: #fff;
  font-weight: 300;
}
.container2 .card2 .content2 a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  margin-top: 15px;
  background: #fff;
  color: #000;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}
/* Innehåller texten under cards */
.cinemaList {
  color: rgba(255, 255, 255, 1);
  font-size: 1em;
  margin-left: 25%;
}
</style>
