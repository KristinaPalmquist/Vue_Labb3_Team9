<script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { RouterLink, RouterView } from "vue-router";
const date = ref();
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">CINEMAP</RouterLink>
      <VueDatePicker
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
      <VueDatePicker
        v-model="date"
        class="datePickerDesktop datePicker"
      ></VueDatePicker>
    </div>
  </nav>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      date: "",
    };
  },
};
</script>

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
</style>
