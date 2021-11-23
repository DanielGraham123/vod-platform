<template>
  <section id="iq-suggestede" class="">
    <SlidingItems
      :dataItems="suggestionData"
      :title="'Recommended for You'"
      :genres="genres"
    ></SlidingItems>
  </section>
</template>
<script>
import SlidingItems from "../PageComponents/SlidingItems";
export default {
  name: "Suggestion",
  components: {
    SlidingItems,
  },
  data() {
    return {
      suggestionData: [
        {
          image: require("../../../assets/images/frontend/suggested/01.jpg"),
          title: "The Last Breath",
          age: "5+",
          time: "2h 30m",
        },
        {
          image: require("../../../assets/images/frontend/suggested/02.jpg"),
          title: "Last Night",
          age: "22+",
          time: "2h 30m",
        },
        {
          image: require("../../../assets/images/frontend/suggested/03.jpg"),
          title: "1980",
          age: "25+",
          time: "2h 30m",
        },
        {
          image: require("../../../assets/images/frontend/suggested/03.jpg"),
          title: "1980",
          age: "25+",
          time: "2h 30m",
        },
        {
          image: require("../../../assets/images/frontend/suggested/03.jpg"),
          title: "1980",
          age: "25+",
          time: "2h 30m",
        },
      ],

      genres: ["Action", "Gospel", "Drama"],
    };
  },

  mounted() {},

  methods: {},
};
</script>
