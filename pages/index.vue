<template>
  <div>
    <Loader />
    <Landing />
  </div>
</template>

<script>
import Landing from "../components/frontend/landing-page/Landing";
import Loader from "../components/core/loader/Loader";

export default {
  layout: "FrontendLayout",
  components: {
    Landing,
    Loader,
  },
  mounted() {},
};
</script>
