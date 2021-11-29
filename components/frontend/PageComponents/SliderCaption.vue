<template>
  <div style="z-index: 2">
    <b-container
      fluid
      class="
        position-relative
        slider-caption
        d-none d-sm-none d-md-block d-lg-block d-xl-block
      "
    >
      <div class="slider-inner h-100">
        <b-row class="align-items-center h-100">
          <b-col xl="8" lg="12" md="12" class="px-5 pb-3">
            <h2
              class="slider-text big-title title text-uppercase"
              data-animation-in="fadeInLeft"
              data-delay-in="0.6"
              v-if="title"
              :class="$router.name === 'home' ? 'text-center' : ''"
            >
              {{ title }}
            </h2>
            <div
              class="d-flex align-items-center mt-3"
              data-animation-in="fadeInUp"
              data-delay-in="1"
            >
              <span class="badge badge-warning p-1 font-weight-bolder"
                >TOP <span class="d-block">10</span>
              </span>
              <span class="ml-3 movie-ranking">Number 4 in Cameroon Today</span>
            </div>
            <p
              data-animation-in="fadeInUp"
              data-delay-in="1.2"
              class="movie-description mt-2"
              v-if="text"
              :class="$router.name === 'home' ? 'text-center' : ''"
            >
              {{ text }}
            </p>

            <div
              class="
                d-flex
                align-items-center
                videoBtn
                r-mb-23
                mt-lg-5 mt-md-3
                pt-2
                d-block
              "
              data-animation-in="fadeInUp"
              data-delay-in="1.2"
            >
              <nuxt-link to="/movies/show-detail" class="btn btn-hover playBtn">
                <i class="fa fa-play mr-2" aria-hidden="true" />Play Now
              </nuxt-link>
              <nuxt-link
                to="/movies/show-detail"
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
    </b-container>
    <div
      class="
        slider-inner
        lower-caption
        d-block d-sm-block d-md-none d-lg-none
        px-3
      "
    >
      <h2
        class="slider-text big-title mb-3 title text-uppercase"
        data-animation-in="fadeIn"
        data-delay-in="0.6"
        v-if="title"
        :class="$router.name === 'home' ? 'text-center' : ''"
      >
        {{ title }}
      </h2>

      <div>
        <p
          data-animation-in="fadeIn"
          data-delay-in="1.2"
          class="movie-description mb-0 mt-2"
          v-if="text"
          :class="$router.name === 'home' ? 'text-center' : ''"
        >
          {{ text }}
        </p>
      </div>

      <div
        class="row justify-content-center videoBtn mt-2"
        data-animation-in="fadeIn"
        data-delay-in="1.2"
      >
        <div class="col-12 my-2">
          <nuxt-link
            to="/movies/show-detail"
            class="btn btn-hover btn-block playBtn"
          >
            <i class="fa fa-play mr-2" aria-hidden="true" />Play Now
          </nuxt-link>
        </div>

        <div class="col-12">
          <nuxt-link
            to="/movies/show-detail"
            class="btn btn-link btn-block btn-secondary"
          >
            <i class="fa fa-info-circle mr-2" aria-hidden="true" />
            More details
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    text: { type: String },
    widget: { type: String },
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
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

.slider-caption {
  top: 6.5em;
  z-index: 1;
}

.overlay {
  display: none;
}

@media (max-width: 768px) {
  h2.big-title {
    font-size: 1.5em !important;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .movie-ranking {
    font-weight: 500;
    font-size: 16px;
  }

  .slider-caption {
    top: 3.5em;
  }

  .movie-description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px !important;
  }

  .slider-inner {
    padding-top: 15em;
    height: auto;
    position: unset;
    padding-bottom: 0em !important;
  }
}
</style>