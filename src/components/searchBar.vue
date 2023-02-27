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
                this.films = response.data,
                console.log(response.data)
             ));
        },
        cinemaSearch() {
            axios
             .get("cinemas.json")
             .then((response) => (
                this.cinemas = response.data,
                console.log(response.data)
             ));
        }
    },
    computed: {
        searchFilter() {
            return this.films.filter((data) => {
            return data.titleSweden.toLowerCase().includes(this.searchinput.toLowerCase());
        });
        }
    }

}
</script>

<template>
    <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" v-model="searchinput"/>
  <span class="input-group-text border-0" id="search-addon">
    <img id="search-icon" src="../assets/img/search.png">
  </span>
</div>
<tr v-if="this.searchinput != ''"
    class="listdiv"
    v-for="data in searchFilter"
    :key="data">
    <td>{{ data.titleSweden }}</td>
    </tr>
</template>

<style>

#search-icon {
    height: 25px;
}

</style>
