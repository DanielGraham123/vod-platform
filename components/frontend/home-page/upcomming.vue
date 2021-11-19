<template>
  <section id="iq-upcoming-movie">
    <b-container fluid>
      <b-row>
        <b-col sm="12" class="overflow-hidden px-sm-auto px-lg-0">
          <div
            class="
              iq-main-header
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <div>
              <h4 class="main-title" v-b-tooltip.hover title="View All">
                <nuxt-link to="/tv-shows" class="text-white">
                  Upcoming Movies
                </nuxt-link>
              </h4>
            </div>
            <div class="d-flex slick-aerrow-block">
              <button
                class="slick-prev slick-arrow"
                aria-label="Previous"
                type="button"
                style="display: block"
                @click="prev()"
              ></button>
              <button
                class="slick-next slick-arrow"
                aria-label="Next"
                type="button"
                style="display: block"
                @click="next()"
              ></button>
            </div>
          </div>
          <div class="upcoming-contens">
            <VueSlickCarousel
              class="favorites-slider list-inline row p-0 mb-0"
              ref="dSlick"
              v-bind="upCommingSliderOption"
            >
              <li
                v-for="(item, index) in upComming"
                :key="'upcomming' + index"
                class="slide-item"
                @mouseover="isHovering = true"
                @mouseout="isHovering = false"
              >
                <div
                  class="block-images"
                  :class="{ 'selected-item': favIndex === index && selected }"
                >
                  <div class="img-box">
                    <img :src="item.image" class="img-fluid" alt="" />
                  </div>
                  <div
                    class="
                      block-description
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                  >
                    <h6 class="">{{ item.title }}</h6>

                    <button
                      class="btn p-0 btn-float"
                      @click.prevent="$router.push('/movies/movie-detail')"
                    >
                      <i class="fa fa-play-circle" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div class="block-social-info">
                    <button
                      class="btn p-0 btn-float"
                      @click.prevent="
                        selectItem(item, index);
                        selected = !selected;
                      "
                    >
                      <i class="fa fa-info-circle" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </li>
            </VueSlickCarousel>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-modal
      v-model="selected"
      header-bg-variant="black"
      header-text-variant="dark"
      :cancel-disabled="true"
      hide-footer
      hide-header
      size="xl"
      body-class="bg-black"
      id="movie-modal"
    >
      <div class="container py-3">
        <div class="row" v-if="selectedItem">
          <div class="col-md-5">
            <h2 class="mb-4 font-weight-bold">{{ selectedItem.title }}</h2>

            <p class="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              vero est tempora voluptatibus possimus corrupti culpa, voluptate
              accusamus non eveniet voluptatum aliquid error, facilis iure dolor
              nostrum quibusdam vel blanditiis adipisci minima architecto
              consequatur. Odit, ullam? Est sint deleniti adipisci error
              aliquid. Voluptatum maxime quibusdam, nam voluptas suscipit
              delectus explicabo? Voluptatum maxime quibusdam, nam voluptas
              suscipit delectus explicabo?
            </p>

            <div class="d-flex align-items-center pb-3">
              <span class="text-success">20-03-2012</span>
              <span class="ml-3">{{ selectedItem.time }}</span>
            </div>

            <!-- genres -->
            <div class="d-flex align-items-center pb-3">
              <span class="text-secondary">Genres: </span>
              <span
                class="ml-2 text-capitalize"
                v-for="(genre, index) in genres"
                :key="'genre' + index"
                >{{ genre + (genres.length - 1 > index ? ", " : "") }}
              </span>
            </div>

            <!-- buttons -->
            <div class="d-flex align-items-center justify-content-between pt-3">
              <div>
                <button
                  class="btn btn-empty"
                  v-b-tooltip.hover
                  title="Add to Watch List"
                >
                  <i class="fa fa-plus-square"></i>
                </button>

                <button
                  class="btn btn-empty"
                  v-b-tooltip.hover
                  title="Add to Favorite List"
                >
                  <i class="fa fa-heart"></i>
                </button>
                <button
                  class="btn btn-empty"
                  v-b-tooltip.hover
                  title="Share with friends"
                >
                  <i class="fa fa-share-alt"></i>
                </button>
              </div>

              <div class="">
                <button
                  class="btn btn-primary"
                  @click.prevent="$router.push('/movies/movie-detail')"
                >
                  <i class="fa fa-play mr-1" aria-hidden="true" />
                  Play Now
                </button>
              </div>
            </div>
          </div>

          <div class="col-md-7 py-0">
            <div class="">
              <button
                class="btn btn-empty btn-default px-2 py-0 float-right"
                @click="$bvModal.hide('movie-modal')"
              >
                <i class="fa fa-times"></i>
              </button>

              <div>
                <img
                  :src="selectedItem.image"
                  class="img-fluid modal-image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "Upcomming",
  components: {
    VueSlickCarousel,
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
      upCommingSliderOption: {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        edgeFriction: 0.35,

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      selected: false,
      selectedItem: null,
      favIndex: null,
      prevIndex: null,
      isHovering: false,

      genres: ["Action", "Romance", "Drama"],
    };
  },
  mounted() {},
  methods: {
    next() {
      this.$refs.dSlick.next();
    },
    prev() {
      this.$refs.dSlick.prev();
    },

    selectItem(item, index) {
      this.favIndex = index;

      this.selectedItem = item;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../../../assets/css/home-sections/home-sections.scss");
</style>
