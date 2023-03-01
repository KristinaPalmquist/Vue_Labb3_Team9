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
  <div class="result-div">
    <div class="films-div">
      <p>{{ filmsHeader }}</p>
      <div v-for="result in filmsResult" :key="result">
        <li>{{ result.titleSweden }}</li>
      </div>
    </div>
    <div class="cinemas-div">
      <p>{{ cinemasHeader }}</p>
      <div v-for="result in cinemasResult" :key="result">
        <li>{{ result.name }}</li>
      </div>
    </div>
  </div>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</template>

<style>
.films-div {
  margin: 10px 10px;
}

.cinemas-div {
  margin: 10px 10px;
}

.result-div {
  display: flex;
  flex-direction: row;
}

#search-icon {
  height: 25px;
}
</style>
