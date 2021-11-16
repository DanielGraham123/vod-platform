<template>
  <div>
    <loader></loader>
    <section class="m-profile manage-p">
      <div class="container h-100">
        <div class="row align-items-center justify-content-center h-100">
          <div class="col-lg-10">
            <div class="sign-user_card">
              <div class="row">
                <!-- <div class="col-lg-2"> -->

                <!-- </div> -->
                <div class="col-lg-12 device-margin">
                  <b-tabs
                    fill
                    content-class="mt-3"
                    active-nav-item-class="font-weight-bold text-uppercase bg-transparent"
                    active-tab-class="font-weight-bold text-primary"
                  >
                    <!-- Manage Profile tab -->
                    <b-tab title="Manage Profile" active title-link-class="">
                      <div class="row">
                        <!-- Profile Info -->
                        <div class="col-md-12 mt-3">
                          <div class="profile-from">
                            <div>
                              <b-alert
                                show
                                variant="danger"
                                v-if="errorMessage"
                                >{{ errorMessage }}</b-alert
                              >
                            </div>

                            <div>
                              <b-alert
                                show
                                variant="success"
                                v-if="successMessage"
                                v-model="showDismissibleAlert"
                                dismissible
                                >{{ successMessage }}</b-alert
                              >
                            </div>

                            <form class="row" @submit.prevent="submitProfile">
                              <!-- First Name -->
                              <div class="form-group col-md-6 col-12">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  class="form-control mb-0"
                                  id="exampleInputl2"
                                  placeholder="Your First Name"
                                  autocomplete="off"
                                  v-model="firstName"
                                  required
                                />
                              </div>

                              <!-- Last Name -->
                              <div class="form-group col-md-6 col-12">
                                <label> Last Name</label>
                                <input
                                  type="text"
                                  class="form-control mb-0"
                                  id="exampleInputl2"
                                  placeholder="Your Last Name"
                                  autocomplete="off"
                                  v-model="lastName"
                                  required
                                />
                              </div>

                              <!-- Date of Birth -->
                              <div class="form-group col-md-6 col-12">
                                <label class="" for="datepicker-dateformat2"
                                  >Date Of Birth</label
                                >
                                <client-only>
                                  <date-picker
                                    ref="programaticOpen"
                                    v-model="dob"
                                    format="dd-MM-yyyy"
                                    placeholder="dd-MM-yyyy"
                                    input-class="form-control dpp"
                                    calendar-class="shadow-sm "
                                    wrapper-class="dp"
                                    :bootstrap-styling="true"
                                  ></date-picker>
                                </client-only>

                                <!-- <p>Value: '{{ dob }}'</p> -->
                              </div>

                              <!-- Phone Number -->
                              <div class="form-group col-md-6 col-12">
                                <label>Phone Number</label>
                                <input
                                  type="number"
                                  class="
                                    form-control
                                    date-input
                                    basicFlatpickr
                                    mb-0
                                  "
                                  v-model="phoneNumber"
                                  placeholder="Your Phone Number"
                                  id="phone-number"
                                />
                              </div>

                              <!-- Male or Female -->
                              <b-form-group
                                label="Gender"
                                v-slot="{ ariaDescribedby }"
                                class="col-md-6 col-12"
                              >
                                <b-form-radio-group
                                  v-model="selectedGender"
                                  :aria-describedby="ariaDescribedby"
                                  name="gender-radios"
                                  :options="genderOptions"
                                  id="gender-group"
                                ></b-form-radio-group>

                                <!-- <div class="mt-3">
                                <strong>{{ selectedGender }}</strong>
                              </div> -->
                              </b-form-group>

                              <div class="form-group col-12 col-md-6 mt-3">
                                <b-button
                                  variant="primary"
                                  class="float-right btnblock"
                                  type="submit"
                                  :disabled="loading"
                                >
                                  <b-spinner small v-if="loading"></b-spinner>
                                  <span v-if="!this.loading">Save Profile</span>
                                  <span v-else>Saving...</span>
                                </b-button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </b-tab>

                    <!-- Account Settings tab -->
                    <b-tab title="Account Settings">
                      <!-- Account settings form -->
                      <form @submit.prevent="submitSettings" class="row pt-3">
                        <div>
                          <b-alert show variant="danger" v-if="errorMessage">{{
                            errorMessage
                          }}</b-alert>
                        </div>

                        <!-- Profile image Settings -->
                        <div class="col-md-2 col-12 mt-3 profile-wrapper">
                          <div class="upload_profile d-inline-block">
                            <img
                              :src="profileImage"
                              class="profile-pic rounded-circle img-fluid"
                              alt="user"
                            />
                            <div class="p-image">
                              <a @click="$refs.profilePic.click()">
                                <i class="ri-pencil-line upload-button"></i>
                              </a>
                              <input
                                class="file-upload"
                                type="file"
                                ref="profilePic"
                                accept="image/*"
                                @change="onFileChange"
                              />
                            </div>
                          </div>
                        </div>

                        <!-- Info settings -->
                        <div class="col-md-10 col-12">
                          <div class="row">
                            <ValidationProvider
                              v-slot="{ errors }"
                              vid="username"
                              name="Username"
                              rules="required|min4:4"
                              class="col-12 col-md-6"
                            >
                              <div class="form-group">
                                <label>Username</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="username-set"
                                  placeholder="Your Username"
                                  autocomplete="off"
                                  v-model="username"
                                  :class="
                                    'mb-0' +
                                    (errors.length > 0 ? ' is-invalid' : '')
                                  "
                                  required
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
                              class="col-12 col-md-6"
                            >
                              <div class="form-group">
                                <label>Email Address</label>
                                <input
                                  type="email"
                                  class="form-control"
                                  id="email-set"
                                  placeholder="Your Email address"
                                  autocomplete="off"
                                  v-model="email"
                                  :class="
                                    'mb-0' +
                                    (errors.length > 0 ? ' is-invalid' : '')
                                  "
                                  required
                                />
                                <div class="invalid-feedback">
                                  <span>{{ errors[0] }}</span>
                                </div>
                              </div>
                            </ValidationProvider>

                            <ValidationProvider
                              v-slot="{ errors }"
                              rules="required|min6:6"
                              vid="password"
                              class="col-12 col-md-6"
                            >
                              <div class="form-group">
                                <label>New Password</label>
                                <input
                                  type="password"
                                  class="form-control"
                                  id="password-set"
                                  placeholder="Change Your Password"
                                  autocomplete="off"
                                  v-model="password"
                                  :class="
                                    'mb-0' +
                                    (errors.length > 0 ? ' is-invalid' : '')
                                  "
                                  required
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
                              class="col-12 col-md-6"
                            >
                              <div class="form-group">
                                <label>Confirm Password</label>
                                <input
                                  type="password"
                                  class="form-control mb-0"
                                  id="confirm-set"
                                  placeholder="Confirm Your Password"
                                  autocomplete="off"
                                  v-model="confirmPassword"
                                  :class="
                                    'mb-0' +
                                    (errors.length > 0 ? ' is-invalid' : '')
                                  "
                                  required
                                />
                                <div class="invalid-feedback">
                                  <span> {{ errors[0] }}</span>
                                </div>
                              </div>
                            </ValidationProvider>

                            <div class="form-group col-12 col-md-6 my-auto">
                              <b-form-checkbox
                                id="checkbox-1"
                                v-model="acceptNews"
                                name="checkbox-1"
                                value="accepted"
                                unchecked-value="not_accepted"
                                class="mb-3"
                              >
                                Subscribe to newsletters?
                              </b-form-checkbox>

                              <!-- <div>
                          State: <strong>{{ acceptNews }}</strong>
                        </div> -->
                            </div>

                            <div class="form-group col-12 col-md-6 mt-3">
                              <b-button
                                variant="primary"
                                class="float-md-right btnblock"
                                type="submit"
                                :disabled="loading2"
                              >
                                <b-spinner small v-if="loading2"></b-spinner>
                                <span v-if="!this.loading2">Save Changes</span>
                                <span v-else>Saving...</span>
                              </b-button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </b-tab>
                  </b-tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { core } from "../../../../assets/app/app";
import firebase from "firebase/app";
import "firebase/auth";
import { mapGetters, mapActions } from "vuex";
import Loader from "../../../../components/core/loader/Loader";
import { extend } from "vee-validate";
import { required, confirmed, min, length } from "vee-validate/dist/rules.umd";

import { db } from "../../../../plugins/firebase.js";

extend("required", {
  ...required,
  message: "This field is required",
});

extend("min4", {
  ...min,
  message: "Must be at least 4 characters",
  computesRequired: true,
});

extend("min6", {
  ...min,
  message: "Must be at least 6 characters",
  computesRequired: true,
});

extend("length", {
  ...length,
});

extend("confirmed", {
  ...confirmed,
  message: "Passwords don't match",
});
// extend("email", email);

export default {
  layout: "FrontendLayout",

  name: "ManageProfile",

  components: {
    Loader,
  },
  mounted() {
    core.index();
  },
  data() {
    return {
      genderOptions: [
        { value: "male", text: "Male" },
        { value: "female", text: "Female" },
      ],
      //   config: {
      //     dateFormat: 'Y-m-d'
      //   }
      loading: false,
      loading2: false,
      image: null,
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      firabaseUser: null,
      acceptNews: "not_accepted",
      selectedGender: "",
      fullname: "",
      phoneNumber: "",
      firstName: "",
      lastName: "",
      dob: new Date(),
      errorMessage: "",
      errorMessage2: "",
      successMessage: "",
      showDismissibleAlert: false,
    };
  },

  computed: {
    ...mapGetters(["getUserInfo", "getUserProfile"]),

    profileImage() {
      return this.image
        ? this.image
        : require("../../../../assets/images/frontend/user/user.jpg");
    },
  },

  methods: {
    ...mapActions(["logoutAction", "fetchUserProfile"]),

    submitProfile() {
      console.log("working on profile");
      this.loading = true;
      if (this.fullname || this.phoneNumber || this.selectedGender) {
        db.collection("profiles")
          .doc(String("" + this.getUserInfo.uid))
          .set({
            full_name: this.firstName + " " + this.lastName,
            phone_number: this.phoneNumber,
            gender: this.selectedGender,
            dob: this.dob,
          })
          .then((docRef) => {
            this.loading = false;
            this.successMessage = "Your Profile has been updated!";
            console.log("Document written with ID: ", docRef);
          })
          .catch((error) => {
            this.loading = false;
            console.error("Error adding document: ", error);
          });
      }
    },

    submitSettings() {
      this.loading2 = true;
      let fireUser = firebase.auth().currentUser;
      if (
        this.username != this.getUserInfo.displayName ||
        this.email != this.getUserInfo.email
      ) {
        firebase
          .auth()
          .currentUser.updateProfile({
            displayName: this.username,
            // photoURL: this.image ? this.image
          })
          .then(() => {
            console.log("displayName add:", this.username);
            console.log(
              "success update profile:",
              firebase.auth().currentUser.displayName
            );

            this.loading2 = false;

            // this.logoutAction();
          })
          .catch((error) => {
            this.loading2 = false;
            console.log("error update profile:", error);
          });
      } else if (
        (this.username && this.email) ||
        (this.password && this.confirmPassword)
      ) {
        fireUser
          .updatePassword(this.password)
          .then((resp) => {
            this.loading2 = false;
            console.log("updated Password: ", resp);
            console.log("updateing password: ", this.password);
            this.logoutAction();
          })
          .catch((error) => {
            this.loading2 = false;

            if (error.code == "auth/network-request-failed") {
              this.errorMessage2 = "You are offline. Connect to the internet!";
            } else if (error.code == "auth/requires-recent-login") {
              this.errorMessage2 =
                "Please logout and login again before resetting your password.";
            }

            // this.errorMessage2 = error.message;
            console.log("error updating password: ", error);
          });
      }
    },

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },

    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    openPicker() {
      this.$refs.programaticOpen.showCalendar();
    },
  },

  created() {
    if (this.getUserInfo) {
      if (this.getUserInfo.displayName) {
        this.username = this.getUserInfo.displayName
          ? this.getUserInfo.displayName
          : "";
        this.email = this.getUserInfo.email;

        this.fetchUserProfile(this.getUserInfo.uid)
          .then(() => {
            console.log("profile action: ", this.getUserProfile);

            this.firstName = this.getUserProfile.full_name.split(" ")[0];
            this.lastName = this.getUserProfile.full_name.split(" ")[1];
            this.phoneNumber = this.getUserProfile.phone_number;
            this.selectedGender = this.getUserProfile.gender;
          })
          .catch((error) => {
            console.log("errors in fetchuserprofile: ", error);
          });
      }
      this.username = this.getUserInfo.displayName
        ? this.getUserInfo.displayName
        : "";
      this.email = this.getUserInfo.email;

      console.log("current user: ", this.getUserInfo);
    }
  },
};
</script>


<style lang="scss" scoped>
.upload_profile {
  height: 112px !important;
}

.profile-pic.img-fluid {
  height: 100% !important;
}

.nav-tabs .bg {
  border-bottom: 2px solid var(--iq-white) !important;
}

@media (max-width: 768px) {
  .btnblock {
    width: 100%;
    display: block;
  }

  .profile-wrapper {
    text-align: center;
  }
}

@media (max-width: 600px) {
  .sign-user_card {
    margin-top: 35px;
  }
}
</style>