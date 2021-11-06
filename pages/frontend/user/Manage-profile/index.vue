<template>
  <section class="m-profile manage-p">
    <div class="container h-100">
      <div class="row align-items-center justify-content-center h-100">
        <div class="col-lg-10">
          <div class="sign-user_card">
            <div class="row">
              <div class="col-lg-2">
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
              <div class="col-lg-10 device-margin">
                <div class="profile-from">
                  <h4 class="mb-3">Manage Profile</h4>
                  <form
                    class="mt-4"
                    action="index.html"
                    @submit.prevent="submitProfile"
                  >
                    <div class="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        class="form-control mb-0"
                        id="exampleInputl2"
                        placeholder="Enter Your Name"
                        autocomplete="off"
                        v-model="username"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Date of Birth</label>
                      <input
                        type="text"
                        class="form-control date-input basicFlatpickr mb-0"
                        placeholder="Enter Date"
                        id="exampleInputPassword2"
                      />
                    </div>
                    <div class="form-group d-flex flex-md-row flex-column">
                      <div class="iq-custom-select d-inline-block manage-gen">
                        <select name="cars" class="form-control pro-dropdown">
                          <option value="female">Female</option>
                          <option value="male">Male</option>
                        </select>
                      </div>
                    </div>
                    <div class="d-flex">
                      <b-button
                        variant="primary"
                        class="mr-3"
                        type="submit"
                        :disabled="loading"
                      >
                        <b-spinner small v-if="loading"></b-spinner>
                        <span v-if="!this.loading">Save</span>
                        <span v-else>Saving...</span>
                      </b-button>
                      <button class="btn btn-danger" @click="$router.go(-1)">
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
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

export default {
  layout: "FrontendLayout",
  name: "ManageProfile",
  components: {},
  mounted() {
    core.index();
  },
  data() {
    return {
      //   selected: null,
      //   options: [
      //     { value: null, text: 'male' },
      //     { value: 'a', text: 'female' }
      //   ],
      //   config: {
      //     dateFormat: 'Y-m-d'
      //   }
      loading: false,
      image: null,
      username: "",
      firabaseUser: null,
    };
  },

  computed: {
    ...mapGetters(["getUserInfo"]),

    profileImage() {
      return this.image
        ? this.image
        : require("../../../../assets/images/frontend/user/user.jpg");
    },
  },

  methods: {
    ...mapActions(["logoutAction"]),

    submitProfile() {
      console.log("working on profile");
      this.loading = true;
      if (this.username) {
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
            this.loading = false;
            this.logoutAction();
          })
          .catch((error) => {
            this.loading = false;
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
  },

  created() {
    if (this.getUserInfo) {
      if (firebase.auth().currentUser.displayName) {
        this.username = firebase.auth().currentUser.displayName;
      }

      console.log("current user: ", this.getUserInfo);
    }
  },
};
</script>


<style scoped>
.upload_profile {
  height: 112px !important;
}

.profile-pic.img-fluid {
  height: 100% !important;
}
</style>