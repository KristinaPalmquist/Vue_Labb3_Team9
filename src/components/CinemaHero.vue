<script setup>
import axios from "axios";
import ReadMore from "./ReadMore.vue";
</script>

<template>
  <body>
    <div v-if="cinema">
      <div v-for="cinema in cinemas" :key="cinema" class="grid-container">
        <img class="heroImage" alt="Biografbild" :src="`${cinema.img}`" />
        <div class="cinemaName">
          <h1>{{ cinema.name }}</h1>
        </div>
        <div class="cinemaAbout">
          <p><ReadMore :bioNamn="cinema.name" /></p>
        </div>
        <div class="cinemaAdress">
          <h7>Adress</h7>
          <p>{{ cinema.Area }}</p>
          <p>{{ cinema.Street }}</p>
          <p>{{ cinema.Postal }}</p>
        </div>
        <div class="cinemaHours">
          <div id="cinemaHoursBox">
            <h7>Öppettider</h7>
            <p>Måndag: {{ cinema.openingHours.monday }}</p>
            <p>Tisdag: {{ cinema.openingHours.tuesday }}</p>
            <p>Onsdag: {{ cinema.openingHours.wednesday }}</p>
            <p>Torsdag: {{ cinema.openingHours.thursday }}</p>
            <p>Fredag: {{ cinema.openingHours.friday }}</p>
            <p>Lördag: {{ cinema.openingHours.saturday }}</p>
            <p>Söndag: {{ cinema.openingHours.sunday }}</p>
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
    axios.get("/cinemas.json").then((response) => {
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
.grid-container {
  width: 100%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: auto;
  grid-template-rows: min-content min-content min-content min-content;
  grid-template-areas:
    "cinemaName"
    "heroImage"
    "cinemaAbout"
    "cinemaHours"
    "cinemaAdress";
  grid-gap: 10px 10px;
}
.cinemaName {
  grid-area: cinemaName;
}
.heroImage {
  grid-area: heroImage;
  max-width: 48vw;
  max-height: 48vh;
  margin: 0 auto;
}

.cinemaAbout {
  grid-area: cinemaAbout;
  max-width: 75vw;
  margin: 0 auto;
}

.cinemaAdress {
  grid-area: cinemaAdress;
  margin-bottom: 15px;
}

.cinemaHours {
  grid-area: cinemaHours;
  max-width: max-content;
  margin: 0 auto;
}

#cinemaHoursBox {
  padding: 10px 30px;
  margin: 10px;
  border: 1px solid var(--yellow);
}

.cinemaHours p {
  padding: 0;
  margin: 0;
}

.cinemaAdress p {
  padding: 0;
  margin: 0;
}

@media screen and (min-width: 1000px) {
  .grid-container {
    width: 100%;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 10vw 50vw auto 10vw;
    grid-template-rows: min-content min-content min-content min-content;
    grid-template-areas:
      ". cinemaName cinemaName ."
      ". heroImage cinemaHours ."
      ". heroImage cinemaAdress ."
      ". cinemaAbout cinemaAbout .";
    grid-gap: 10px 10px;
  }

  .cinemaAbout {
    text-align: justify;
  }
}
</style>
