<template>
  <div><h5 class="review-tittle">Utforska mer</h5></div>
  <div class="Review-box">
    <div class="Review-text">
      <h6 class="Review-header">Fakta om biografer</h6>
      <p>
        Det finns gott om biosalonger i Stockholm och de största och mest kända
        biografer i Stockholm är Filmstaden Sergel, Victoria och Filmstaden
        Söder på Södermalm. I den här appen inkluderas fem mest kända biografer
        i stockholm.
      </p>
      <button id="toCinema" class="btn-dark" @click="goToCinemaPage">
        Se biografer
      </button>
    </div>
    <div class="ImageSlide">
      <slide>
        <CarouselView :images="images" />
      </slide>
      <div>
        <button id="toFilm" class="btn-dark" @click="goToFilmPage">
          Se filmer
        </button>
      </div>
    </div>
    <div class="users-review">
      <p>
        vi har samlat information om antalet besökare på fem biografer per år,
        samt det genomsnittliga användarbetyget för varje biograf. Klicka på
        knapparna om du är intresserad
      </p>
      <div class="review-btn-box">
        <button id="review-btn" class="btn-dark" @click="showModal('rating')">
          Användarrecension
        </button>
        <button id="review-btn" class="btn-dark" @click="showModal('visitors')">
          Antal besökare per år
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
  height: 250px;
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
}
.ImageSlide {
  background-image: url("src/assets/img/cinema view.1.jpg");
  object-fit: cover;
  background-repeat: no-repeat;
  width: 370px;
  height: 250px;
  margin: 10px;
  border: solid 1px rgb(136, 124, 53);
}
.users-review {
  width: 370px;
  margin: 10px;
  padding: 10px;
  height: 250px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(37, 36, 36);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: solid 1px rgb(136, 124, 53);
}
.review-btn-box {
  display: flex;
  flex-direction: row;
}
#review-btn {
  text-transform: none;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  height: auto;
}

#toFilm {
  justify-content: end;
  margin: 15%;
  border: solid 1px  #f5c65067;;
}
h5 {
  display: flex;
  flex-direction: row;
}

h5:before,
h5:after {
  content: "";
  flex: 1 1;
  border-bottom: 2px solid #f5c65067;;
  margin: 15px;
}
#toCinema {
  margin-top: 0px;
  border: solid 1px #f5c65067;;
}
</style>
