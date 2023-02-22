import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieView from "../views/MovieView.vue";
import CinemaView from "../views/CinemaView.vue";
import FeedbackView from "../views/FeedbackView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/movie",
      name: "movie",
      component: MovieView,
    },
    {
      path: "/cinema",
      name: "cinema",
      component: CinemaView,
    },
    {
      path: "/feedback",
      name: "feedback",
      component: FeedbackView,
    },
  ],
});

export default router;
