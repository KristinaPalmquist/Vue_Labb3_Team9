import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieView from "../views/MovieView.vue";
import CinemaView from "../views/CinemaView.vue";
import AboutView from "../views/AboutView.vue";
import MovieHeroView from "../views/MovieHeroView.vue";
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
      path: "/film/:id",
      name: "film-id",
      component: MovieHeroView,
    },
    {
      path: "/biograf",
      name: "biograf",
      component: CinemaView,
    },
    {
      path: "/biograf/:id",
      name: "biograf-id",
      component: CinemaHeroView,
    },
    {
      path: "/om",
      name: "om",
      component: AboutView,
    },
  ],
});

export default router;
