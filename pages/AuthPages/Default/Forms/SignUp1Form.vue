<template>
  <ValidationObserver ref="form">
    <form class="mt-4" novalidate @submit.prevent="submitForm">
      <ValidationProvider
        v-slot="{ errors }"
        vid="name"
        name="Name"
        rules="required|min:4"
      >
        <div class="form-group">
          <input
            id="name"
            v-model="user.name"
            type="text"
            :class="
              'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')
            "
            aria-describedby="emailHelp"
            placeholder="Your Name"
          />
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ errors }"
        vid="name"
        name="Email"
        rules="required|email"
      >
        <div class="form-group">
          <input
            id="email"
            v-model="user.email"
            type="email"
            :class="
              'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')
            "
            aria-describedby="emailHelp"
            placeholder="Your E-mail"
          />
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ errors }"
        vid="password"
        name="Password"
        rules="required|min:6"
      >
        <div class="form-group">
          <input
            id="password"
            v-model="user.password"
            type="password"
            :class="
              'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')
            "
            placeholder="Password"
          />
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="custom-control custom-checkbox mb-3">
        <input :id="formType" type="checkbox" class="custom-control-input" />
        <label class="custom-control-label" :for="formType"
          >I accept
          <a href="javascript:void(0)" class="text-primary"
            >Terms and Conditions</a
          ></label
        >
      </div>
      <button type="submit" class="btn btn-hover btn-block">Sign Up</button>
    </form>
  </ValidationObserver>
</template>

<script>
import { extend } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules.umd";
import firebase from "firebase/app";
import "firebase/auth";
// import 'firebase/database'
// import firestore from "firebase/firestore";

extend("required", {
  ...required,
  message: "This field is required",
});
extend("email", email);
extend("min", {
  validate(value) {
    return {
      min: true,
      valid: value.length > 4,
    };
  },
  message: "Must be at least 4 characters",
  computesRequired: true,
});

export default {
  name: "SignUp1Form",
  props: ["formType"],
  data: () => ({
    user: {
      name: "",
      email: "",
      password: "",
    },
    formErrors: "",
  }),
  methods: {
    submitForm() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((user) => {
          console.log("user on firebase:", user);

          this.$router.push("/home");
        })
        .catch((error) => {
          this.formErrors = error;
          console.log("form errors: ", this.formErrors);
        });
      console.log("email: ", this.user.email);
      console.log("password: ", this.user.password);
    },
  },
};
</script>

<style scoped>
/* @import url("../../../../assets/css/custom.css");
@import url("../../../../assets/css/backend/variable.css");
@import url("../../../../assets/css/backend/dark.css");
@import url("../../../../assets/css/backend/responsive.css");
@import url("../../../../assets/css/backend/style.css");
@import url("../../../../assets/css/backend/typography.css"); */
</style>