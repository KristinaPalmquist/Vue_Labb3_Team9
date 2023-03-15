<template>
  <div><h5 class="review-tittle">Utforska mer</h5></div>
  <div class="Review-box">
    <div class="Review-text">
      <h6 class="Review-header">Fakta om biografer</h6>
      <p>
        Det finns gott om biosalonger i Stockholm. De största och mest kända
        biograferena är Filmstaden Sergel, Victoria och Filmstaden Söder. Den
        här appen inkluderar de fem mest kända biograferna i Stockholm.
      </p>
      <button id="toCinema" class="btn-dark" @click="goToCinemaPage">
        Se biografer
      </button>
    </div>
    <div class="ImageSlide">
      <slide>
        <CarouselView :images="images" />
      </slide>
      <button id="toFilm" class="btn-dark" @click="goToFilmPage">
        Se filmer
      </button>
    </div>
    <div class="users-review">
      <p>
        Vi har samlat information om antalet besökare per år på fem biografer,
        samt det genomsnittliga användarbetyget för varje biograf. Klicka på
        knapparna om du är intresserad!
      </p>
      <div class="review-btn-box">
        <button id="review-btn" class="btn-dark" @click="showModal('rating')">
          Användarrecension
        </button>
        <button
          id="visitors-btn"
          class="btn-dark"
          @click="showModal('visitors')"
        >
          Antal besökare
        </button>
      </div>

      <ChartModal :isModalVisible="isModalVisible" @hideModal="hideModal">
        <component :is="componentToShow" />
      </ChartModal>
    </div>
  </div>
</template>

<script>
import ChartModal from "../components/ChartModal.vue";
import ChartApp from "../components/ChartApp.vue";
import ChartComp from "../components/ChartComp.vue";
import CarouselView from "../components/CarouselView.vue";
export default {
  name: "DisplayChart",
  components: { ChartModal, ChartApp, ChartComp, CarouselView },
  data() {
    return {
      isModalVisible: false,
      componentToShow: null,
      images: [
        "src/assets/img/avatar.jpeg",
        "src/assets/img/blackpanther.jpg",
        "src/assets/img/movie-3.jpg",
        "src/assets/img/movie-4.jpg",
        "src/assets/img/movie-5.jpg",
        "src/assets/img/movie-6.jpg",
      ],
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
    goToFilmPage() {
      this.$router.push({ name: "film" });
    },
    goToCinemaPage() {
      this.$router.push({ name: "biograf" });
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
  width: 100%;
  height: auto;
  justify-content: center;
}

.Review-text {
  width: 370px;
  min-height: 250px;
  margin: 10px;
  background-color: rgb(37, 36, 36);
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  border: solid 1px rgb(136, 124, 53);
  border-radius: 15px;
}
.ImageSlide {
  background-image: url("/src/assets/img/cinema view.1.jpg");
  object-fit: cover;
  background-repeat: no-repeat;
  width: 370px;
  margin-top: 10px;
  height: 250px;
  border: solid 1px rgb(136, 124, 53);
  border-radius: 15px;
}
.users-review {
  width: 370px;
  margin: 10px;
  padding: 8px;
  min-height: 250px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(37, 36, 36);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: solid 1px rgb(136, 124, 53);
  border-radius: 15px;
}
.review-btn-box {
  display: flex;
  flex-direction: row;
  margin: 5px;
  padding: 2px;
}
#review-btn {
  font-size: small;
  min-width: 130px;
  height: 40px;
  margin-right: 2px;
}
#visitors-btn {
  font-size: small;
  min-width: 130px;
  height: 40px;
  margin-left: 2px;
}
#toFilm {
  justify-content: end;
  margin: 15%;
  border: solid 1px #f5c65067;
}

#toCinema {
  margin-top: 0px;
  border: solid 1px #f5c65067;
}
</style>
