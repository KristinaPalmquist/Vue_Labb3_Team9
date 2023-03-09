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
      <div v-for="movie in movies" :key="movie.id" class="grid-container">
        <div class="poster">
          <img class="poster-image" :src="`${movie.img}`" />
        </div>
        <div class="title">
          <h2>{{ movie.titleSweden }}</h2>
        </div>
        <div class="info">
          <table id="info-table">
            <tr>
              <td class="info-title">Svensk premiär:</td>
              <td class="info-text">{{ movie.premiere }}</td>
            </tr>
            <tr>
              <td class="info-title">Trailer på IMDb:</td>
              <td class="info-text">
                <a :href="`${movie.trailer}`" target="_blank" id="trailer-link">
                  {{ movie.titleSweden }}
                </a>
              </td>
            </tr>
            <tr>
              <td class="info-title">Längd:</td>
              <td class="info-text">{{ movie.minutes }} minuter</td>
            </tr>
            <tr>
              <td class="info-title">Åldersgräns:</td>
              <td class="info-text">{{ movie.ageLimit }} år</td>
            </tr>
            <tr>
              <td class="info-title">Genre:</td>
              <td class="info-text">
                <template v-for="(genre, index) in movie.category" :key="index">
                  <template v-if="index > 0">, </template>
                  {{ genre }}
                </template>
              </td>
            </tr>
            <tr>
              <td class="info-title">Regissör:</td>
              <td class="info-text">
                <template v-for="(dir, index) in movie.director" :key="index">
                  <template v-if="index > 0">, </template>
                  {{ dir }}
                </template>
              </td>
            </tr>
            <tr id="row-actors">
              <td class="info-title">Skådespelare:</td>
              <td class="info-text">
                <template v-for="(actor, index) in movie.actors" :key="index">
                  <template v-if="index > 0">, </template>
                  {{ actor }}
                </template>
              </td>
            </tr>
          </table>
        </div>
        <div class="text-area">
          <p>{{ movie.plot }}</p>
        </div>
        <div class="rating">
          <h5>Tillgängliga omdömen</h5>
          <table id="rating-table">
            <tr>
              <td v-if="movie.imdb !== null" class="rating-site">IMDb:</td>
              <td v-if="movie.imdb !== null" class="rating-score">{{ movie.imdb }}/10</td>
            </tr>
            <tr>
              <td v-if="movie.rtTomatometer !== null" class="rating-site">
                Rotten Tomatoes Tomatometer:
              </td>
              <td v-if="movie.rtTomatometer !== null" class="rating-score">
                {{ movie.rtTomatometer }}/100
              </td>
            </tr>
            <tr>
              <td v-if="movie.rtAudienceScore !== null" class="rating-site">
                Rotten Tomatoes Audience Score:
              </td>
              <td v-if="movie.rtAudienceScore !== null" class="rating-score">
                {{ movie.rtTomatometer }}/100
              </td>
            </tr>
          </table>
        </div>
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
h2 {
  font-size: 2.75rem;
  color: var(--yellow);
}

h5 {
  font-size: 1.375rem;
  color: var(--yellow);
}
.container {
  /* border-radius: 15px;
  border: 1px solid var(--yellow); */
  padding: 20px;
}
.grid-container {
  display: grid;
  grid-column: 100%;
  grid-row: min-content min-content min-content min-content;
  grid-template-areas:
    "title"
    "poster"
    "text-area"
    "info"
    "rating";
}

.title {
  grid-area: title;
  padding: 20px;
  width: 100%;
  margin: auto;
}
.info {
  grid-area: info;
  padding: 10px;
}

.text-area {
  grid-area: text-area;
  padding: 10px;
}

.poster {
  grid-area: poster;
  padding: 20px;
}

.rating {
  grid-area: rating;
  border-radius: 15px;
  border: 1px solid var(--yellow);
  padding: 10px;
}
.poster-image {
  max-width: 90vw;
}

#trailer-link {
  font-size: 1rem;
  text-decoration: none;
  color: var(--yellow);
}
#trailer-link:visited {
  color: var(--red-dark);
}

table {
  width: 100%;
  font-size: 0.875rem;
}

tr {
  height: 30px;
}

.info-title {
  width: 115px;
  text-align: right;
  padding-right: 7px;
}
.info-text {
    text-align: left;
    padding-left: 7px
}

#row-actors {
  height: 60px;
}

.rating-site {
  width: 240px;
  text-align: right;
  padding-right: 7px;
}
.rating-score {
    text-align: left;
    padding-left: 7px
}

#info-table {
}

#rating-table>tr {
    height: 40px
}

@media screen and (min-width: 1000px) {
  .container {
    max-height: 100vh;
  }
  .grid-container {
    display: grid;
    grid-column: auto 1fr 1fr 1fr auto;
    grid-row: 1fr auto auto 1fr;
    grid-template-areas:
      ". title title poster ."
      ". text-area text-area poster ."
      ". info info poster ."
      ". rating rating poster .";
  }

  .poster-image {
    max-height: 90vh;
  }
}
</style>
