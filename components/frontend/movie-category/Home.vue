<template>
  <section class="iq-main-slider p-0">
    <div class="owl-carousel owl-theme" v-if="sliderData">
      <div v-for="(item, index) in sliderData" :key="index">
        <div
          class="section_bg"
          :style="{
            background: 'url(' + item.image + ') center top / cover no-repeat',
          }"
        ></div>
        <SliderCaption :title="item.title" :text="item.text"></SliderCaption>
      </div>
    </div>

    <!-- <div class="dropdown genres-box">
      <b-dropdown id="dropdownMenuButton40" menu-class="three-column">
        <template v-slot:button-content>
          <b-link href="#" style="color:#fff"> Genres</b-link>
        </template>
        <b-dropdown-item href="#">Share</b-dropdown-item>
        <b-dropdown-item href="#">Delete</b-dropdown-item>
        <b-dropdown-item href="#">Punjabi</b-dropdown-item>
        <b-dropdown-item href="#">English</b-dropdown-item>
        <b-dropdown-item href="#">Comedies</b-dropdown-item>
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Romance</b-dropdown-item>
        <b-dropdown-item href="#">Dramas</b-dropdown-item>
        <b-dropdown-item href="#">Bollywood</b-dropdown-item>
        <b-dropdown-item href="#">Hollywood</b-dropdown-item>
        <b-dropdown-item href="#">Children & Family</b-dropdown-item>
        <b-dropdown-item href="#">Award-Winning</b-dropdown-item>
      </b-dropdown>
    </div> -->
  </section>
</template>
<script>
import Slick from "../../../components/core/slider/Slick";
import SliderCaption from "../PageComponents/SliderCaption";
import $ from "jquery";
export default {
  name: "Slider",
  components: {
    Slick,
    SliderCaption,
  },

  data() {
    return {
      sliderData: [
        {
          image: require("../../../assets/images/frontend/movie-banner/1.jpg"),
          title: "Open Dead Shot",
          age: "18+",
          series: "3 Seasons",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          image: require("../../../assets/images/frontend/movie-banner/2.jpg"),
          title: "The Lost Journey",
          age: "18+",
          series: "3 Seasons",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          image: require("../../../assets/images/frontend/movie-banner/3.jpg"),
          title: "Boop Bitty",
          age: "18+",
          series: "3 Seasons",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
      ],
    };
  },

  mounted() {
    $(".owl-carousel").owlCarousel({
      loop: true,
      items: 1,
      nav: false,
      dots: false,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  },
};
</script>

<style scoped>
.section_bg:before {
  content: "";
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: block;
  z-index: 1;
  background: linear-gradient(180deg, rgba(19, 23, 32, 0.5) 0%, #141414 100%);
  pointer-events: none;
}
</style>
