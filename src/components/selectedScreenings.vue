<script setup>
import axios from "axios";
import moment from "moment/min/moment-with-locales";
</script>

<template>
  <div
    class="cards-div"
    v-if="this.selectedMovies != ''"
    v-click-outside="onClickOutside"
  >
    <div
      class="close-btn-container"
      @click="this.selectedMovies = ''"
      v-if="this.selectedMovies != ''"
    >
      <i class="bi bi-x-lg close-btn"></i>
    </div>
    <!--film cards chosen film-->
    <div class="row">
      <div class="date-header">
        <h4 class="on-cinema">På bio</h4>
        <h4>{{ moment(dateProps).lang("sv").format("LL") }}</h4>
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
      //click outside config
      vcoConfig: {
        handler: this.handler,
        middleware: this.middleware,
        events: ["dblclick", "click"],
        // Note: The default value is true, but in case you want to activate / deactivate
        //       this directive dynamically use this attribute.
        isActive: true,
        // Note: The default value is true. See "Detecting Iframe Clicks" section
        //       to understand why this behaviour is behind a flag.
        detectIFrame: true,
        // Note: The default value is false. Sets the capture option for EventTarget addEventListener method.
        //       Could be useful if some event's handler calls stopPropagation method preventing event bubbling.
        capture: false,
      },
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
    this.onClickOutside();
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
    onClickOutside(event) {
      this.selectedMovies = "";
    },
    // skickar till IndividualMovie
    onClickTwo(titleId) {
      this.$router.replace("film/" + titleId);
      this.selectedMovies = "";
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
.card {
  margin: 0 auto;
  float: none;
}

.card img {
  height: 250px;
}
.cards-div {
  color: white;
  display: flex;
  flex-direction: column;
}
.filmcard {
  cursor: pointer;
  background-color: #121212 !important;
}
.card-title {
  font-size: medium;
}
.cards-div {
  box-shadow: 0px 0px 40px 6px var(--yellow-soft);
}
.date-header {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 15px;
}

/*close search cards btn */
.close-btn-container {
  display: flex;
  width: 100%;
  justify-content: end;
}
.close-btn {
  margin-top: 10px;
  margin-right: 25px;
  cursor: pointer;
}
</style>
