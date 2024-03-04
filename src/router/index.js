import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieView from "../views/MovieView.vue";
import CinemaView from "../views/CinemaView.vue";
import AboutView from "../views/AboutView.vue";
import MovieHeroView from "../views/MovieHeroView.vue";
import CinemaHeroView from "../views/cinemaHeroView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView, // 4 kB
      // component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/film",
      name: "film",
      component: MovieView, // 1 kB size
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView, // 10 kB
      // component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
