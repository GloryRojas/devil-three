import Vue from 'vue';
import Vuex from 'vuex';
import oauth from './modules/oauth';
import loading from "./modules/loading";
import error from "./modules/error";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    loading,
    oauth,
    error,
  }
});

export default store;