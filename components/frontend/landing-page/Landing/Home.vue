<template>
  <div>
    <!-- for background image-->
    <div id="background">
      <!-- overlay-->
      <div id="overlay"></div>

      <div class="caption">
        <!--email signup-->
        <div class="inner-caption">
          <h1 class="mb-2">
            Boundless African Movies, TV shows, and Expect more...
          </h1>
          <h2 class="mt-3">Watch Anywhere. Cancel anytime.</h2>
          <form class="email-form" @submit.prevent="submitEmail">
            <h3 class="email-title mx-4 mx-md-auto mx-lg-auto">
              Ready to watch? Enter your email to begin your journey with BBTV.
            </h3>

            <div class="form-group">
              <ValidationProvider
                v-slot="{ errors }"
                vid="email"
                name="email"
                rules="email"
              >
                <div class="input-group mb-3">
                  <input
                    type="email"
                    name="email-signup"
                    v-model="email"
                    class="form-control email-input"
                    :class="'mb-0' + (errors.length > 0 ? ' is-invalid' : '')"
                    placeholder="E-mail"
                    aria-describedby="email-append"
                  />

                  <div class="input-group-append">
                    <button
                      class="btn btn-primary px-3 align-items-center d-flex"
                      id="email-append"
                      type="submit"
                    >
                      Get Started &nbsp;<i class="fas fa-angle-right"></i>
                    </button>
                  </div>

                  <div class="invalid-feedback">
                    <span>{{ errors[0] }}</span>
                  </div>
                </div>
              </ValidationProvider>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="divider"></div>
    <!-- <div  class="container"> -->
    <!--The advert section below the fisherman's dairy image-->
    <div class="cruise row">
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

    <div class="cruise row">
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

    <div class="row bg-black">
      <div class="col-12 text-center">
        <h2 class="py-3 mt-3 mb-0">
          <!-- style="z-index: 10px; font-weight: bold; font-size: 25px; margin: 10px" -->
          Frequently Asked Questions.
        </h2>

        <faq></faq>

        <form class="email-form pb-5" @submit.prevent="submitEmail">
          <h3 class="email-title mx-md-auto mx-lg-auto mx-4">
            Ready to watch? Enter your email to start your journey with BBTV.
          </h3>
          <div class="form-group">
            <ValidationProvider
              v-slot="{ errors }"
              vid="email_"
              name="email"
              rules="email"
            >
              <div class="input-group mb-3">
                <input
                  type="email"
                  name="email-signup"
                  v-model="email_"
                  class="form-control email-input"
                  :class="'mb-0' + (errors.length > 0 ? ' is-invalid' : '')"
                  placeholder="E-mail"
                  aria-describedby="email-append"
                />

                <div class="input-group-append">
                  <button
                    class="btn btn-primary px-3 align-items-center d-flex"
                    id="email-append"
                  >
                    Get Started &nbsp;<i class="fas fa-angle-right"></i>
                  </button>
                </div>

                <div class="invalid-feedback">
                  <span>{{ errors[0] }}</span>
                </div>
              </div>
            </ValidationProvider>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Faq from "./FAQ.vue";
import { mapMutations } from "vuex";
import { extend } from "vee-validate";
import { email } from "vee-validate/dist/rules.umd";

extend("email", email);

export default {
  middleware: "redirect",
  layout: "default",

  components: {
    Faq,
  },

  head() {
    return {
      bodyAttrs: {
        class: "landing-layout",
      },
      script: [
        // {
        //   src: "landing/main.js",
        // },
      ],
      link: [
        // {
        //    rel: "stylesheet",
        //   href: "css/custom.css",
        // }
      ],
    };
  },

  data() {
    return {
      email: "",
      email_: "",
    };
  },

  methods: {
    ...mapMutations(["setSignUpEmail"]),

    submitEmail() {
      if (this.email || this.email_) {
        if (this.email) {
          console.log("input email:", this.email);

          this.setSignUpEmail(this.email);
        } else if (this.email_) {
          this.setSignUpEmail(this.email_);
          console.log("input email:", this.email_);
        }

        this.$router.push({ name: "signup-password" });
      }
    },
  },
};
</script>

<style scoped>
@import url("../../../../assets/css/landing-page/design.css");

* {
  overflow: hidden;
}

.bg-black {
  background: #000;
}

.btn {
  font-weight: 500 !important;
}

.form-control.email-input {
  height: auto;
  color: var(--iq-primary);
  width: 350px;
  font-size: 16px;
  background: transparent !important;
  padding: 0px 13px;
  font-weight: 500;
  font-size: 17px;
}

.email-form {
  margin-top: 0.7em;
}

.email-form > .form-group {
  max-width: 600px;
  padding: 0.85rem;
  margin: 0 auto;
}

.email-title {
  padding: 0 5%;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 400;
}

.ready {
  font-size: 17px;
  padding-top: 5px;
}

.form-control.email-input:focus {
  box-shadow: none;
  border-color: var(--iq-primary);
}

.caption {
  padding: 70px 45px;
  top: 3.5em;
  position: absolute;
  text-align: center;
  right: 0;
  left: 0;
  font-size: 1.625rem !important;
}

.inner-caption {
  position: relative;
  width: 100%;
  padding: 75px 0;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  font-weight: 400;
}

.caption h1,
.caption h2 {
  max-width: 640px;
  margin: 0 auto;
}

.caption h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.7em;
}

.caption h2 {
  font-size: 1.4rem;
}

.caption h3,
.email-form h3 {
  font-size: 1.2rem;
}

div.invalid-feedback {
  text-align: left;
  font-size: 0.7rem;
  text-transform: capitalize;
}

@media (max-width: 768px) {
  .caption {
    padding-left: 0.5em;
    padding-right: 0.5em;
    top: 1.5em;
  }

  .caption h1 {
    font-size: 1.3rem;
  }

  .caption h2 {
    font-size: 1.1rem;
  }

  .caption h3,
  .email-form h3 {
    font-size: 0.9rem;
  }

  .input-group-append {
    margin: 0 auto;
  }
}

@media (min-width: 499px) and (max-width: 546px) {
  .form-control.email-input {
    margin-bottom: 15px;
  }
}

@media (max-width: 500px) {
  #background {
    height: 516px;
  }

  .caption {
    padding-left: 1.5em;
    padding-right: 1.5em;
    top: 1em;
  }

  .form-control.email-input {
    margin-bottom: 10px;
  }

  .caption h1 {
    font-size: 1.1rem;
  }

  .caption h2 {
    font-size: 0.9rem;
  }

  .caption h3,
  .email-form h3 {
    font-size: 0.8rem;
  }

  .input-group-append {
    margin: 5px auto;
  }

  .email-form h3 {
  }
}
</style>