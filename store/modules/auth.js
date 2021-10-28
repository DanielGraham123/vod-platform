import firebase from "firebase/app";
import "firebase/auth";
// import router from "../../router";

const state = () => ({
  userData: null,
  userToken: null,
  errorMsg: null,
  loginLoader: false,
  signupEmail: "",
});

const mutations = {
  setUserData(state, user) {
    localStorage.setItem("userInfo", JSON.stringify(user));
    state.userData = user;
    console.log("SET USER DATA", user);

    this.app.router.push("/home");
  },

  setUserToken(state, userToken) {
    localStorage.setItem("userToken", JSON.stringify(userToken));
    state.userToken = userToken;
  },

  setSignUpEmail(state, email) {
    localStorage.setItem("signUpEmail", email);
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};
