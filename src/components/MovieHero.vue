<script setup>
import axios from "axios";
</script>

<template>
  <div class="container">
    <div v-if="!movie">
      Någonting har blivit fel, sidan för filmen du valt finns inte. Vänligen gå
      tillbaka och välj en annan film.
    </div>
    <div v-if="movie">
      <div v-for="movie in movies" :key="movie.id">
        <img class="poster" :src="`${movie.img}`" />
        <h2>{{ movie.titleSweden }}</h2>
        <p>Svensk premiär: {{ movie.premiere }}</p>
        <a :href="`${movie.trailer}`" target="_blank"
          >Se trailer för {{ movie.titleSweden }} på YouTube</a
        >
        <p>Längd: {{ movie.minutes }} minuter</p>
        <p>Åldersgräns: {{ movie.ageLimit }} år</p>
        <p>
          Genre:
          <template v-for="(genre, index) in movie.category" :key="index">
            <template v-if="index > 0">, </template>
            {{ genre }}
          </template>
        </p>
        <p>
          Regissör:
          <template v-for="(dir, index) in movie.director" :key="index">
            <template v-if="index > 0">, </template>
            {{ dir }}
          </template>
        </p>
        <p>
          Skådespelare:
          <template v-for="(actor, index) in movie.actors" :key="index">
            <template v-if="index > 0">, </template>
            {{ actor }}
          </template>
        </p>
        <p>{{ movie.plot }}</p>
        <h5>Tillgängliga omdömen:</h5>
        <p>
          <template v-if="movie.imdb !== null"
            >IMDb: {{ movie.imdb }}/10</template
          >
        </p>
        <p>
          <template v-if="movie.rtTomatometer !== null"
            >Rotten Tomatoes Tomatometer:
            {{ movie.rtTomatometer }}/100</template
          >
        </p>
        <p>
          <template v-if="movie.rtAudienceScore !== null"
            >Rotten Tomatoes Audience Score:
            {{ movie.rtAudienceScore }}/100</template
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // return titleId from the URL
    movieName() {
      return this.$route.params.id;
    },
  },
  data() {
    return {
      movies: [],
      movie: {},
    };
  },
  created() {
    // fetch movies.json and filter result for the movie whos titleId matches movieName taken from URL
    axios.get("/movies.json").then((response) => {
      this.movies = response.data;
      this.movies = this.movies.filter((movie) => {
        return movie.titleId === this.movieName;
      });
      if (this.movies.length > 0) {
        this.movie = this.movies[0];
      }
    });
  },
};
</script>

<style scoped>
.poster {
  height: 600px;
  max-height: 50vh;
  /* max-width: 50vw; */
}
</style>
