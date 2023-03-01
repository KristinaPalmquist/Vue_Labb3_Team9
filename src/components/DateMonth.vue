<script setup>
import moment from "moment/min/moment-with-locales";
// import se from "moment/locale/se.js";
import axios from "axios";
</script>

<template>
  <p>Hej! Idag är det {{ idag }}</p>
  <p>{{ today }}</p>
  <div v-for="cinema in cinemas" :key="cinema.id">
    {{ cinema.id }}
    {{ cinema.name }}
    {{ cinema.openingHours }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: moment().format("YYYY-MM-DD"),
      idag: moment().format("dddd MMMM YYYY"),
      cinemas: [],
    };
  },
  mounted() {
    axios.get("../../public/cinemas.json").then((response) => {
      this.cinemas = response.data;
    }),
      console.log(this.cinemas);
  },
};
</script>

<style scoped></style>
