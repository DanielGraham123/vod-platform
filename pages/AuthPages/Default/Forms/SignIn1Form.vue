<template>
  <ValidationObserver ref="form">
    <div>
      <b-alert show variant="danger" v-if="errorMessage">{{
        errorMessage
      }}</b-alert>
    </div>
    <form class="mt-4" novalidate @submit.prevent="submitForm">
      <ValidationProvider v-slot="{ errors }" vid="email" name="E-mail">
        <div class="form-group">
          <input
            id="emailInput"
            v-model="user.email"
            type="email"
            :class="
              'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')
            "
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" vid="password" name="Password">
        <div class="form-group">
          <input
            id="passwordInput"
            v-model="user.password"
            type="password"
            :class="
              'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')
            "
            placeholder="Password"
            required
          />
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="sign-info">
        <b-button
          variant="primary"
          class="btn-block"
          type="submit"
          :disabled="loading"
        >
          <b-spinner small v-if="loading"></b-spinner>
          <span v-if="!this.loading">Sign in</span>
          <span v-else>Sign in...</span>
        </b-button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
import { extend } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules.umd";
import firebase from "firebase/app";
import "firebase/auth";

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
  name: "SignIn1Form",

  props: ["formType", "email", "password"],

  data: () => ({
    user: {
      email: "",
      password: "",
    },
    formErrors: null,
    loading: false,
    errorMessage: "",
  }),

  computed: {},

  mounted() {
    this.user.email = this.$props.email;
    this.user.password = this.$props.password;
  },

  methods: {
    ...mapMutations(["setUserData"]),
    ...mapActions(["loginAction", "fetchUserProfile"]),

    submitForm() {
      if (this.user.email && this.user.password) {
        this.loading = true;

        firebase
          .auth()
          .signInWithEmailAndPassword(this.user.email, this.user.password)
          .then((user) => {
            console.log("user on firebase:", user);

            this.setUserData(user);
            this.fetchUserProfile(firebase.auth().currentUser.uid).then(
              (resp) => {
                console.log("set user profile", resp);
              }
            );

            this.loading = false;
          })
          .catch((error) => {
            this.loading = false;

            if (error.code == "auth/user-not-found") {
              this.errorMessage = "Incorrect email or password!";
            }

            if (error.code == "auth/wrong-password") {
              this.errorMessage = "Incorrect password!";
            }
            console.log("error logging in ", error);
          });
      }

      console.log("email: ", this.user.email);
      console.log("password: ", this.user.password);
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

.form-control {
  background-color: #141414 !important;
  background-color: var(--iq-body-bg) !important;
  /* border: 1px solid transparent !important; */
  height: 46px !important;
  position: relative;
  color: #d1d0cf;
  color: var(--iq-body-text) !important;
  font-size: 16px;
  width: 100%;
  border-radius: 6px;
}

.form-control:focus {
  background-color: transparent;
}

input.form-control {
  background-color: #141414 !important;
  color: #d1d0cf !important;
}

@media (max-width: 768px) {
  .btn-primary {
    display: block;
    width: 100%;
  }
}
</style>
