<template>
  <div>
    <Loader />

    <div class="main-content">
      <Landing />
    </div>
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
