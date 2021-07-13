import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//vue-router
import router from "./router";

//axios
import Axios from 'axios'
Vue.prototype.$axios = Axios;

//Vuex
import store from './store'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

import * as api from '@/api/http'
Vue.prototype.$api = api

// scroller
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

Vue.config.productionTip = false

import { Row, Column, Hidden } from 'vue-grid-responsive';
Vue.component('row', Row);
Vue.component('column', Column);
Vue.component('hidden', Hidden);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
