<template>
  <div>
    <!-- for background image-->
    <div id="background">
      <!-- overlay-->
      <div id="overlay"></div>

      <div id="caption">
        Boundless African Movies,<br />
        TV shows, and Expect<br />
        more...<br />
        <div class="ready">
          Ready to watch? Enter your email to start your journey with BBTV.
        </div>
        <!--email signup-->
        <div id="email" class>
          <div class="d-flex align-items-center justify-content-center">
            <div class="form-group">
              <div class="input-group">
                <input
                  type="email"
                  name="email-signup"
                  id=""
                  class="form-control email-form"
                  placeholder="E-mail"
                />

                <div class="input-group-append">
                  <button class="btn btn-primary px-3">
                    Get Started &nbsp;<i class="fas fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="divider"></div>
    <!-- <div  class="container"> -->
    <!--The advert section below the fisherman's dairy image-->
    <div id="cruise" class="row">
      <div class="col-md-6">
        <div class="" id="cruise1">
          Cruise on all devices<br />
          <span style="font-size: 15px"
            >Get access on Android, Iphone and Desktop</span
          >
        </div>
      </div>
      <div class="col-md-6">
        <img
          src="../../../../assets/css/landing-page/images/android.gif"
          width="200px"
        />
      </div>
    </div>

    <!-- </div> -->
    <div class="divider"></div>

    <div id="cruise" class="row">
      <div class="col-md-6">
        <img
          src="../../../../assets/css/landing-page/images/download.gif"
          width="200px"
        />
      </div>
      <div class="col-md-6" id="cruise1">
        Download shows to watch offline.<br /><span style="font-size: 15px">
          Save your favourites easily.</span
        >
      </div>
    </div>

    <div class="divider"></div>

    <div id="cruise">
      <div
        style="z-index: 10px; font-weight: bold; font-size: 25px; margin: 10px"
      >
        Frequently Asked<br />
        Question.
      </div>
      <faq></faq>

      <div class="pb-2 ready">
        Ready to watch? Enter your email to start your journey with BBTV.
      </div>
      <div class="d-flex align-items-center justify-content-center">
        <div class="form-group">
          <div class="input-group">
            <input
              type="email"
              name="email-signup"
              id=""
              class="form-control email-form"
              placeholder="E-mail"
            />

            <div class="input-group-append">
              <button class="btn btn-primary px-3">
                Get Started &nbsp;<i class="fas fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Faq from "./FAQ.vue";

export default {
  middleware: "redirect",

  components: {
    Faq,
  },

  head() {
    return {
      script: [
        {
          src: "landing/main.js",
        },
      ],
    };
  },

  data() {
    return {
      email: "",
    };
  },

  methods: {
    submitEmail() {
      console.log("input email:", this.email);
      this.$router.push({ name: "signup-password" });
    },
  },
};
</script>

<style scoped>
@import url("../../../../assets/css/landing-page/design.css");
header#main-header {
  position: absolute !important;
}

.form-control.email-form {
  height: auto;
  color: black;
  width: 350px;
  font-size: 16px;
  background: white;
  padding: 0px 12px;
  font-weight: 500;
  font-size: 17px;
  border: none;
}

.ready {
  font-size: 17px;
  padding-top: 5px;
}

.form-control.email-form:focus {
  box-shadow: none;
}

@media (max-width: 768px) {
  #caption {
    padding-left: 3em;
    padding-right: 3em;
    font-size: 1.3rem;
  }

  .form-control.email-form {
    margin-bottom: 15px;
  }
}

@media (max-width: 500px) {
  #caption {
    padding-left: 1.5em;
    padding-right: 1.5em;
    font-size: 1.3rem;
  }

  .ready {
    font-size: 0.75rem !important;
  }
  .input-group-append {
    margin: 5px auto;
  }
  .input-group {
    right: -0.5em;
  }
}
</style>