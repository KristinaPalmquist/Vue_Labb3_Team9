<script>
import axios from "axios";

export default {
  data() {
    return {
      films: [],
      cinemas: [],
      searchinput: "",
      filmsResult: [],
      cinemasResult: [],
      filmsHeader: "",
      cinemasHeader: "",
    };
  },
  created() {
    this.filmSearch();
    this.cinemaSearch();
  },
  methods: {
    filmSearch() {
      axios.get("movies.json").then((response) => (this.films = response.data));
    },
    cinemaSearch() {
      axios
        .get("cinemas.json")
        .then((response) => (this.cinemas = response.data));
    },
    onClick() {
      this.cinemasResult = this.searchFilterMovies;
      this.filmsResult = this.searchFilterFilms;
      this.searchinput = "";
      this.filmsHeader = "FILMER";
      this.cinemasHeader = "BIOGRAFER";
    },
  },
  computed: {
    searchFilterFilms() {
      return this.films.filter((data) => {
        return data.titleSweden
          .toLowerCase()
          .includes(this.searchinput.toLowerCase());
      });
    },
    searchFilterMovies() {
      return this.cinemas.filter((data) => {
        return data.name.toLowerCase().includes(this.searchinput.toLowerCase());
      });
    },
  },
};
</script>

<template>
  <div class="input-group rounded">
    <input
      type="search"
      class="form-control rounded"
      placeholder="Filmer och Biografer"
      aria-label="Search"
      aria-describedby="search-addon"
      v-model="searchinput"
      @keydown.enter="onClick"
    />
    <span class="input-group-text border-0" @click="onClick" id="search-addon">
      <i class="bi bi-film"></i>
    </span>
  </div>
  <div v-if="this.searchinput != ''">
    <tr class="listdiv" v-for="data in searchFilterFilms" :key="data">
      <td>{{ data.titleSweden }}</td>
    </tr>
    <tr class="listdiv" v-for="data in searchFilterMovies" :key="data">
      <td>{{ data.name }}</td>
    </tr>
  </div>
  <div class="row">
        <div class="card mb-1 col-md-4 filmcard" style="width: 12rem" v-for="result in filmsResult" :key="result">
          <img
            :src="result.img"
            class="card-img-top"
            :alt="result.titleEnglish"
          />
          <div class="card-body">
            <h5 class="card-title">{{ result.titleSweden }}</h5>
            <p class="card-text">Ranking IMDB: {{ result.imdb }}</p>
            <a class="card-text" :href="result.trailer" target="_blank">
              Trailer
            </a>
          </div>
        </div>
      </div>
  <div class="column">
  <div class="card mb-1 col-md-7 cinema-card" v-for="result in cinemasResult" :key="result">
      <div class="card bg-dark text-white" >
        <img class="card-img" :src="result.img" alt="Card image">
           <div class="card-img-overlay">
             <h5 class="card-title">{{ result.name }}</h5>
             <p class="card-text">{{ result.Adress }}</p>
           </div>
          </div>
</div>
</div>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</template>

<style>
.cinema-card {
  margin: 45px 10px;
}

.filmcard {
  margin: 45px 25px;
}

.card-img {
  height: 60vh;
}
</style>
