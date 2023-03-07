<template>
  <div class="main">
    <img src="" alt="" />
    <div v-html="WelcomeMsg" class="WelcomeMsg"></div>
    <div class="">
      <p>
        kan du beskriva dina upplevelser av denna app. <br />
        Har du förslag på hur vi kan förbättra appen?<br />
        Saknar du något i appen? <br />
        Dina idéer är viktiga så att vi tillsammans kan förbättra appen.
      </p>

      <div>
        <p>
          <button
            class="btn btn-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          >
            Ge feedback
          </button>
        </p>
        <div style="min-height: 400px">
          <div class="collapse collapse-horizontal" id="collapseWidthExample">
            <div class="card card-body" style="width: 390px">
              <FeedbackPage />
            </div>
          </div>
        </div>
      </div>
    </div>
    <DisplayChart />
  </div>
</template>

<script>
import FeedbackPage from "../components/FeedbackPage.vue";
import DisplayChart from "../components/DisplayChart.vue";
export default {
  name: "FeedbackView",
  components: { FeedbackPage, DisplayChart },
  data() {
    return {
      WelcomeMsg:
        "<h5>Välkommen Till CINEMAP!</h5><Br><h6>Vi behöver eran feedBack för att bli bättre</h6>",
    };
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
  background-color: rgb(16, 14, 14);
  color: white;
}
</style>
