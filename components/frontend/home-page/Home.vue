<template>
  <section id="home" class="iq-main-slider p-0">
    <div v-swiper="swiperOption" ref="homeSwiper" class="swiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in sliderData"
          :key="index"
        >
          <div
            class="section_bg"
            :style="{
              background:
                'url(' + item.image + ') center top / cover no-repeat',
            }"
          ></div>
          <SliderCaption :title="item.title" :text="item.text"></SliderCaption>
        </div>

        <div
          class="swiper-button-prev"
          @click="prev()"
          slot="button-prev"
        ></div>
        <div
          class="swiper-button-next"
          @click="next()"
          slot="button-next"
        ></div>
      </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol
        id="circle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 44 44"
        width="44px"
        height="44px"
        fill="none"
        stroke="currentColor"
      >
        <circle id="test" r="20" cy="22" cx="22" />
      </symbol>
    </svg>
  </section>
</template>

<script>
import Slick from "../../core/slider/Slick";
import SliderCaption from "../PageComponents/SliderCaption.vue";
// import $ from "jquery";
// import Vue from "vue";
import { directive } from "vue-awesome-swiper";
// import { Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import "swiper/swiper.min.css";

export default {
  name: "Home",
  layout: "FrontendLayout",
  components: {
    Slick,
    SliderCaption,
    // Swiper,
    // SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  setup() {
    return {
      // modules: [Navigation],
    };
  },
  data() {
    return {
      sliderData: [
        {
          title: "The fisherman's Diary",
          image: require("../../../assets/images/frontend/slider/movieposter.jpg"),
          age: "18",
          sesson: "2 Seasons",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          title: "bushland",
          image: require("../../../assets/images/frontend/slider/slider2_.jpg"),
          age: "18",
          sesson: "2 Seasons",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          title: "bushland",
          image: require("../../../assets/images/frontend/slider/slider2.jpg"),
          age: "18",
          sesson: "2 Seasons",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          title: "bushland",
          image: require("../../../assets/images/frontend/slider/slider3.jpg"),
          age: "18",
          sesson: "2 Seasons",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          title: "bushland",
          image: require("../../../assets/images/frontend/slider/slider1_.jpg"),

          age: "18",
          sesson: "2 Seasons",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
      ],

      swiperOption: {
        loop: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            // will set `translateZ(-400px)` on previous slides
            translate: [0, 0, -400],
          },
          next: {
            // will set `translateX(100%)` on next slides
            translate: ["100%", 0, 0],
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            spaceBetween: 40,
          },
          768: {
            spaceBetween: 30,
          },
          640: {
            spaceBetween: 20,
          },
          320: {
            spaceBetween: 10,
            navigation: {},
          },
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.homeSwiper.$swiper;
    },
  },
  methods: {
    openTrailer(path) {
      let routeData = this.$router.resolve(path);
      console.log("routeData", routeData);
      window.open(routeData.href, "_blank");
    },
    next() {
      this.swiper.slideNext(1, 1000, false);
    },
    prev() {
      this.swiper.slidePrev(1, 1000, false);
    },
  },
  mounted() {},

  beforeMount() {},
};
</script>


<style lang="scss" scoped>
.swiper-container {
  height: 100% !important;
  overflow: hidden !important;
}

.overlay {
  display: none;
}

.section_bg {
  opacity: 0.5;
}

.iq-main-slider {
  height: 450px;
}

@media (min-width: 768px) and (max-width: 991px) {
  .iq-main-slider {
    padding-top: 0 !important;
  }

  #home-slider .slick-backImg > img {
    height: unset;
  }

  h2,
  .h2 {
    font-size: 2.3em !important;
  }
}

@media (max-width: 768px) {
  .slider-caption {
    top: 3.5em;
  }

  .iq-main-slider {
    height: 515px;
  }

  .movie-description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px !important;
  }

  #home-slider .slide {
    height: 260px;
  }

  #home-slider .slick-backImg > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  #home-slider .slick-backImg {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.4;
    }
  }
}

@media (max-width: 400px) {
  #home-slider .slick-backImg > img {
    object-fit: unset;
    width: 100%;
    height: 75vw;
  }
}
</style>