<template>
  <section id="iq-favorites">
    <SlidingItems
      :dataItems="sliderData"
      :title="'Popular TV Shows'"
      :genres="genres"
    ></SlidingItems>
  </section>
</template>
<script>
import SlidingItems from "../PageComponents/SlidingItems";
export default {
  name: "PopularShow",
  components: {
    SlidingItems,
  },
  data() {
    return {
      sliderData: [
        {
          image: require("../../../assets/images/frontend/tvthrillers/01.jpg"),
          title: "Day of Darkness",
          age: "15+",
          series: "2 Seasons",
        },
        {
          image: require("../../../assets/images/frontend/tvthrillers/02.jpg"),
          title: "Day of Darkness",
          age: "15+",
          series: "2 Seasons",
        },
        {
          image: require("../../../assets/images/frontend/tvthrillers/03.jpg"),
          title: "Day of Darkness",
          age: "15+",
          series: "2 Seasons",
        },
        {
          image: require("../../../assets/images/frontend/tvthrillers/04.jpg"),
          title: "Day of Darkness",
          age: "15+",
          series: "2 Seasons",
        },
        {
          image: require("../../../assets/images/frontend/tvthrillers/05.jpg"),
          title: "Day of Darkness",
          age: "15+",
          series: "2 Seasons",
        },
        {
          image: require("../../../assets/images/frontend/tvthrillers/01.jpg"),
          title: "Day of Darkness",
          age: "15+",
          series: "2 Seasons",
        },
      ],
      genres: ["Action", "Gospel", "Drama"],
    };
  },
  mounted() {},
  methods: {},
};
</script>
