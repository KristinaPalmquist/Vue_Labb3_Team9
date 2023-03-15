<template>
  <div class="feedback-link">
    <div class="text-section">
      <h7 class="">Dina idéer är viktiga för oss.</h7>
      <p class="">
        Betygsätt vår app och dela din åsikt för att bli en del av vår
        filmälskande community som alltid hjälper oss för att förbättra appen.
      </p>
    </div>

    <button id="toCinema" class="btn-dark" @click="goToAboutPage">
      Gå till feedback
    </button>
  </div>
</template>
<script>
export default {
  name: "FeedbackNavigator",
  data() {
    return {};
  },
  methods: {
    goToAboutPage() {
      this.$router.push({ name: "om" });
    },
  },
};
</script>
<style scoped>
.feedback-link {
  color: white;
  border: solid 1px #f5c65067;
  border-radius: 5px;
  height: auto;
  padding: 10px;
  justify-self: center;
  align-items: center;
  margin: 1.9rem;
  justify-content: center;
  background-color: rgb(36, 36, 36, 0.5);
}
.btn-dark {
  max-width: 300px;
  min-height: 25px;
}
.text-section {
  margin-top: 10px;
  justify-content: center;
  text-align: center;
}
</style>
