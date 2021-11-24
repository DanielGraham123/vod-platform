<template>

  <span>
  <Loader />
  
  <live/>
  <Recomended/>
<Latest/>
  </span>
</template>

<script>
import { core } from "../../../assets/app/app";


import Loader from "../../../components/core/loader/Loader";

import Live from "../../../components/frontend/channel-page/Live";
import Recomended from "../../../components/frontend/channel-page/Recomended";
import Latest from "../../../components/frontend/channel-page/Latest";

export default {
  layout: "FrontendLayout",
  components: {
    Loader,
  
    Live,
    Recomended,
    Latest
  },
  mounted() {
    setTimeout(function () {
      core.index();
    }, 1000);
  },
};
</script>
