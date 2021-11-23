<template>
  <section id="iq-suggestede">
    <SlidingItems
      :dataItems="sliderData"
      :title="'Latest Movies'"
      :genres="genres"
    ></SlidingItems>
  </section>
</template>
<script>
import SlidingItems from "../PageComponents/SlidingItems";
export default {
  name: "Recommend",
  components: {
    SlidingItems,
  },
  data() {
    return {
      sliderData: [
        {
          image: require("../../../assets/images/frontend/tvthrillers/01.jpg"),
          title: "Mission Moon",
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
          image: require("../../../assets/images/frontend/tvthrillers/03.jpg"),
          title: "Knight Mare",
          age: "15+",
          series: "2 Seasons",
        },
        {
          image: require("../../../assets/images/frontend/tvthrillers/09.jpg"),
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
          image: require("../../../assets/images/frontend/tvthrillers/08.jpg"),
          title: "Friends",
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
