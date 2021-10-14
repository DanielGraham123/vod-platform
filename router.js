import Vue from "vue";
import Router from "vue-router";

import Landing from "~/pages/index.vue";
import Home from "~/pages/frontend/home-page/index";
import Movies from "~/pages/frontend/movie-category/index";
import TVShows from "~/pages/frontend/category-page";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "landing",
        component: Landing,
      },
      {
        path: "/home",
        name: "home",
        component: Home,
      },
      {
        path: "/movies",
        name: "movies",
        component: Movies,
      },
      {
        path: "/tv-shows",
        name: "tv-shows",
        component: TVShows,
      },
    ],
  });
}
