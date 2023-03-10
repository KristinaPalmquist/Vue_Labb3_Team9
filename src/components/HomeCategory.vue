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
  <div class="container">
    Dramaskola
    <hr class="hr hr-blurry" />
    <div class="row">
      <div
        class="card mb-1 col-md-4 filmcard text-white"
        style="width: 12rem"
        v-for="result in filmsResult"
        :key="result.id"
        @click="onClick(result.titleId)"
      >
        <img :src="result.img" class="card-img-top" :alt="result.titleEnglish" />
        <div class="card-body">
          <h1 class="card-title">{{ result.titleSweden }}</h1>
          <p class="card-text">IMDB: {{ result.imdb }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cards-div {
  background-color: #131415;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-title {
  font-size: medium;
}

.cinema-card {
  margin: 10px;
  cursor: pointer;
}
.filmcard {
  margin: 30px;
  cursor: pointer;
  background-color: #131415 !important;
}
</style>
