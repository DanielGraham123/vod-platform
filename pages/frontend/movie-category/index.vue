<template>
  <div>
    <Loader />
    <Home />
    <div class="main-content">
      <popularshow />
      <international />
      <recommend />
    </div>
  </div>
</template>

<script>
import { core } from "../../../assets/app/app";
import Home from "../../../components/frontend/movie-category/Home";
import popularshow from "../../../components/frontend/movie-category/popularshow";
import international from "../../../components/frontend/movie-category/internationalshow";
import recommend from "../../../components/frontend/movie-category/recommend";
import Loader from "../../../components/core/loader/Loader";

export default {
  layout: "FrontendLayout",
  components: {
    Home,
    popularshow,
    international,
    recommend,
    Loader,
  },
  mounted() {
    setTimeout(function () {
      core.index();
    }, 1000);
  },
};
</script>

<style scoped>
</style>
