<template>
  <div id="next-body">
    <button id="yellowcircle">
      <i
        class="fa fa-check"
        aria-hidden="true"
        style="color: yellow; font-size: 40px"
      ></i>
    </button>
    <br />
    <!--contains the password, confirm password-->
    <span>STEP 1 0F 3</span>
    <br />
    <span>
      <b> WELCOME BACK!</b>
    </span>
    <br />

    <div id="passwordbox">
      Enter your password and you will soon be Watching.
      <br />

      <input
        id="password"
        class="password"
        type="password"
        name="password"
        placeholder="Password"
        required
        minlength="6"
      />
      <input
        id="confirm"
        class="password"
        type="password"
        name="confirm
            password"
        placeholder="Confirm Password"
        required
      />
      <!-- An element to toggle between password visibility -->
      <a
        href="/signup/plan"
        type="submit"
        id="next-button"
        class="btn btn-primary btn-link"
        >next</a
      >
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "landing/password.js",
        },
      ],
    };
  },
  data() {
    return {
      password: "",
    };
  },

  methods: {
    submitPassword() {
      console.log("input email:", this.password);
    },
  },
};
</script>


<style scoped>
@import url("../../../../assets/css/landing-page/design.css");
</style>