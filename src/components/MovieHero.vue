<script setup>
import axios from "axios";
</script>

<template>
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
        <div id="info-container">
          <div id="premiere">
            <p class="info-title">Svensk premiär</p>
            <p class="info-text">{{ movie.premiere }}</p>
          </div>
          <div id="trailer">
            <p class="info-title">Trailer på IMDb</p>
            <p class="info-text">
              <a :href="`${movie.trailer}`" target="_blank" id="trailer-link">
                {{ movie.titleSweden }}
              </a>
            </p>
          </div>
          <div id="minutes">
            <p class="info-title">Längd</p>
            <p class="info-text">{{ movie.minutes }} minuter</p>
          </div>
          <div id="age">
            <p class="info-title">Åldersgräns</p>
            <p class="info-text">{{ movie.ageLimit }} år</p>
          </div>
          <div id="genre">
            <p class="info-title">Genre</p>
            <p class="info-text">
              <template v-for="(genre, index) in movie.category" :key="index">
                <template v-if="index > 0">, </template>
                {{ genre }}
              </template>
            </p>
          </div>
          <div id="director">
            <p class="info-title">Regissör</p>
            <p class="info-text">
              <template v-for="(dir, index) in movie.director" :key="index">
                <template v-if="index > 0">, </template>
                {{ dir }}
              </template>
            </p>
          </div>
          <div id="actors">
            <p class="info-title">Skådespelare</p>
            <p class="info-text">
              <template v-for="(actor, index) in movie.actors" :key="index">
                <template v-if="index > 0">, </template>
                {{ actor }}
              </template>
            </p>
          </div>
        </div>
      </div>
      <div class="text-area">
        <h6>Handling</h6>
        <p>{{ movie.plot }}</p>
      </div>
      <div class="rating">
        <div id="rating-container">
          <div id="rating-header">
            <h7>Tillgängliga omdömen</h7>
          </div>
          <div id="imdb" class="rating-site">
            <p v-if="movie.imdb !== null">IMDb:</p>
          </div>
          <div id="imdb-score" class="rating-score">
            <p v-if="movie.imdb !== null">{{ movie.imdb }}/10</p>
          </div>
          <div id="tm" class="rating-site">
            <p v-if="movie.rtTomatometer !== null">
              Rotten Tomatoes Tomatometer:
            </p>
          </div>
          <div id="tm-score" class="rating-score">
            <p v-if="movie.rtTomatometer !== null" id="tm-score">
              {{ movie.rtTomatometer }}/100
            </p>
          </div>
          <div id="as" class="rating-site">
            <p v-if="movie.rtAudienceScore !== null" id="as">
              Rotten Tomatoes Audience Score:
            </p>
          </div>
          <div id="as-score" class="rating-score">
            <p v-if="movie.rtAudienceScore !== null" id="as-score">
              {{ movie.rtAudienceScore }}/100
            </p>
          </div>
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
    axios.get("/public/movies.json").then((response) => {
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
.grid-container {
  padding: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content min-content min-content min-content;
  grid-template-areas:
    "title"
    "poster"
    "text-area"
    "info"
    "rating";
}

.title {
  grid-area: title;
  padding: 0 20px;
  width: 100%;
  margin: auto;
}

.text-area {
  grid-area: text-area;
  padding: 0 10px;
}

.poster {
  grid-area: poster;
  padding: 0 20px;
}

.poster-image {
  max-width: 80vw;
}

.rating {
  grid-area: rating;
  max-width: 472px;
  margin: 0 auto;
}
.info {
  grid-area: info;
  padding: 0 10px;
  margin: 5px auto 15px auto;
}

#info-container {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content min-content min-content min-content min-content min-content min-content;
  grid-template-areas: "premiere" "trailer" "minutes" "genre" "age" "director" "actors";
}

#premiere {
  grid-area: premiere;
}
#trailer {
  grid-area: trailer;
}
#minutes {
  grid-area: minutes;
}
#genre {
  grid-area: genre;
}
#age {
  grid-area: age;
}
#director {
  grid-area: director;
}
#actors {
  grid-area: actors;
}

#trailer-link {
  font-size: 1rem;
  text-decoration: none;
  color: var(--blue);
}
/* #trailer-link:visited {
  color: var(--red);
} */

/* #info-container > p {
} */

.info-title {
  margin: 0;
  /* width: 115px;
  text-align: right;
  padding-right: 7px; */
  color: var(--yellow);
}
.info-text {
  margin: 0px 5px 15px 5px;
  /* text-align: left;
  padding-left: 7px; */
}

#actors {
  height: 60px;
}

#rating-container {
  border-radius: 15px;
  border: 1px solid var(--yellow);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: auto auto;
  grid-template-areas:
    "rating-header rating-header"
    "imdb imdb-score"
    "tm tm-score"
    "as as-score";
}

#rating-header {
  grid-area: rating-header;
}

#imdb {
  grid-area: imdb;
}

#imdb-score {
  grid-area: imdb-score;
}

#tm {
  grid-area: tm;
}

#tm-score {
  grid-area: tm-score;
}

#as {
  grid-area: as;
}

#as-score {
  grid-area: as-score;
}

.rating-site {
  text-align: right;
  padding: 0 10px;
}

.rating-score {
  text-align: left;
  padding: 0 10px;
}

@media screen and (min-width: 1000px) {
  .container {
    max-height: 100vh;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr auto;
    grid-template-rows: min-content auto min-content min-content;
    grid-template-areas:
      ". title title poster ."
      ". text-area text-area poster ."
      ". info info poster ."
      ". rating rating poster .";
  }
  #info-container {
    display: grid;
    grid-template-columns: auto 1fr 1fr auto;
    grid-template-rows: min-content min-content min-content min-content;
    grid-template-areas:
      ". premiere age ."
      ". trailer genre ."
      ". minutes director ."
      ". actors actors .";
  }

  .poster-image {
    max-height: 90vh;
  }

  #rating-container {
    border-radius: 15px;
    border: 1px solid var(--yellow);
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 20px auto auto 20px;
    grid-template-areas:
      ". rating-header rating-header ."
      ". imdb imdb-score ."
      ". tm tm-score ."
      ". as as-score .";
    gap: 0 20px;
  }

  #imdb,
  #as,
  #tm {
    text-align: right;
  }
  #imdb-score,
  #tm-score,
  #as-score {
    text-align: left;
  }
}
</style>
