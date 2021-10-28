import Vue from "vue";
import Router from "vue-router";

// Landing pages
import Landing from "~/pages/index.vue";
import Password from "~/pages/frontend/signup-pages/password.vue";
import Plan from "~/pages/frontend/signup-pages/plan.vue";

import Home from "~/pages/frontend/home-page/index";

// Movies
import Movies from "~/pages/frontend/movie-category/index";
import ShowDetail from "~/pages/frontend/show-detail/index";
import MovieDetail from "~/pages/frontend/movie-detail/index";

// TV Shows
import TVShows from "~/pages/frontend/category-page";
import SingleShow from "~/pages/frontend/show-single";

// Auth Pages
import Login from "~/pages/AuthPages/Default/SignIn1";
import SignUp from "~/pages/AuthPages/Default/SignUp1";
import UserProfile from "~/pages/frontend/user/Manage-profile";

// Pricing Plan
import PricingPlan from "~/pages/frontend/user/pricing-plan";

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
        path: "/signup/password",
        name: "signup-password",
        component: Password,
      },
      {
        path: "/signup/plan",
        name: "signup-plan",
        component: Plan,
      },

      // pricing
      {
        path: "/pricing-plan",
        name: "pricing-plan",
        component: PricingPlan,
      },

      // movies
      {
        path: "/movies",
        name: "movies",
        component: Movies,
      },
      {
        path: "/movies/show-detail",
        name: "show-detail",
        component: ShowDetail,
      },
      {
        path: "/movies/movie-detail",
        name: "movie-detail",
        component: MovieDetail,
      },

      // tv shows
      {
        path: "/tv-shows",
        name: "tv-shows",
        component: TVShows,
      },
      {
        path: "/tv-shows/single-show",
        name: "single-show",
        component: SingleShow,
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
