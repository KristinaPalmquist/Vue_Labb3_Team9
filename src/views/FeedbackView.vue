<script setup></script>

<template>
  <div class="color">
    <FeedbackPage />
  </div>
  <div class="Review-box">
    <div class="Review-text">
      <h4 class="Review-header">Är du intreserad av att se om biograferna?</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br />
        Omnis unde laboriosam expedita error fuga recusandae id, <br />
        voluptate quaerat! Eum, sapiente laborum!
      </p>
      <div class="review-btn">
        <h5>Användare recension</h5>
        <button class="btn" @click="showModal('rating')">Klicka här</button>
      </div>
      <div class="review-btn">
        <h5>Antal besökare per år</h5>
        <button class="btn" @click="showModal('visitors')">Klicka här</button>
      </div>
      <ChartModal :isModalVisible="isModalVisible" @hideModal="hideModal">
        <component :is="componentToShow" />
      </ChartModal>
    </div>
    <img src="../assets/img/review.jpeg" alt="" />
  </div>
</template>

<script>
import FeedbackPage from "../components/FeedbackPage.vue";
import ChartModal from "../components/ChartModal.vue";
import ChartApp from "../components/ChartApp.vue";
import ChartComp from "../components/ChartComp.vue";
export default {
  name: "FeedbackView",
  components: { FeedbackPage, ChartModal, ChartApp, ChartComp },
  data() {
    return {
      isModalVisible: false,
      componentToShow: null,
    };
  },
  methods: {
    showModal(component) {
      this.componentToShow = component === "rating" ? "ChartApp" : "ChartComp";
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
      this.componentToShow = null;
    },
  },
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
.Review-box {
  background-color: black;
  display: flex;
  color: white;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  width: auto;
}
.Review-text {
  width: auto;
  height: 370px;
  margin: 20px;
  justify-content: space-around;
  align-items: center;
  text-align: left;
  padding: 20px;
  flex-direction: row;
}
img {
  flex-direction: row;
  width: 370px;
  height: 350px;
  margin: 15px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.review-btn {
  display: flex;
  flex-direction: row;
  margin: 10px 10px 10px 0px;
}
.btn {
  border: none;
  background-color: rgb(114, 109, 109);
  color: white;
  margin-left: 10px;
}
</style>
