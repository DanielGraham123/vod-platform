import Vue from "vue";
import Router from "vue-router";

// Landing pages
import Landing from "~/pages/index.vue";
import Password from "~/pages/frontend/signup-pages/password.vue";
import Plan from "~/pages/frontend/signup-pages/plan.vue";

import Home from "~/pages/frontend/home-page/index";
import Movies from "~/pages/frontend/movie-category/index";
import TVShows from "~/pages/frontend/category-page";

// Auth Pages
import Login from "~/pages/AuthPages/Default/SignIn1";
import SignUp from "~/pages/AuthPages/Default/SignUp1";
import UserProfile from "~/pages/frontend/user/Manage-profile";

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
        path: "/signup/password",
        name: "signup-password",
        component: Password,
      },
      {
        path: "/signup/plan",
        name: "signup-plan",
        component: Plan,
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

      // Auth links
      {
        path: "/auth/login",
        name: "login",
        component: Login,
      },
      {
        path: "/auth/signup",
        name: "signup",
        component: SignUp,
      },
      {
        path: "/profile",
        name: "profile",
        component: UserProfile,
      },
    ],
  });
}
