<template>
  <div class="main">
    <RatingFeedback />

    <DisplayChart />
  </div>
</template>

<script>
import RatingFeedback from "../components/RatingFeedback.vue";
//import newForm from "../components/newForm.vue";
import DisplayChart from "../components/DisplayChart.vue";
export default {
  name: "FeedbackView",
  components: { RatingFeedback, DisplayChart },
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
