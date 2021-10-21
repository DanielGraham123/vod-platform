import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules/autoloader";

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    state: {},
    modules,
  });
};

export default store;
