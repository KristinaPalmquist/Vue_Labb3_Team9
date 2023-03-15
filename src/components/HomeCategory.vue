<script>
import axios from "axios";

export default {
  // förladdning av json filerna
  created() {
    this.apiCall();
  },
  methods: {
    // hämtar filmernas json
    apiCall() {
      axios.get("/movies.json").then((response) => {
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
  },
  data() {
    return {
      movies: [],
      dramas: [],
      comedys: [],
      documentarys: [],
    };
  },
};
</script>

<template>
  <div class="container">
    <h5>Drama</h5>
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
      </div>
    </div>
    <h5>Komedi</h5>
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
    <h5>Dokumentär</h5>
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

</style>
