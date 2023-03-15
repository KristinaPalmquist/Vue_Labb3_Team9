<template>
  <div class="main">
    <HeroImg />
    <RatingFeedback />
    <h5>Vad får du ut av den här appen?</h5>
    <div class="discription-box">
      <div class="card-First">
        <h6>Allt om filmer och biografer</h6>
        <p>
          Ta reda på vilka nya och populära filmer som visas på bio nu. Datum,
          tid och även vilka biografer som de visas på!
          <br />
          Vi tillhandahåller all information om filmer och biografer på ett
          ställe så att du enkelt kan söka och hitta det som passar dig.
        </p>
      </div>

      <img src="src/assets/img/film.0.jpg" class="card-second" alt="cinema" />

      <img src="../assets/img/cinema2.jpg" class="card-third" alt="cinema" />

      <div class="card-fourth" style="width: 370px">
        <h6>Är den här appen gratis?</h6>
        <p>
          Cinemap är en gratis appguide, som är utformad för att hjälpa dig
          hitta var och när du kan se dina favoritfilmer på bio.<br />
          Vår app är helt kostnadsfri och vi ser fram emot att erbjuda fler
          funktioner i framtiden!
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
  width: auto;
  height: auto;
  margin: 20px;
  padding: 30px;
  justify-content: center;
  align-items: center;
}
.card-First {
  width: 360px;
  min-height: 300px;
  margin: 10px;
  padding: 20px;
  text-align: center;
  justify-content: center;
  border: solid 1px #f5c65067;
  border-radius: 15px;
}
.card-second {
  width: 360px;
  min-height: 300px;
  margin: 10px;
  justify-content: center;
  border: solid 1px #f5c65067;
  border-radius: 15px;
}
.card-third {
  width: 360px;
  min-height: 300px;
  margin: 10px;
  justify-content: center;
  border: solid 1px #f5c65067;
  border-radius: 15px;
  object-fit: contain;
}
.card-fourth {
  width: 360px;
  min-height: 300px;
  margin: 10px;
  border-radius: 15px;
  justify-content: center;
  border: solid 1px #f5c65067;
  padding: 20px;
}

</style>
