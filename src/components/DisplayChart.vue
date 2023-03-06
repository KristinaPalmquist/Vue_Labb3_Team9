<template>
  <div>
    <button class="Ratingbtn" @click="$emit('ShowRating')">
      See Users rating
    </button>
    <button class="visitorsbtn" @click="$emit('Showvisitosrs')">
      See amount of visitor
    </button>
    <div v-if="chartType === 'rating'">
      <ChartForRating />
    </div>
    <div v-if="chartType === 'visitors'">
      <ChartForVisitor />
    </div>
    <div v-if="showModalFlag">
      <div class="modal">
        <div class="modal-content">
          <span class="close" @click="hideModal">&times;</span>
          <div v-if="chartType === 'rating'">
            <ChartForRating />
          </div>
          <div v-if="chartType === 'visitors'">
            <ChartForVisitor />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartForRating from "./ChartForRating.vue";
import ChartForVisitor from "./ChartForVisitor.vue";

export default {
  name: "ChartModal",
  components: {
    ChartForRating,
    ChartForVisitor,
  },
  data() {
    return {
      showModalFlag: false,
      chartType: null,
    };
  },
  methods: {
    hideModal() {
      this.showModalFlag = false;
      this.chartType = null;
    },
  },
  mounted() {
    this.$on("ShowRating", () => {
      this.chartType = "rating";
      this.showModalFlag = true;
    });
    this.$on("Showvisitosrs", () => {
      this.chartType = "visitors";
      this.showModalFlag = true;
    });
  },
};
</script>

<style>
.modal {
  display: block;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  display: block;
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
