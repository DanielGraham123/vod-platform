<template>
  <section id="iq-upcoming-movie">
    <SlidingItems
      :dataItems="upComming"
      :title="'Upcomming'"
      :genres="genres"
    ></SlidingItems>
  </section>
</template>
<script>
import SlidingItems from "../PageComponents/SlidingItems";
export default {
  name: "Upcomming",
  components: {
    SlidingItems,
  },
  data() {
    return {
      upComming: [
        {
          image: require("../../../assets/images/frontend/upcoming/01.jpg"),
          title: "The Last Breath",
          age: "5+",
          time: "2h 30m",
        },
        {
          image: require("../../../assets/images/frontend/upcoming/02.jpg"),
          title: "Last Night",
          age: "22+",
          time: "2h 30m",
        },
        {
          image: require("../../../assets/images/frontend/upcoming/03.jpg"),
          title: "1980",
          age: "25+",
          time: "2h 30m",
        },
        {
          image: require("../../../assets/images/frontend/upcoming/03.jpg"),
          title: "1980",
          age: "25+",
          time: "2h 30m",
        },
        {
          image: require("../../../assets/images/frontend/upcoming/03.jpg"),
          title: "1980",
          age: "25+",
          time: "2h 30m",
        },
      ],

      genres: ["Action", "Romance", "Drama"],
    };
  },
  mounted() {},
  methods: {},
};
</script>

