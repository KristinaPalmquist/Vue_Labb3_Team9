<template>
  <div class="Review-box">
    <div class="Review-text">
      <h5 class="Review-header">Facta om biograferna</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br />
        Omnis unde laboriosam expedita error fuga recusandae id, <br />
        voluptate quaerat! Eum, sapiente laborum!
      </p>
      <div class="review-btn">
        <h6>Användare recension</h6>
        <button class="btn" @click="showModal('rating')">Klicka här</button>
      </div>
      <div class="review-btn">
        <h6>Antal besökare per år</h6>
        <button class="btn" @click="showModal('visitors')">Klicka här</button>
      </div>
      <ChartModal :isModalVisible="isModalVisible" @hideModal="hideModal">
        <component :is="componentToShow" />
      </ChartModal>
    </div>
    <!-- <img src="../assets/img/review.jpeg" alt="" /> -->
  </div>
</template>

<script>
import ChartModal from "../components/ChartModal.vue";
import ChartApp from "../components/ChartApp.vue";
import ChartComp from "../components/ChartComp.vue";
export default {
  name: "DisplayChart",
  components: { ChartModal, ChartApp, ChartComp },
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
  display: flex;
  color: white;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  width: auto;
}
.Review-text {
  width: 370px;
  height: auto;
  margin: 10px;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 20px;
}

.review-btn {
  display: flex;
  flex-direction: row;
  margin: 10px 10px 10px 0px;
}
.btn {
  width: 100px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border: none;
  text-align: center;
  background-color: rgb(114, 109, 109);
  color: white;
  padding-bottom: 15px;
  margin-left: 10px;
}
</style>
