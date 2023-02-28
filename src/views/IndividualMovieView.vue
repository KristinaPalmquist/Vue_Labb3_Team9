<script setup>
import axios from "axios";
</script>

<template>
  <!-- <img class="poster" :src="`${movie.img}`" />
  <h2>{{ movie.titleSweden }}</h2>
  <p>Svensk premiär: {{ movie.premiere }}</p>
  <a :href="`${movie.trailer}`">Se trailer för {{ movie.titleSweden }}</a>
  <p>Längd: {{ movie.minutes }} minuter</p>
  <p>Åldersgräns: {{ movie.ageLimit }} år</p>
  <p>
    Genre:
    <template v-for="(genre, index) in movie.category" :key="index">
      <template v-if="index > 0">, </template>
      {{ genre }}
    </template>
  </p>
  <p>Regissör: {{ movie.director }}</p>
  <p>
    Skådespelare:
    <template v-for="(actor, index) in movie.actors" :key="index">
      <template v-if="index > 0">, </template>
      {{ actor }}
    </template>
  </p>
  <p>{{ movie.plot }}</p>
  <h3>Omdömen:</h3>
  <p>
    <template v-if="movie.imdb !== null">IMDb: {{ movie.imdb }}/10</template>
  </p>
  <p>
    <template v-if="movie.rtTomatometer !== null"
      >Rotten Tomatoes Tomatometer: {{ movie.rtTomatometer }}/100</template
    >
  </p>
  <p>
    <template v-if="movie.rtAudienceScore !== null"
      >Rotten Tomatoes Audience Score: {{ movie.rtAudienceScore }}/100</template
    >
  </p> -->

  <div v-for="movie in movies" :key="movie.id">
    <img class="poster" :src="`${movie.img}`" />
    <h2>{{ movie.titleSweden }}</h2>
    <p>Svensk premiär: {{ movie.premiere }}</p>
    <a :href="`${movie.trailer}`">Se trailer för {{ movie.titleSweden }}</a>
    <p>Längd: {{ movie.minutes }} minuter</p>
    <p>Åldersgräns: {{ movie.ageLimit }} år</p>
    <p>
      Genre:
      <template v-for="(genre, index) in movie.category" :key="index">
        <template v-if="index > 0">, </template>
        {{ genre }}
      </template>
    </p>
    <p>Regissör: {{ movie.director }}</p>
    <p>
      Skådespelare:
      <template v-for="(actor, index) in movie.actors" :key="index">
        <template v-if="index > 0">, </template>
        {{ actor }}
      </template>
    </p>
    <p>{{ movie.plot }}</p>
    <h3>Omdömen:</h3>
    <p>
      <template v-if="movie.imdb !== null">IMDb: {{ movie.imdb }}/10</template>
    </p>
    <p>
      <template v-if="movie.rtTomatometer !== null"
        >Rotten Tomatoes Tomatometer: {{ movie.rtTomatometer }}/100</template
      >
    </p>
    <p>
      <template v-if="movie.rtAudienceScore !== null"
        >Rotten Tomatoes Audience Score:
        {{ movie.rtAudienceScore }}/100</template
      >
    </p>
  </div>
</template>

<script>
export default {
  props: {
    movieId: {
      type: Number,
      value: 36,
    },
  },
  data() {
    return {
      movies: [],
      movie: {},
    };
  },
  created() {
    this.fetchMovies();
  },
  methods: {
    fetchMovies() {
      axios
        .get(
          "../../public/movies.json"
          // , {
          //   id: this.movieId,
          // }
        )
        .then((movies) => {
          this.movies = movies;
          console.log("this Movies", this.movies);
        });
    },
  },
};
</script>

<style scoped>
.poster {
  height: 600px;
  max-height: 50vh;
  max-width: 50vw;
}
</style>
