import Vue from 'vue';
import Vuex from 'vuex';
import oauth from './modules/oauth';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    oauth,
  }
});

export default store;