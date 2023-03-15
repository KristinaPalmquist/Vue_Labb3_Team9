<template>
  <div class="main">
    <HeroImg />
    <RatingFeedback />
    <h5>Vad får du ut av den här appen?</h5>
    <div class="discription-box">
      <div class="card-First">
        <h6>Alt om filmer och bigrafer</h6>
        <p>
          Du kan se nya och mest populär filmer, se på vilket datum och tid de
          visas, och i vilken biograf som visas på.
        </p>
        <p>
          Vi tillhandahåller allt information om film och biografer på ett
          ställe så att du enkelt kan få allt du behöver utan att söka på olika
          hemsidor.
        </p>
      </div>
      <div class="card-second">
        <img src="src/assets/img/film.0.jpg" class="Img-box" alt="cinema" />
      </div>
      <div class="card-third">
        <img src="../assets/img/cinema2.jpg" class="Img-box" alt="cinema" />
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

.discription-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin: 20px auto;
  padding: 30px;
  justify-content: center;
  align-items: center;
}
.card-First:hover {
  color: #75693e;
}
np.card-First {
  width: 370px;
  height: 300px;
  margin: 10px;
  padding: 20px;
  text-align: center;
  justify-content: center;
  border: solid 1px #f5c65067;
}
.card-second {
  width: 370px;
  height: 300px;
  margin: 10px;
  justify-content: center;
  border: solid 1px #f5c65067;
}
.card-third {
  width: 370px;
  height: 300px;
  margin: 10px;
  justify-content: center;
  border: solid 1px #f5c65067;
  border-radius: 10px;
  object-fit: contain;
}
.card-fourth {
  width: 370px;
  height: 300px;
  margin: 10px;
  border-radius: 10px;
  justify-content: center;
  border: solid 1px #f5c65067;
  padding: 20px;
}
.Img-box {
  width: 368px;
  height: 298px;
  border-radius: 5px;
}
</style>
