import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieView from "../views/MovieView.vue";
import CinemaView from "../views/CinemaView.vue";
import FeedbackView from "../views/FeedbackView.vue";
import IndividualMovieView from "../views/IndividualMovieView.vue";
import CinemaHeroView from "../views/CinemaHeroView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/film",
      name: "film",
      component: MovieView,
    },
    {
      path: "/biograf",
      name: "biograf",
      component: CinemaView,
    },
    {
      path: "/feedback",
      name: "feedback",
      component: FeedbackView,
    },
    {
      path: "/film/:id",
      name: "film-id",
      component: IndividualMovieView,
    },
    {
      path: "/biograf/:id",
      name: "biograf-id",
      component: CinemaHeroView,
    }
  ],
});

export default router;
