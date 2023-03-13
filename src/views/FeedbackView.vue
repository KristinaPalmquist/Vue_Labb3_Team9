<template>
  <div class="main">
    <HeroImg />
    <RatingFeedback />
    <h5>Vad får du ut av den här appen?</h5>
    <div class="discription-box">
      <div class="card-First">
        <h6>Introducerar nya filmer.</h6>
        <p>
          Du kan få allt information om nya i filmer. Du kan också se på vilket
          datum och tid de visas, och i vilken biograf som visas på.
        </p>
      </div>
      <div class="card-second">
        <img src="src/assets/img/film.0.jpg" class="card-img" alt="cinema" />
      </div>
      <div class="card-third">
        <img src="../assets/img/cinema2.jpg" class="card-img" alt="..." />
      </div>
      <div class="card-fourth" style="width: 370px">
        <h6>Är den här appen gratis?</h6>
        <p>
          Cenemapp är en gratis appguide, samlas allt information som är
          utformad för att hjälpa dig hitta var du kan se dina favoritfilmer.<br />
          Våran app är helt kostnadsfritt. Vi kommer att lägga till andra
          funktioner i framtiden.
        </p>
      </div>
    </div>
    <DisplayChart />
  </div>
</template>
<script>
import RatingFeedback from "../components/RatingFeedback.vue";
import DisplayChart from "../components/DisplayChart.vue";
import HeroImg from "../components/HeroImg.vue";
export default {
  name: "FeedbackView",
  components: { RatingFeedback, DisplayChart, HeroImg },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
/*
body {
  /* width: auto;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
   overflow-x: hidden; */
}
.main {
  background-color: rgb(22, 21, 21);
  color: white;
}
h5 {
  display: flex;
  flex-direction: row;
}

h5:before,
h5:after {
  content: "";
  flex: 1 1;
  border-bottom: 2px solid #f5c65067;
  margin: 15px;
}
.discription-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin: 20px;
  padding: 30px;
  justify-content: center;
  align-items: center;
}
.card-First {
  width: 370px;
  height: 300px;
  margin: 10px;
  padding: 20px;
  text-align: center;
  justify-content: center;
  border: solid 1px  #f5c65067;
}
.card-second {
  width: 370px;
  height: 300px;
  margin: 10px;
  justify-content: center;
  border: solid 1px  #f5c65067;
}
.card-third {
  width: 370px;
  height: 300px;
  margin: 10px;
  justify-content: center;
  border: solid 1px #f5c65067;
}
.card-fourth {
  width: 370px;
  height: 300px;
  margin: 10px;
  justify-content: center;
  border: solid 1px #f5c65067;
  padding: 20px;
}
</style>
