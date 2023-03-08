<template>
  <div>
    <!-- <HeroImg /> -->
  </div>
  <div class="feedbackBox">
    <img src="" alt="" />
    <!-- v-html directive used to insert welcome message-->
    <div v-html="WelcomeMsg" class="WelcomeMsg"></div>
    <div class="intro-text-container">
      <p class="intro-text">
        kan du beskriva dina upplevelser av denna app. Har du förslag på hur vi
        kan förbättra oss ytterligare? Saknar du något i appen? <br />
        Vi arbetar outtröttligt för att göra upplevelsen av att använda våra
        appar så bra som möjligt och dina idéer är viktiga!!<br />
        Betygsätt och dela dina idéer för att vi kan förbättra appen
        tillsammans.
      </p>
      <!-- Bootstrap Star icon is used to make clickable star icon for rating
      and v-for attribute is used to loop in star array index-->
      <div>
        <h6 class="FD-title">Betygsätt din upplevelse av appen</h6>

        <div class="star-rating">
          <span
            v-for="(star, index) in stars"
            :key="index"
            @click="SelectStar(index)"
            ><i
              class="bi bi-star-fill"
              style="margin: 15px"
              :class="{ selected: star.selected }"
            ></i>
          </span>
        </div>
        <div class="FD-btn">
          <button @click="showFeedback = !showFeedback">
            Klicka här för att lämna feedback
          </button>
        </div>
        <!-- Collapse method used to show the form when the button is clicked -->
        <div v-if="showFeedback">
          <form class="collapse-box">
            <FeedbackForm />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeedbackForm from "./FeedbackForm.vue";
//import HeroImg from "../components/HeroImg.vue";
export default {
  name: "RatingFeedback",
  components: { FeedbackForm },
  data() {
    return {
      WelcomeMsg: `<h5>Välkommen Till CINEMAP!</h5><Br>
        <h6>Vi behöver eran feedBack för att bli bättre !</h6>`,
      stars: [
        { selected: false },
        { selected: false },
        { selected: false },
        { selected: false },
        { selected: false },
      ],

      showFeedback: false,
    };
  },
  methods: {
    SelectStar(index) {
      for (let i = 0; i <= index; i++) {
        this.stars[i].selected = true;
      }
      for (let i = index + 1; i < 5; i++) {
        this.stars[i].selected = false;
      }
    },
  },
};
</script>

<style scoped>
.feedbackBox {
  margin: 0px 2rem 2rem 2rem;
  justify-content: center;
  align-items: center;
}
.intro-text-container {
  align-items: center;
}
.intro-text {
  text-align: justify;
  font-size: medium;
}
.collapse-box {
  justify-content: center;
  margin: 10px;
}
.selected {
  color: gold;
}
.FD-btn {
  margin-top: 15px;
}
</style>
