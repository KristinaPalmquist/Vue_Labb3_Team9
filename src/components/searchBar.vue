<script>
import axios from "axios";

export default {
    data () {
        return {
            films: [],
            cinemas: [],
            searchinput: ''
        }
    },
    created() {
        this.filmSearch()
        this.cinemaSearch()
    },
    methods: {
        filmSearch() {
            axios
             .get("movies.json")
             .then((response) => (
                this.films = response.data
             ));
        },
        cinemaSearch() {
            axios
             .get("cinemas.json")
             .then((response) => (
                this.cinemas = response.data
             ));
        }
    },
    computed: {
        searchFilterFilms() {
            return this.films.filter((data) => {
            return data.titleSweden.toLowerCase().includes(this.searchinput.toLowerCase());
        });
        },
        searchFilterMovies() {
            return this.cinemas.filter((data) => {
            return data.name.toLowerCase().includes(this.searchinput.toLowerCase());
        });
        }
    }

}
</script>

<template>
    <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Filmer och Biografer" aria-label="Search" aria-describedby="search-addon" v-model="searchinput"/>
  <span class="input-group-text border-0" id="search-addon">
    <img id="search-icon" src="../assets/img/search.png">
  </span>
</div>
   <tr v-if="this.searchinput != ''"
    class="listdiv"
    v-for="data in searchFilterFilms"
    :key="data">
    <td>{{ data.titleSweden }}</td>
    </tr>
    <tr v-if="this.searchinput != ''"
    class="listdiv"
    v-for="data in searchFilterMovies"
    :key="data">
    <td>{{ data.name }}</td>
    </tr>
</template>

<style>

#search-icon {
    height: 25px;
}

</style>
