<template>
  <div class="feedbackBox">
    <!-- <img src="" alt="" /> -->
    <!-- v-html directive used to insert welcome message-->
    <div v-html="WelcomeMsg" class="WelcomeMsg"></div>
    <div class="intro-text-container">
      <p class="intro-text">
        Kan du beskriva dina upplevelser av denna app? Har du förslag på hur vi
        kan förbättra oss ytterligare? Saknar du något i appen? <br />
        Vi arbetar outtröttligt för att göra upplevelsen av vår app så bra som
        möjligt och dina idéer är viktiga för oss!<br />
        Betygsätt och dela dina idéer så att vi kan förbättra appen tillsammans.
      </p>
      <!-- Bootstrap Star icon is used to make clickable star icon for rating
      and v-for attribute is used to loop in star array index-->
      <div class="Rating-feedback-box">
        <div class="Rating-feedback-box">
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
            <div>
              <button class="btn-dark" @click="submitRating">Skicka</button>
            </div>
            <div class="popover" :class="{ show: showPopover }">
              Betyget har lämnats!
            </div>
            <div>
              <button class="btn-light" @click="showFeedback = !showFeedback">
                Lämna feedback
              </button>
            </div>
          </div>
          <!-- Collapse method used to show the form when the button is clicked -->
          <div v-if="showFeedback">
            <form class="collapse-box">
              <button class="close-btn" @click="showFeedback = false">X</button>
              <FeedbackForm />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeedbackForm from "./FeedbackForm.vue";
export default {
  name: "RatingFeedback",
  components: { FeedbackForm },
  data() {
    return {
      WelcomeMsg: `<h4>Välkommen till Cinemap</h4><Br>
        <h6>Det bästa stället för filmälskare!</h6>`,
      /*WelcomeMsg: `<h4>Välkommen till Cinemap</h4><Br>
        <h6>Det bästa stället för filmälskare!</h6>`,*/
      stars: [
        { selected: false },
        { selected: false },
        { selected: false },
        { selected: false },
        { selected: false },
      ],
      showPopover: false,
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
    submitRating() {
      // Create a copy of the stars array and reset the selected property to false
      const starsCopy = [...this.stars];
      starsCopy.forEach((star) => {
        star.selected = false;
      });
      // Show the popover
      this.showPopover = true;

      //  It Waits for 2 seconds, then hide the popover and reset the stars
      setTimeout(() => {
        this.showPopover = false;
        this.stars = starsCopy;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.WelcomeMsg {
  margin-top: 20px;
}
.feedbackBox {
  padding: 0px 2rem 2rem 2rem;
  justify-content: center;
  align-items: center;
}
.intro-text-container {
  align-items: center;
}
.intro-text {
  text-align: center;
  font-size: medium;
  padding: 10px;
}
.collapse-box {
  justify-content: center;
  margin: 10px;
}
.selected {
  color: gold;
}
.FD-btn {
  margin: 15px;
}
.star-rating {
  padding: 15px;
}
.btn-dark {
  margin-top: 20px;
}
.popover {
  display: none;
  position: absolute;
}
.show {
  display: block;
  left: 55%;
  top: 123%;
  background-color: #121212;
  border: solid 1px gold;
  color: white;
  padding: 8px;
  font-size: medium;
}
.close-btn {
  position: relative;
  top: 40px;
  left: 100px;
  background-color: #121212;
  color: white;
}
@media screen and (max-width: 400px) {
  .show {
    display: block;
    left: 30%;
    top: 106%;
    background-color: #121212;
    border: solid 1px gray;
    color: white;
    padding: 8px;
    font-size: medium;
    width: 200px;
  }
  .collapse-box {
    justify-content: center;
    margin-left: 0px;
    margin-right: 5px;
    padding: 10px;
  }
}
</style>
