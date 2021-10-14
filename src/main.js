import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.styl'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSkull, faCrown, faDungeon, faHatWizard, faHammer, faGem } from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faBootstrap, faFontAwesome, faGithub, faBattleNet } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faSkull,
    faCrown,
    faDungeon,
    faHatWizard,
    faHammer,
    faGem,
    faVuejs,
    faBootstrap,
    faFontAwesome,
    faGithub,
    faBattleNet
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  methods: {
    init() {
      store.dispatch('oauth/getToken', null, { root: true });
    },
  },
  created() {
    this.init();
  },
  render: h => h(App)
}).$mount('#app')
