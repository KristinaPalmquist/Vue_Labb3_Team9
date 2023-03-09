<template>
  <div class="main">
    <HeroImg />

    <RatingFeedback />
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
body {
  width: auto;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
.main {
  background-color: rgb(22, 21, 21);
  color: white;
}
</style>
