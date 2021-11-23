<template>
  <section id="iq-favorites">
    <SlidingItems
      :dataItems="favoriteData"
      :title="'Your Favorites'"
      :genres="genres"
    ></SlidingItems>
  </section>
</template>
<script>
// import $ from "jquery";
import SlidingItems from "../PageComponents/SlidingItems";
export default {
  name: "Favourite",
  components: {
    SlidingItems,
  },
  data() {
    return {
      favoriteData: [
        {
          image: require("../../../assets/images/frontend/favorite/01.jpg"),
          title: "The Last Breath",
          age: "5+",
          time: "2h 30m",
        },
        {
          image: require("../../../assets/images/frontend/favorite/02.jpg"),
          title: "Last Night",
          age: "22+",
          time: "2h 30m",
        },
        {
          image: require("../../../assets/images/frontend/favorite/03.jpg"),
          title: "1980",
          age: "25+",
          time: "2h 30m",
        },
        {
          image: require("../../../assets/images/frontend/favorite/04.jpg"),
          title: "1980",
          age: "25+",
          time: "2h 30m",
        },
        {
          image: require("../../../assets/images/frontend/favorite/05.jpg"),
          title: "1980",
          age: "25+",
          time: "2h 30m",
        },
        {
          image: require("../../../assets/images/frontend/favorite/03.jpg"),
          title: "1980",
          age: "25+",
          time: "2h 30m",
        },
        {
          image: require("../../../assets/images/frontend/favorite/04.jpg"),
          title: "1980",
          age: "25+",
          time: "2h 30m",
        },
        {
          image: require("../../../assets/images/frontend/favorite/05.jpg"),
          title: "1980",
          age: "25+",
          time: "2h 30m",
        },
      ],

      genres: ["Action", "Romance", "Drama"],
    };
  },

  methods: {},
};
</script>

