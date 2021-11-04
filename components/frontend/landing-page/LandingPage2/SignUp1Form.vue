<template>
  <ValidationObserver ref="form">
    <div>
      <b-alert show variant="danger" v-if="errorMessage">{{
        errorMessage
      }}</b-alert>
    </div>
    <form class="mt-4" novalidate @submit.prevent="submitForm">
      <!-- <ValidationProvider
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
      </ValidationProvider> -->
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
      <ValidationProvider
        v-slot="{ errors }"
        vid="acceptTerms"
        name="terms"
        :rules="{ required: { allowFalse: false } }"
      >
        <div class="custom-control custom-checkbox mb-3">
          <input
            :id="formType"
            type="checkbox"
            class="custom-control-input"
            name="terms"
            v-model="user.acceptTerms"
          />

          <label class="custom-control-label" :for="formType"
            >I accept the

            <b-link @click="modalShow = !modalShow" class="text-primary"
              >Terms and Conditions</b-link
            >
          </label>

          <div class="text-danger mt-n2">
            <small>{{ errors[0] }}</small>
          </div>
        </div>
      </ValidationProvider>

      <b-button
        variant="primary"
        class="btn-block py-2 border-0"
        type="submit"
        :disabled="loading"
      >
        <b-spinner small v-if="loading"></b-spinner>
        <span v-if="!this.loading">Sign Up</span>
        <!-- <span v-else>Sign Up...</span> -->
      </b-button>
    </form>

    <b-modal
      v-model="modalShow"
      scrollable
      title="Terms and Conditions"
      header-bg-variant="dark"
      header-text-variant="light"
      footer-bg-variant="dark"
      footer-text-variant="light"
      :cancel-disabled="true"
    >
      <p class="my-4" v-for="i in 20" :key="i">
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>

      <template #modal-footer="{ ok, hide }">
        <b-button size="md" variant="outline-secondary" @click="hide('forget')">
          Ignore
        </b-button>

        <b-button
          size="md"
          variant="primary"
          @click="
            ok();
            user.acceptTerms = true;
          "
          >Accept
        </b-button>
      </template>
    </b-modal>
  </ValidationObserver>
</template>

<script>
import { extend } from "vee-validate";
import { required, email, min, allowFalse } from "vee-validate/dist/rules.umd";
import firebase from "firebase/app";
import "firebase/auth";
import { mapGetters } from "vuex";
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
      valid: value.length >= 6,
    };
  },
  message: "Must be at least 6 characters",
  computesRequired: true,
});

extend("allowFalse", {
  validate(value) {
    return {
      allowFalse: false,
      valid: value == true,
    };
  },
  message: "You must accept terms and conditions",
});

export default {
  name: "SignUp1Form",
  props: ["formType"],
  data: () => ({
    user: {
      email: "",
      password: "",
      acceptTerms: false,
    },
    formErrors: "",
    errorMessage: "",
    loading: false,
    modalShow: false,
  }),

  computed: {
    ...mapGetters(["getSignUpEmail"]),
  },

  methods: {
    submitForm() {
      if (this.user.email && this.user.password && this.user.acceptTerms) {
        this.loading = true;
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then((user) => {
            this.loading = false;
            console.log("user on firebase:", user);

            this.$router.push("/signup/plan");
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

  mounted() {
    this.user.email = this.getSignUpEmail;
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