<template>
  <div>
    <Loader />
    <Landing />
  </div>
</template>

<script>
import { core } from "../assets/app/app";
import Landing from "../components/frontend/landing-page/Landing/Home";
import Loader from "../components/core/loader/Loader";

export default {
  middleware: "redirect",
  layout: "FrontendLayout",
  components: {
    Landing,
    Loader,
  },
  mounted() {
    setTimeout(function () {
      core.index();
    }, 1000);
  },
};
</script>
