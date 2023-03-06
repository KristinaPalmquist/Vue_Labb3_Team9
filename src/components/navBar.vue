<script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { RouterLink, RouterView } from "vue-router";
const date = ref(new Date());
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: Number,
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
    onClickOne() {
      this.cinemasResult = this.searchFilterMovies;
      this.filmsResult = this.searchFilterFilms;
      this.searchinput = "";
      this.filmsHeader = "FILMER";
      this.cinemasHeader = "BIOGRAFER";
    },
    onClick(titleId) {
      this.$router.replace("film/" + titleId);
      this.cinemasResult = "";
      this.filmsResult = "";
    },
    onClickThree(nameId) {
      this.$router.replace("biograf/" + nameId);
      this.cinemasResult = "";
      this.filmsResult = "";
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
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">CINEMAP</RouterLink>
      <VueDatePicker
        dark
        v-model="date"
        class="datePickerMobile datePicker"
      ></VueDatePicker>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/"
              >Hem</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/film">Filmer</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/biograf">Biografer</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/feedback">Feedback</RouterLink>
          </li>
        </ul>
      </div>
      <!--search-->
      <div class="searchbar-div">
        <div class="input-group rounded inputdiv">
          <input
            type="search"
            class="form-control rounded searchinput"
            placeholder="Filmer och Biografer"
            aria-label="Search"
            aria-describedby="search-addon"
            v-model="searchinput"
            @keydown.enter="onClickOne"
          />
          <span
            class="input-group-text border-0"
            @click="onClickOne"
            id="search-addon"
          >
            <i class="bi bi-search"></i>
          </span>
        </div>
        <!--search result list-->
        <div class="listdiv-container">
          <div v-if="this.searchinput != ''">
            <tr class="listdiv" v-for="data in searchFilterFilms" :key="data">
              <td>{{ data.titleSweden }}</td>
            </tr>
            <tr class="listdiv" v-for="data in searchFilterMovies" :key="data">
              <td>{{ data.name }}</td>
            </tr>
          </div>
        </div>
      </div>
      <!--calendar-->
      <VueDatePicker
        dark
        v-model="date"
        class="datePickerDesktop datePicker"
        color="black"
      ></VueDatePicker>
    </div>
  </nav>
  <!--search result cards-->
  <div class="cards-div">
    <div class="row">
      <div
        class="card mb-1 col-md-4 filmcard text-white"
        style="width: 12rem"
        v-for="result in filmsResult"
        :key="result.id"
        @click="onClick(result.titleId)"
      >
        <img
          :src="result.img"
          class="card-img-top"
          :alt="result.titleEnglish"
        />
        <div class="card-body">
          <h1 class="card-title">{{ result.titleSweden }}</h1>
          <p class="card-text">IMDB: {{ result.imdb }}</p>
        </div>
      </div>
    </div>
    <div
      class="card bg-dark mb-1 col-md-7 cinema-card"
      v-for="result in cinemasResult"
      :key="result"
      @click="($event) => onClickThree(result.nameId)"
    >
      <div class="card bg-dark">
        <img class="card-img" :src="result.img" alt="Card image" />
        <div class="card-img-overlay">
          <h5 class="card-title">{{ result.name }}</h5>
          <p class="card-text">{{ result.Adress }}</p>
        </div>
      </div>
    </div>
  </div>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
  />
  <RouterView />
</template>

<style scoped>
@media only screen and (max-width: 800px) {
  .datePickerDesktop {
    display: none;
  }
}
@media only screen and (min-width: 800px) {
  .datePickerMobile {
    display: none;
  }
}
.datePicker {
  width: 200px;
}

.cinema-card {
  margin: 10px;
  cursor: pointer;
}
.filmcard {
  margin: 45px;
  cursor: pointer;
  background-color: #131415 !important;
}

.searchinput {
  background-color: black;
  color: beige;
}

.searchinput:focus {
  background-color: black;
  color: beige;
}

.searchbar-div {
  width: 250px;
  text-align: left;
}

#search-addon {
  background-color: #131415;
  color: white;
}

.card-title {
  font-size: medium;
}

.cards-div {
  background-color: #131415;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.listdiv {
  background-color: #13141594;
  color: white;
  display: flex;
  flex-direction: column;
}

.listdiv-container {
  position: absolute;
  top: 58px;
  z-index: 999;
}
</style>
