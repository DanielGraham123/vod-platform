<template>
  <ValidationObserver ref="form">
    <div>
      <b-alert show variant="danger" v-if="errorMessage">{{
        errorMessage
      }}</b-alert>
    </div>
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
      <b-button
        variant="primary"
        class="btn-block"
        type="submit"
        :disabled="loading"
      >
        <b-spinner small v-if="loading"></b-spinner>
        <span v-if="!this.loading">Sign Up</span>
        <span v-else>Sign Up...</span>
      </b-button>
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
    errorMessage: "",
    loading: false,
  }),
  methods: {
    submitForm() {
      if (this.user.email && this.user.password && this.user.name) {
        this.loading = true;
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then((user) => {
            this.loading = false;
            console.log("user on firebase:", user);

            this.$router.push("/home");
          })
          .catch((error) => {
            this.loading = false;

            if (error.code == "auth/invalid-email") {
              this.errorMessage = "Incorrect email and password!";
            } else {
              this.errorMessage = error.message;
            }

            this.formErrors = error;
            console.log("form errors: ", this.formErrors);
          });
        console.log("email: ", this.user.email);
        console.log("password: ", this.user.password);
      }
    },
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #ffc107 !important;
  border-color: #ffc107 !important;
  color: black;
  font-weight: 500;
}

.btn-primary:hover {
  background-color: #dabf34 !important;
  border-color: #dabf34 !important;
}

.alert-danger {
  color: var(--red) !important;
  background-color: transparent !important;
  border-color: var(--red) !important;
}

@media (max-width: 768px) {
  .btn-primary {
    display: block;
    width: 100%;
  }
}
</style>