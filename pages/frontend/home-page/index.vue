<template>
  <div>
    <Loader />

    <Home />
    <div class="main-content">
      <favourite />
      <upcomming />
      <!-- <top /> -->
      <suggestion />
      <!-- <detail /> -->
      <tvshows />
      <thriller />
    </div>
  </div>
</template>

<script>
import { core } from "../../../assets/app/app";
import Home from "../../../components/frontend/home-page/Home";
import favourite from "../../../components/frontend/home-page/favourite";
import upcomming from "../../../components/frontend/home-page/upcomming";
import top from "../../../components/frontend/home-page/top-ten";
import suggestion from "../../../components/frontend/home-page/suggestion";
import detail from "../../../components/frontend/home-page/detail";
import trending from "../../../components/frontend/home-page/trending";
import tvshows from "../../../components/frontend/home-page/tv-shows";
import thriller from "../../../components/frontend/home-page/thriller";
import Loader from "../../../components/core/loader/Loader";

export default {
  layout: "FrontendLayout",
  middleware: "homeredirect",

  components: {
    Home,
    favourite,
    upcomming,
    top,
    suggestion,
    detail,
    trending,
    thriller,
    Loader,
    tvshows,
  },

  head() {
    return {
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href: "css/custom.css",
      //   },
      //   {
      //     rel: "stylesheet",
      //     href: "css/frontend/variable.css",
      //   },
      //   {
      //     rel: "stylesheet",
      //     href: "css/frontend/dark.css",
      //   },
      //   {
      //     rel: "stylesheet",
      //     href: "css/frontend/responsive.css",
      //   },
      //   {
      //     rel: "stylesheet",
      //     href: "css/frontend/style.css",
      //   },
      //   {
      //     rel: "stylesheet",
      //     href: "css/frontend/typography.css",
      //   },
      // ],
    };
  },

  mounted() {
    setTimeout(function () {
      core.index();
    }, 1000);
    // console.log("get user token:", this.$store.getters.getUserToken);
  },
  // beforeRouteLeave(to, from, next) {
  //     console.log("get user token:", this.$store.getters.getUserToken);

  //     if (to.name == "landing" && this.$store.getters.getUserToken) {
  //       console.log("going to landing");
  //       next("/home");
  //     } else if (!this.$store.getters.getUserToken) {
  //       next("/");
  //     } else {
  //       next();
  //     }
  //   },
  // beforeResolve(to, from, next) {

  // },
};
</script>

<style scoped>
/* @import url("../../../assets/css/frontend/typography.css");

@import url("../../../assets/css/custom.css");
@import url("../../../assets/css/frontend/dark.css");
@import url("../../../assets/css/frontend/variable.css");
@import url("../../../assets/css/frontend/style.css");
@import url("../../../assets/css/frontend/responsive.css");
@import url("../../../assets/css/developer.css"); */
</style>