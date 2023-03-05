<script setup>
import axios from "axios";
</script>

<template>
  <body>
    <div v-if="cinema">
      <div v-for="cinema in cinemas" :key="cinema">
        <img class="heroImage" alt="Biografbild" :src="`${cinema.img}`" />
        <div class="cinemaContent">
          <div class="cinemaName">
            <h1>{{ cinema.name }}</h1>
            <br />
          </div>
          <div class="cinemaAbout">
            <p>{{ cinema.About.sv }}</p>
          </div>
          <div class="cinemaAdress">
            <p>{{ cinema.Adress }}</p>
          </div>
          <div class="cinemaHours">
            <p>Hela natten?</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  computed: {
    cinemaName() {
      return this.$route.params.id;
    },
  },
  data() {
    return {
      cinemas: [],
      cinema: [],
    };
  },
  created() {
    axios.get("../../public/cinemas.json").then((response) => {
      this.cinemas = response.data;
      this.cinemas = this.cinemas.filter((cinema) => {
        return cinema.nameId === this.cinemaName;
      });
      if (this.cinemas.length > 0) {
        this.cinema = this.cinemas[0];
      }
    });
  },
};
</script>

<style scoped>
.heroImage {
  height: 100%;
  max-height: 50vh;
}

.cinemaContent .cinemaName h1 {
  font-size: 6rem;
}

.cinemaContent .cinemaAbout p {
  font-size: 2rem;
  font-style: italic;
}

.cinemaContent .cinemaAdress p {
  font-size: 1rem;
  color: red;
}

.cinemaContent .cinemaHours p {
  font-size: 1rem;
  font-weight: bold;
}
</style>
