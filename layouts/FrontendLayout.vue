<template>
  <div data-spy="scroll" data-offset="80">
    <frontendnav
      :items="headerItem"
      :userprofile="profile"
      :home-u-r-l="url"
      :logo="logo"
    />

    <nuxt />
    <Footer :copyrighttext="text">
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
  data() {
    return {
      profile,
      text: "BBTV - 2021 All Rights Reserved",
      url: "/",
      logo: loader,
      user: null,
      headerItem: [
        // { title: "Home", link: "/" },
        { title: "Movies", link: "/movies" },
        { title: "Tv Shows", link: "/tv-shows" },
        { title: "Tv Channels", link: "/tv-shows" },
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
      },
    };
  },
};
</script>
<style>
@import url("../assets/css/frontend/typography.css");

/* @import url("../assets/css/custom.css"); */
@import url("../assets/css/frontend/dark.css");
@import url("../assets/css/frontend/variable.css");
@import url("../assets/css/frontend/style.css");
@import url("../assets/css/frontend/responsive.css");
/* @import url("../assets/css/developer.css"); */
</style>
