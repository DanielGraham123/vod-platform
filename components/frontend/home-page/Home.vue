<template>
  <section id="home" class="iq-main-slider p-0">
    <Slick id="home-slider" class="slider m-0 p-0" :option="homeSliderOption">
      <div v-for="(data, index) in sliderData" :key="index" class="slide">
        <!-- slick-bg s-bg-1 -->

        <div class="slick-backImg">
          <img
            src="~@/assets/images/frontend/slider/movieposter.jpg"
            class="img-fluid"
            alt="image"
          />
        </div>

        <b-container fluid class="position-relative" style="top: 6em">
          <div class="slider-inner h-100">
            <b-row class="align-items-center h-100">
              <b-col xl="8" lg="12" md="12" class="px-5 pb-3">
                <h2
                  class="slider-text big-title title text-uppercase"
                  data-animation-in="fadeInLeft"
                  data-delay-in="0.6"
                >
                  {{ data.title }}
                </h2>
                <div
                  class="d-flex align-items-center mt-3"
                  data-animation-in="fadeInUp"
                  data-delay-in="1"
                >
                  <span class="badge badge-warning p-1 font-weight-bolder"
                    >TOP <span class="d-block">10</span>
                  </span>
                  <span class="ml-3 movie-ranking"
                    >Number 4 in Cameroon Today</span
                  >
                </div>
                <p data-animation-in="fadeInUp" data-delay-in="1.2">
                  {{ data.text }}
                </p>

                <div
                  class="d-flex align-items-center videoBtn r-mb-23 mt-5 pt-2"
                  data-animation-in="fadeInUp"
                  data-delay-in="1.2"
                >
                  <nuxt-link
                    to="/frontend/show-detail"
                    class="btn btn-hover playBtn"
                  >
                    <i class="fa fa-play mr-2" aria-hidden="true" />Play Now
                  </nuxt-link>
                  <nuxt-link
                    to="/frontend/show-detail"
                    class="btn btn-link btn-secondary ml-3"
                  >
                    <i class="fa fa-info-circle mr-2" aria-hidden="true" />
                    More details
                  </nuxt-link>
                </div>
              </b-col>
            </b-row>
            <div class="trailor-video">
              <a
                class="video-open playbtn"
                href="https://cdn.mos.cms.futurecdn.net/6GJnGNWCjG4p6jxpv43cKc-1024-80.jpg.webp"
                target="_blank"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="80px"
                  height="80px"
                  viewBox="0 0 213.7 213.7"
                  enable-background="new 0 0 213.7 213.7"
                  xml:space="preserve"
                >
                  <polygon
                    class="triangle"
                    fill="none"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    points="73.5,62.5 148.5,105.8 73.5,149.1 "
                  />
                  <circle
                    class="circle"
                    fill="none"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    cx="106.8"
                    cy="106.8"
                    r="103.3"
                  />
                </svg>
                <span class="w-trailor">Watch Trailer</span>
              </a>
            </div>
          </div>

          <!-- @click="openTrailer('../../../assets/video/trailer.mp4')" -->
        </b-container>
      </div>
    </Slick>
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
export default {
  name: "Home",
  middleware: "homeredirect",
  components: {
    Slick,
  },
  data() {
    return {
      sliderData: [
        {
          title: "The fisherman's Diary",
          age: "18",
          sesson: "2 Seasons",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          title: "bushland",
          age: "18",
          sesson: "2 Seasons",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          title: "bushland",
          age: "18",
          sesson: "2 Seasons",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          title: "bushland",
          age: "18",
          sesson: "2 Seasons",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          title: "bushland",
          age: "18",
          sesson: "2 Seasons",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          title: "bushland",
          age: "18",
          sesson: "2 Seasons",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
      ],
      homeSliderOption: {
        autoplay: false,
        speed: 800,
        lazyLoad: "progressive",
        arrows: true,
        dots: false,
        prevArrow:
          '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
        nextArrow:
          '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: true,
              arrows: false,
            },
          },
        ],
      },
    };
  },
  methods: {
    openTrailer(path) {
      let routeData = this.$router.resolve(path);
      console.log("routeData", routeData);
      window.open(routeData.href, "_blank");
    },
  },
  mounted() {},
};
</script>

<style scoped>
@import url("../../../assets/css/custom.css");

a.btn {
  color: white !important;
}

h2,
.h2 {
  font-size: 3.3em !important;
}

.btn.playBtn {
  color: black !important;
}

.btn.moreBtn {
  background-color: rgba(194, 190, 190, 0.699) !important;
}
</style>

<style lang="scss" scoped>
.videoBtn {
  a.btn {
    color: black !important;
  }

  a.btn-link.btn-secondary {
    background: rgba(194, 190, 190, 0.699) !important;
  }
}

.movie-ranking {
  font-weight: 500;
  font-size: 21px;
}
</style>