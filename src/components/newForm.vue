<template>
  <div class="feedbackBox">
    <img src="" alt="" />
    <!-- v-html used to inser welcome message-->
    <div v-html="WelcomeMsg" class="WelcomeMsg"></div>
    <div class="intro-text">
      <p>
        kan du beskriva dina upplevelser av denna app. <br />
        Har du förslag på hur vi kan förbättra appen?<br />
        Saknar du något i appen? <br />
        Dina idéer är viktiga för att vi kan förbättra appen tillsammans.
      </p>
      <!-- used two buttons to show feedback form and rating -->
      <div>
        <h6 class="FD-title">Feedback Form</h6>
        <div><button @click="toggleRating()">Rating</button></div>
        <div><button @click="toggleFeedback()">Feedback</button></div>
        <div v-if="showFeedback">
          <!-- <h6 class="FD-title">Feedback Form</h6> -->
          <form class="collapse-box">
            <FeedbackPage />
          </form>
        </div>
        <div v-if="showRating">
          <h6>Rating Form</h6>
          <form>
            <!-- will add rating here -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeedbackPage from "../components/FeedbackPage.vue";
export default {
  name: "RatingFeedback",
  components: { FeedbackPage },
  data() {
    return {
      WelcomeMsg: `<h5>Välkommen Till CINEMAP!</h5><Br>
          <h6>Vi behöver eran feedBack för att bli bättre</h6>`,
      showFeedback: false,
      showRating: false,
    };
  },
  methods: {
    toggleFeedback() {
      this.showFeedback = !this.showFeedback;
      if (this.showFeedback && this.showRating) {
        this.showRating = false;
      }
    },
    toggleRating() {
      this.showRating = !this.showRating;
      if (this.showRating && this.showFeedback) {
        this.showFeedback = false;
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
.intro-text {
  align-items: center;
}
.collapse-box {
  justify-content: center;
  margin: 10px;
}
</style>
