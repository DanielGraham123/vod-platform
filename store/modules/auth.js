import firebase from "firebase/app";
import "firebase/auth";
// import router from "../../router";
import { db } from "../../plugins/firebase.js";

const state = () => ({
  userData: null,
  userToken: null,
  errorMsg: null,
  loginLoader: false,
  signupEmail: "",

  userProfile: null,
});

const mutations = {
  setUserData(state, user) {
    localStorage.setItem("userInfo", JSON.stringify(user));
    state.userData = user;
    console.log("SET USER DATA", user);

    this.app.router.push("/home");
  },

  setUserProfile(state, profile) {
    localStorage.setItem("userProfile", JSON.stringify(profile));

    state.userProfile = profile;
    console.log("SET USER PROFILE", profile);

    // this.app.router.push("/home");
  },

  setUserToken(state, userToken) {
    localStorage.setItem("userToken", JSON.stringify(userToken));
    state.userToken = userToken;
  },

  setSignUpEmail(state, email) {
    localStorage.setItem("signUpEmail", JSON.stringify(email));
    state.signupEmail = email;
  },

  setLoader(state, val) {
    state.loginLoader = val;
  },

  loginError(state, error) {
    state.errorMsg = error;
  },

  logoutSuccess(state) {
    state.userData = null;
    state.userToken = null;

    localStorage.setItem("userInfo", null);
    localStorage.setItem("userToken", null);
    console.log("in logout mutation");
    this.app.router.push("/auth/login");
  },

  logoutError(state, error) {
    state.errorMsg = error;
    console.error("error login out", error);
  },
};

const getters = {
  getUserInfo(state) {
    if (typeof window !== "undefined") {
      return localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : state.userInfo;
    }
  },

  getUserProfile(state) {
    if (typeof window !== "undefined") {
      return localStorage.getItem("userProfile")
        ? JSON.parse(localStorage.getItem("userProfile"))
        : state.userProfile;
    }
  },

  getUserToken(state) {
    if (typeof window !== "undefined") {
      return localStorage.getItem("userToken")
        ? JSON.parse(localStorage.getItem("userToken"))
        : state.userToken;
    }
  },

  getSignUpEmail(state) {
    if (typeof window !== "undefined") {
      return localStorage.getItem("signUpEmail")
        ? JSON.parse(localStorage.getItem("signUpEmail"))
        : state.signupEmail;
    }
  },
};

const actions = {
  logoutAction({ commit }) {
    firebase
      .auth()
      .signOut()
      .then((resp) => {
        console.log("logout done.", resp);
        commit("logoutSuccess");
      })
      .catch((error) => {
        commit("logoutError", error);
      });
  },

  async fetchUserProfile({ commit }, userfId) {
    const docRef = await db.collection("profiles").doc(userfId);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Profile Document data:", doc.data());

          commit("setUserProfile", doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
