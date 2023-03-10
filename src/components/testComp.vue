<script setup>
import axios from "axios";
import moment from "moment/min/moment-with-locales";
</script>

<template>
  <div class="cards-div" v-if="this.dateProps != undefined">
    <div class="close-btn-container" @click="dateProps = undefined">
      <i class="bi bi-x-lg close-btn"></i>
    </div>
    <!--film cards chosen film-->
    <div class="row">
      <div class="date-header">
        <h1>
          {{ moment(dateProps).lang("sv").format("LL") }}
        </h1>
      </div>
      <div
        class="card mb-1 col-md-4 filmcard text-white"
        style="width: 12rem"
        v-for="movie in selectedMovies"
        @click="onClickTwo(movie.titleId)"
      >
        <img :src="movie.img" class="card-img-top" :alt="movie.titleEnglish" />
        <div class="card-body">
          <h1 class="card-title">{{ movie.titleSweden }}</h1>
          <p class="card-text">IMDB: {{ movie.imdb }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenDate: null,
      filmIds: "",
      chosenScreenings: [],
      selectedMovies: null,
    };
  },
  props: {
    dateProps: {
      type: Date,
      require: true,
    },
  },
  watch: {
    dateProps(value) {
      this.getChosenScreenings(value);
      this.getChosenMovies(value);
    },
  },
  created() {
    this.getChosenMovies();
  },
  methods: {
    getChosenScreenings(value) {
      axios
        .get("screenings.json")
        .then(
          (response) =>
            (this.chosenScreenings =
              response.data[moment(value).dayOfYear()].Victoria)
        );
    },
    // skickar till IndividualMovie
    onClickTwo(titleId) {
      this.$router.replace("film/" + titleId);
    },
    getChosenMovies() {
      axios.get("movies.json").then((response) => {
        this.selectedMovies = response.data;
        this.selectedMovies = this.selectedMovies.filter(
          (selectedMovie) =>
            this.chosenScreenings.indexOf(selectedMovie.id) > -1
        );
      });
    },
  },
};
</script>

<style scoped>
.cards-div {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.filmcard {
  margin: 15px;
  cursor: pointer;
  background-color: #121212 !important;
}
.card-title {
  font-size: medium;
}

.date-header {
  text-align: center;
  margin-top: 20px;
}

/*close search cards btn */
.close-btn-container {
  display: flex;
  width: 100%;
  justify-content: end;
  background-color: #121212;
}
.close-btn {
  margin-top: 10px;
  margin-right: 25px;
  cursor: pointer;
}
</style>
