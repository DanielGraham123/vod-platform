<template>
  <div class="sign-up-form">
    <b-container>
      <b-row
        class="justify-content-center align-items-center height-self-center"
      >
        <b-col lg="5" md="12" class="align-self-center">
          <div class="sign-user_card">
            <div class="sign-in-page-data">
              <div class="sign-in-from w-100 m-auto">
                <h3 class="mb-3 text-center">Sign Up</h3>
                <sign-up1-form form-type="jwt" />
              </div>
            </div>
            <div class="mt-3">
              <div class="d-flex justify-content-center links">
                Already have an account?
                <nuxt-link to="/auth/login" class="text-primary ml-2">
                  Sign in
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
import SignUp1Form from "./Forms/SignUp1Form";

export default {
  name: "SignUp1",

  // layout: "AuthLayout",

  components: { SignUp1Form },
  data: () => ({}),
  methods: {},
};
</script>

<style scoped>
@import url("../../../assets/css/backend/typography.css");

@import url("../../../assets/css/custom.css");
@import url("../../../assets/css/backend/variable.css");
@import url("../../../assets/css/backend/dark.css");
@import url("../../../assets/css/backend/responsive.css");
@import url("../../../assets/css/backend/style.css");

h3 {
  color: var(--iq-primary);
}

.height-self-center {
  height: 100vh;
  border-radius: 15px;
}

.sign-up-form {
  height: 100vh;
  position: relative;
  background: url(../../../assets/images/login/login.jpg) no-repeat scroll 0 0;
  background-size: cover;
}

.form-control {
  background-color: #141414;
  /* background-color: var(--iq-body-bg); */
  border: 1px solid transparent;
  height: 46px;
  position: relative;
  color: #d1d0cf;
  color: var(--iq-body-text);
  font-size: 16px;
  width: 100%;
  border-radius: 6px;
}
</style>
