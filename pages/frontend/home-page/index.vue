<template>
  <div>
    <Loader />

    <Home />
    <div class="main-content">
      <favourite />
      <upcomming />
      <top />
      <suggestion />
      <detail />
      <trending />
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
import thriller from "../../../components/frontend/home-page/thriller";
import Loader from "../../../components/core/loader/Loader";

export default {
  layout: "FrontendLayout",
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
  },
  mounted() {
    setTimeout(function () {
      core.index();
    }, 1000);
  },
};
</script>
