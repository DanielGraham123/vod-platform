<template>
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

                  <b-tab title="Account Settings">
                    <!-- Account settings form -->
                    <form @submit.prevent="submitSettings" class="row pt-3">
                      <!-- Profile image Settings -->
                      <div class="col-md-2 mt-3 profile-wrapper">
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
                      <div class="col-md-10 row">
                        <div class="form-group col-12 col-md-6">
                          <label>Username</label>
                          <input
                            type="text"
                            class="form-control mb-0"
                            id="username-set"
                            placeholder="Your Username"
                            autocomplete="off"
                            v-model="username"
                            required
                          />
                        </div>

                        <div class="form-group col-12 col-md-6">
                          <label>Email Address</label>
                          <input
                            type="email"
                            class="form-control mb-0"
                            id="email-set"
                            placeholder="Your Email address"
                            autocomplete="off"
                            v-model="email"
                            required
                          />
                        </div>

                        <div class="form-group col-12 col-md-6">
                          <label>New Password</label>
                          <input
                            type="password"
                            class="form-control mb-0"
                            id="password-set"
                            placeholder="Change Your Password"
                            autocomplete="off"
                            v-model="password"
                            required
                          />
                        </div>

                        <div class="form-group col-12 col-md-6">
                          <label>Confirm Password</label>
                          <input
                            type="password"
                            class="form-control mb-0"
                            id="confirm-set"
                            placeholder="Confirm Your Password"
                            autocomplete="off"
                            v-model="confirmPassword"
                            required
                          />
                        </div>

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
</template>
<script>
import { core } from "../../../../assets/app/app";
import firebase from "firebase/app";
import "firebase/auth";
import { mapGetters, mapActions } from "vuex";

import { db } from "../../../../plugins/firebase.js";
// import Datepicker from "vuejs-datepicker";

export default {
  layout: "FrontendLayout",

  name: "ManageProfile",

  components: {
    // Datepicker,
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
        this.username = this.getUserInfo.displayName;
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