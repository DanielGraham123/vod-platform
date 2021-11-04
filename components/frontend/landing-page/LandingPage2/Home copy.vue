<template>
  <div id="next-body" class="signup-bg">
    <!-- Step Title -->
    <div class="">
      <button id="yellowcircle">
        <i
          class="fa fa-check"
          aria-hidden="true"
          style="color: yellow; font-size: 40px"
        ></i>
      </button>

      <span>STEP 1 0F 3</span>
      <br />
      <span>
        <b> WELCOME BACK!</b>
      </span>
    </div>
    <!-- Step title end -->

    <form id="passwordbox" @submit.prevent="submitPassword">
      <!-- Enter your password and you will soon be Watching. -->
      <!-- Error message box -->
      <div class="py-3">
        <b-alert show variant="danger" v-if="errorMessage">{{
          errorMessage
        }}</b-alert>
      </div>

      <ValidationProvider
        v-slot="{ errors }"
        rules="required|min:6"
        vid="password"
      >
        <div class="form-group">
          <input
            id="password"
            class="password form-control"
            type="password"
            name="password"
            ref="password"
            v-model="password"
            :class="'mb-0' + (errors.length > 0 ? ' is-invalid' : '')"
            placeholder="Password"
          />
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors }"
        vid="confirmPassword"
        name="Confirm Password"
        rules="required|confirmed:password"
      >
        <div class="form-group">
          <input
            id="confirm"
            class="password form-control"
            :class="'mb-0' + (errors.length > 0 ? ' is-invalid' : '')"
            type="password"
            name="password_confirmation"
            v-model="confirmPassword"
            placeholder="Confirm Password"
          />
          <div class="invalid-feedback">
            <span> {{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>

      <!-- An element to toggle between password visibility -->
      <!-- <a
        href=""
        type="submit"
        id="next-button"
        class="btn btn-primary btn-link"
        >next</a
      > -->

      <button class="btn btn-primary btn-block" type="submit">Next</button>
    </form>
  </div>
</template>

<script>
import { extend } from "vee-validate";
import { required, confirmed, min } from "vee-validate/dist/rules.umd";

extend("required", {
  ...required,
  message: "This field is required",
});
extend("min", {
  validate(value) {
    return {
      min: true,
      valid: value.length >= 6,
    };
  },
  message: "Must be at least 6 characters",
  computesRequired: true,
});
extend("confirmed", {
  ...confirmed,
  message: "Passwords don't match",
});
// extend("email", email);

export default {
  middleware: "redirect",
  layout: "default",

  head() {
    return {
      script: [
        {
          // src: "landing/password.js",
          src: "https://unpkg.com/vee-validate@<3.0.0",
        },
      ],
    };
  },
  data() {
    return {
      password: "",
      confirmPassword: "",
      errorMessage: "",
    };
  },

  methods: {
    submitPassword() {
      console.log("input password:", this.password);

      // this.$router.push("/signup/plan");
    },
  },
};
</script>


<style scoped>
@import url("../../../../assets/css/landing-page/design.css");

.signup-bg {
  padding: 50px 50px;
  position: relative;
  background: url(../../../../assets/images/login/login.jpg) no-repeat scroll 0
    0;
  background-size: cover;
}
</style>