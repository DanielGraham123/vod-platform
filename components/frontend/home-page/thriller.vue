<template>
  <section id="iq-trending" class="">
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
                  TV Thrillers
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
          <div class="tvthrillers-contens">
            <VueSlickCarousel
              class="favorites-slider list-inline row p-0 mb-0"
              ref="dSlick"
              v-bind="sliderOption"
            >
              <li
                v-for="(item, index) in thrillersData"
                :key="'thriller' + index"
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
      body-class="bg-black p-0"
      id="movie-modal"
      v-if="selectedItem"
    >
      <div
        class="container"
        :style="[
          selectedItem.image
            ? {
                background: 'url(' + selectedItem.image + ') left no-repeat',
                width: 'fit-content',
              }
            : { background: '#bbb' },
        ]"
      >
        <div class="row bg-selected">
          <div class="col-md-12 position-absolute">
            <button
              class="btn btn-empty btn-default px-2 py-0 mt-3 float-right"
              @click="$bvModal.hide('movie-modal')"
            >
              <i class="fa fa-times"></i>
            </button>
          </div>

          <div class="col-lg-6 col-md-12 col-12 bg-section">
            <div class="p-4">
              <div>
                <h2 class="mb-4 mt-2 font-weight-bold d-block">
                  {{ selectedItem.title }}
                </h2>
              </div>
              <p class="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia vero est tempora voluptatibus possimus corrupti culpa,
                voluptate accusamus non eveniet voluptatum aliquid error,
                facilis iure dolor nostrum quibusdam vel blanditiis adipisci
                minima architecto consequatur. Odit, ullam? Est sint deleniti
                adipisci error aliquid. Voluptatum maxime quibusdam, nam
                voluptas suscipit delectus explicabo? Voluptatum maxime
                quibusdam, nam voluptas suscipit delectus explicabo?
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
              <div
                class="d-flex align-items-center justify-content-between pt-3"
              >
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
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "Trending",
  components: {
    VueSlickCarousel,
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
      sliderOption: {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        edgeFriction: 0.3,
        touchThreshold: 8,
        centerMode: true,
        centerPadding: "15px",

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
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

      genres: ["Action", "Gospel", "Drama"],
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
@import url("../../../assets/css/home-sections/home-sections.css");
</style>