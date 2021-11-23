<template>
  <section id="iq-trending" class="">
    <SlidingItems
      :dataItems="thrillersData"
      :title="'Thrillers'"
      :genres="genres"
    ></SlidingItems>
  </section>
</template>
<script>
import SlidingItems from "../PageComponents/SlidingItems";
export default {
  name: "Trending",
  components: {
    SlidingItems,
  },
  data() {
    return {
      thrillersData: [
        {
          image: require("../../../assets/images/frontend/tvthrillers/01.jpg"),
          title: "The Last Breath",
          age: "5+",
          sesson: "2",
        },
        {
          image: require("../../../assets/images/frontend/tvthrillers/02.jpg"),
          title: "Last Night",
          age: "22+",
          sesson: "4",
        },
        {
          image: require("../../../assets/images/frontend/tvthrillers/03.jpg"),
          title: "1980",
          age: "25+",
          sesson: "3",
        },
        {
          image: require("../../../assets/images/frontend/tvthrillers/03.jpg"),
          title: "1980",
          age: "25+",
          sesson: "1",
        },
        {
          image: require("../../../assets/images/frontend/tvthrillers/03.jpg"),
          title: "1980",
          age: "25+",
          sesson: "2",
        },
        {
          image: require("../../../assets/images/frontend/tvthrillers/03.jpg"),
          title: "1980",
          age: "25+",
          sesson: "1",
        },
        {
          image: require("../../../assets/images/frontend/tvthrillers/03.jpg"),
          title: "1980",
          age: "25+",
          sesson: "2",
        },
      ],

      genres: ["Action", "Gospel", "Drama"],
    };
  },
  mounted() {},
  methods: {},
};
</script>

