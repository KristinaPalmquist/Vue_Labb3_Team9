div<script setup>
import axios from "axios";
import TheaterCard from "../components/TheaterCard.vue";
</script>

<template>
  <div class="cinema">
    <h1>Cinema</h1>
    <h2>{{ $route.params.id }}</h2>
    <div v-for="cinema in cinemas" :key="cinema.id">
        <input
        type="button"
        @click="$event => onClick(cinema.id)"
        :value="`${cinema.name}`"
    />
    </div>
  </div>
  <TheaterCard />
</template>

<script>
export default {
    data() {
        return {
            cinemas: [],
            id: Number,
        };
    },
    created() {
        this.fetchCinemas();
    },
    methods: {
        fetchCinemas() {
            axios.get("cinemas.json").then((cinemas) => (this.cinemas = cinemas.data));
        },
        onClick(id) {
            this.$router.replace("biograf/" + id)
        },
    },
};
</script>

<style scoped></style>
