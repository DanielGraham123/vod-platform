<template>
  <div>
    <Loader />
    <nuxt />
  </div>
</template>
<script>
import Loader from "../components/core/loader/Loader";
import logo from "../assets/images/logo.png";
import { core } from "../assets/app/app";
export default {
  name: "default",
  components: {
    Loader,
  },
  head() {
    return {
      bodyAttrs: {
        class: "default-layout",
      },

      link: [
        {
          rel: "stylesheet",
          href: "/css/custom.css",
        },
        {
          rel: "stylesheet",
          href: "/css/backend/variable.css",
        },
        {
          rel: "stylesheet",
          href: "/css/backend/dark.css",
        },
        {
          rel: "stylesheet",
          href: "/css/backend/responsive.css",
        },
        {
          rel: "stylesheet",
          href: "/css/backend/style.css",
        },

        {
          rel: "stylesheet",
          href: "/css/backend/typography.css",
        },
      ],
    };
  },
  data() {
    return {
      options: {
        slidesPerView: 1,
        loop: true,
      },
    };
  },
  mounted() {
    core.index();
  },

  created() {
    this.$forceUpdate();
  },
};
</script>
<style lang='scss'>
.default-layout {
  &::v-deep {
    @import url("../assets/css/custom.css");
    @import url("../assets/css/backend/variable.css");
    @import url("../assets/css/backend/dark.css");
    @import url("../assets/css/backend/responsive.css");
    @import url("../assets/css/backend/style.css");
    @import url("../assets/css/backend/typography.css");
  }
}
</style>
