<script setup>
import HomeCategory from "../components/HomeCategory.vue";
import screeningsToday from "../components/screeningsToday.vue";
import FeedbackNavigator from "../components/FeedbackNavigator.vue";
</script>
<template>
  <screeningsToday />
  <div class="home-text-box">
    <h5 class="home-title">
      Cinemap <br />
      Bästa ställe för filmälskare
    </h5>
    <p class="home-text">
      Vi har många filmer, från de senaste släppen till tidlösa klassiker som
      visas på fem biografer i stockolm så att alla kan hitta något de gillar.
      Det är enkelt att bläddra bland filmerna, filtrera dem och titta på
      trailers för att hjälpa dig välja rätt.<br />
      Vi tillhandahåller också detaljerad information om varje film och biograf
      såsom betyg, recensioner och skådespelare. Vi kommer att komma med ännu
      mer spännande innehåll i framtiden. Njut av det bästa av filmer, allt på
      ett ställe!
    </p>
  </div>
  <HomeCategory />
  <FeedbackNavigator />
</template>
<script></script>
<style scoped>
.home-text-box {
  justify-content: center;
  align-items: center;
}
.home-title {
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
}
.home-text {
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 30px;
  padding: 10px;
}
</style>
