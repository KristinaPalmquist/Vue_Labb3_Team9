<script setup>
import axios from "axios";
</script>

<template>
  <body>
    <div v-if="cinema">
      <div v-for="cinema in cinemas" :key="cinema" class="grid-container">
        <img class="heroImage" alt="Biografbild" :src="`${cinema.img}`" />
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

.grid-container {
    display: grid;
    justify-content: center;
}
.cinemaName {
    grid-column: 2 / span 5;
    grid-row: 1 / span 2;
}
.heroImage {
    grid-column: 2 / span 5;
    grid-row: 2 / span 4;
    max-width: 48vw;
    max-height: 48vh;
}

.cinemaAbout {
    grid-column: 4;
    grid-row: 5;
}

.cinemaAdress {
    grid-column: 2 / span 5;
    grid-row: 6;
}

.cinemaHours {
    grid-column: 2 / span 5;
    grid-row: 7;
}
/*.grid-container {
    display: grid;
    justify-content: center;
}

.cinemaName {
    grid-column-start: 2;
    grid-column-end: five;
    grid-row-start: row1-start;
    grid-row-end: 3;
}
.heroImage {
    max-height: 80vh;
    grid-column-start: 2;
    grid-column-end: five;
    grid-row-start: row2-start;
    grid-row-end: 5;
}

.cinemaAbout {
    grid-column-start: 2;
    grid-column-end: five;
    grid-row-start: row5-start;
    grid-row-end: 6;
}

.cinemaAdress {
    grid-column-start: 2;
    grid-column-end: five;
    grid-row-start: row5-start;
    grid-row-end: 6;
}
.cinemaHours {
    grid-column-start: 2;
    grid-column-end: five;
    grid-row-start: row5-start;
    grid-row-end: 6;
}*/


/*.grid-container {
    display: grid;
    padding: 20px;
    grid-template-columns: 100%;
    grid-template-rows: min-content min-content min-content min-content;
    grid-template-areas:
    "cinemaName"
    "heroImage"
    "cinemaAbout"

}

.grid-item {

}

.heroImage {
   grid-area:"heroImage";
    max-width: 80vw;
    max-height: 80vh;
}

.cinemaName {
  grid-area: cinemaName;
  padding: 20px;
}

.cinemaAbout {
    grid-area: cinemaAbout;
    padding: 20px;

}

.cinemaAdress {

}

.cinemaHours {

}*/
</style>
