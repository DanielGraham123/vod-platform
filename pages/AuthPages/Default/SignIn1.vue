<template>
  <div class="sign-in-form">
    <b-container>
      <b-row
        class="justify-content-center align-items-center height-self-center"
      >
        <b-col lg="5" md="12" class="align-self-center">
          <div class="sign-user_card">
            <div class="sign-in-page-data">
              <div class="sign-in-from w-100 m-auto">
                <h3 class="mb-3 text-center">Sign in</h3>
                <sign-in1-form form-type="jwt" email="" password="" />
              </div>
            </div>
            <div class="mt-3">
              <div class="d-flex justify-content-center links">
                Don't have an account?
                <nuxt-link to="/auth/signup" class="text-primary ml-2">
                  Sign Up
                </nuxt-link>
              </div>
              <div class="d-flex justify-content-center links">
                <nuxt-link
                  to="/AuthPages/Default/RecoverPassword1"
                  class="f-link"
                >
                  Forgot your password?
                </nuxt-link>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SignIn1Form from "./Forms/SignIn1Form";
export default {
  // layout: "FrontLayout",
  name: "SignIn1",
  components: { SignIn1Form },
  head() {
    return {
      bodyAttrs: {
        class: "signin-layout",
      },
    };
  },
  data: () => ({}),
  mounted() {
    const loggedIn = localStorage.getItem("access_token");
    if (loggedIn !== undefined && loggedIn !== null) {
      this.$router.push({ name: "mini.dashboard.home-2" });
    }
  },
};
</script>

<style lang="scss" scoped>
.signin-layout {
  &::v-deep {
    @import url("../../../assets/css/backend/typography.css");
    @import url("../../../assets/css/custom.css");
    @import url("../../../assets/css/backend/variable.css");
    @import url("../../../assets/css/backend/dark.css");
    @import url("../../../assets/css/backend/responsive.css");
    @import url("../../../assets/css/backend/style.css");
  }
}

.alert-danger {
  color: var(--red) !important;
  background-color: transparent !important;
  border-color: var(--red) !important;
}

h3 {
  color: var(--iq-primary) !important;
}

.height-self-center {
  height: 100vh;
  border-radius: 15px;
}

.sign-in-form {
  height: 100vh;
  position: relative;
  background: url(../../../assets/images/login/login.jpg) no-repeat scroll 0 0;
  background-size: cover;
}

.form-control {
  background-color: #141414 !important;
  background-color: var(--iq-body-bg) !important;
  border: 1px solid transparent !important;
  height: 46px !important;
  position: relative;
  color: #d1d0cf;
  color: var(--iq-body-text) !important;
  font-size: 16px;
  width: 100%;
  border-radius: 6px;
}

.form-control:focus {
  color: #d1d0cf !important;

  background-color: #141414 !important;
  background-color: var(--iq-body-bg) !important;
}

input.form-control {
  background-color: #141414 !important;
  color: #d1d0cf !important;
}

/* .form-control:focus {
  background: transparent;
  box-shadow: none;
  border: 1px solid #ffc107;
  border: 1px solid var(--iq-primary);
} */
</style>


