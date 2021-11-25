<template>
  <div data-spy="scroll" data-offset="80" class="front-layout">
    <frontendnav
      :items="headerItem"
      :userprofile="profile"
      :home-u-r-l="url"
      :logo="logo"
      v-if="$route.name != 'pricing-plan'"
    />

    <nuxt />
    <Footer :copyrighttext="text" v-if="$route.name != 'pricing-plan'">
      <template v-slot:column1>
        <ul class="f-link list-unstyled mb-0">
          <li><a href="#">About Us</a></li>
          <li>
            <nuxt-link to="/tv-shows"> Movies </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/tv-shows"> Tv Shows </nuxt-link>
          </li>
          <li><a href="#">Coporate Information</a></li>
        </ul>
      </template>
      <template v-slot:column2>
        <ul class="f-link list-unstyled mb-0">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </template>
      <template v-slot:column3>
        <ul class="f-link list-unstyled mb-0">
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Cotact Us</a></li>
          <li><a href="#">Legal Notice</a></li>
        </ul>
      </template>
      <template v-slot:icons>
        <div class="d-flex">
          <a href="#" class="s-icon">
            <i class="ri-facebook-fill" />
          </a>
          <a href="#" class="s-icon">
            <i class="ri-skype-fill" />
          </a>
          <a href="#" class="s-icon">
            <i class="ri-linkedin-fill" />
          </a>
          <a href="#" class="s-icon">
            <i class="ri-whatsapp-fill" />
          </a>
        </div>
      </template>
    </Footer>
    <ScrollTop />
  </div>
</template>
<script>
import ScrollTop from "../components/core/ScrollTop";
import { core } from "../assets/app/app";
import loader from "../assets/images/logo-full.png";
import profile from "../assets/images/frontend/user/user.jpg";
import { mapMutations, mapGetters } from "vuex";

import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "FrontendLayout",
  head() {
    return {
      bodyAttrs: {
        class: "front-layout",
      },

      //   link: [
      //     {
      //       rel: "stylesheet",
      //       href: "/css/custom.css",
      //     },
      //     {
      //       rel: "stylesheet",
      //       href: "/css/frontend/variable.css",
      //     },
      //     {
      //       rel: "stylesheet",
      //       href: "/css/frontend/dark.css",
      //     },
      //     {
      //       rel: "stylesheet",
      //       href: "/css/frontend/responsive.css",
      //     },
      //     {
      //       rel: "stylesheet",
      //       href: "/css/frontend/style.css",
      //     },

      //     {
      //       rel: "stylesheet",
      //       href: "/css/frontend/typography.css",
      //     },
      //   ],
    };
  },
  data() {
    return {
      profile,
      text: "BBTV - 2021 All Rights Reserved",
      url: "/",
      logo: loader,
      user: null,
      headerItem: [
        { title: "Home", link: "/home", icon: "fa-home" },
        { title: "Movies", link: "/movies", icon: "fa-film" },
        { title: "Tv Shows", link: "/tv-shows", icon: "fa-tv" },
        { title: "Tv Channels", link: "/tv-shows", icon: "fa-tv" },
      ],
    };
  },

  computed: {
    ...mapGetters(["getUserToken"]),
  },

  methods: {
    ...mapMutations(["setUserToken", "setUserData"]),
  },

  mounted() {
    core.index();

    firebase.auth().onAuthStateChanged((user) => {
      console.log("logged in user: ", user);

      if (user) {
        user
          .getIdToken(true)
          .then((idToken) => {
            var userInfo = {
              token: idToken,
              uid: user.uid,
            };
            this.setUserData(user);
            this.setUserToken(userInfo);
            console.log("logged in user token: ", userInfo);
            console.log("logged in use r token GET: ", this.getUserToken);
          })
          .catch(function (error) {
            console.log("error logging in: ", error);
          });

        this.user = user;
      }
    });
  },
  head() {
    return {
      bodyAttrs: {
        "data-spy": "scroll",
        "data-offset": "80",
        class: "front-layout",
      },
    };
  },
};
</script>
<style lang="scss">
.front-layout {
  &::v-deep {
    @import url("../assets/css/frontend/typography.css");
    @import url("../assets/css/custom.css");
    @import url("../assets/css/frontend/dark.css");
    @import url("../assets/css/frontend/variable.css");
    @import url("../assets/css/frontend/style.css");
    @import url("../assets/css/frontend/responsive.css");
    @import url("../assets/css/developer.css");
  }

  .btn-primary {
    background-color: var(--iq-primary) !important;
    border-color: var(--iq-primary) !important;
    color: black;
    font-weight: 500;
  }

  .btn-primary:hover {
    background-color: var(--iq-primary-hover) !important;
    border-color: var(--iq-primary-hover) !important;
  }

  legend {
    font-weight: 400;
  }

  .custom-control-label {
    color: #d1d0cf !important;
  }

  input.form-control[readonly].dpp {
    background-color: transparent !important;
    opacity: 1;
  }

  .vdp-datepicker__calendar .cell.selected {
    background: var(--iq-primary) !important;
    color: var(--iq-body-bg);
  }

  .vdp-datepicker__calendar {
    font-weight: 500;
    color: var(--iq-body-text);
  }

  .vdp-datepicker__calendar header .prev:not(.disabled):hover,
  .vdp-datepicker__calendar header .next:not(.disabled):hover,
  .vdp-datepicker__calendar header .up:not(.disabled):hover {
    background: var(--iq-primary) !important;
    color: var(--iq-body-bg) !important;
  }

  .vdp-datepicker__calendar {
    position: absolute;
    z-index: 100;
    background: var(--iq-body-bg) !important;
    width: 300px;
    border: 1px dotted var(--iq-primary) !important;
    color: var(--iq-body-text) !important;
    font-weight: 500;
    /* box-shadow: 2px 3px 2px 2px; */
  }

  .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,
  .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,
  .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
    border: 1px solid var(--iq-primary) !important;
  }

  .vdp-datepicker__calendar header .prev:after {
    border-right: 10px solid #fff !important;
  }

  .vdp-datepicker__calendar header .next:after {
    border-left: 10px solid #fff !important;
    margin-left: 5px;
  }

  li.slide-item {
    position: relative;
    padding: 0 3px !important;
  }

  .img-box > img {
    height: 10em !important;
    width: 100%;
  }

  .owl-carousel .owl-item {
    height: 450px !important;
  }

  .owl-carousel .owl-nav {
    overflow: hidden;
    height: 0px;
  }

  .owl-carousel .nav-btn {
    height: 47px;
    position: absolute;
    width: 26px;
    cursor: pointer;
    top: 196px !important;
  }

  .owl-carousel .owl-prev.disabled,
  .owl-carousel .owl-next.disabled {
    pointer-events: none;
    opacity: 0.2;
  }

  .owl-carousel .prev-slide {
    // background: url(~@/assets/icon/nav-icon.png) no-repeat scroll 0 0;
    left: 19px;
    font-size: 25px;
  }
  .owl-carousel .next-slide {
    // background: url(~@/assets/icon/nav-icon.png) no-repeat scroll -24px 0px;
    right: 19px;
    font-size: 25px;
  }
  .owl-carousel .prev-slide:hover {
    background-position: 0px -53px;
  }
  .owl-carousel .next-slide:hover {
    background-position: -24px -53px;
  }

  .section_bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 450px;
    z-index: -1;
  }

  .owl-nav .owl-next {
    position: inherit;
    left: 0;
  }

  .owl-nav .owl-prev {
    position: inherit;
    right: 0;
  }

  @media (max-width: 600px) {
    .img-box > img {
      height: auto !important;
    }
  }

  .btn-float {
    color: var(--iq-light);
  }

  .btn-float:hover {
    color: var(--iq-primary);
  }

  .btn-float.btn:focus {
    outline: 0;
    box-shadow: none !important;
  }

  .modal-content {
    border: none !important;
  }

  .modal-header {
    align-items: center !important;
    border-bottom: none;
  }

  #iq-favorites .bg-dark,
  #iq-tv-shows .bg-dark {
    background-color: var(--iq-black) !important;
  }

  .bg-black {
    background-color: var(--iq-body-bg) !important;
  }

  .bg-selected {
    background: linear-gradient(90deg, #000000ad 50%, transparent);
  }

  .modal-body.bg-black {
    background-color: var(--iq-body-bg) !important;
  }

  @media (min-width: 768px) {
    li.slide-item:first-child:hover .block-images {
      width: 225px;
    }

    li.slide-item:last-child:hover .block-images {
      width: 225px;
    }
  }
}
</style>
