import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/css/reset.css"
import "./common/css/iconfont/iconfont.css"
import "./common/js/flexble"
import store from "./store";
import observer from './common/js/observer'
import './common/css/animate.min.css'
import MintUi from 'mint-ui'
import 'mint-ui//lib/style.css'
import './components/Renovation/mock/mock.js'
Vue.use(MintUi);


Vue.config.productionTip = false

Vue.prototype.observer = observer;

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import axios from "axios";
axios.defaults.withCredentials=true
import "./lib"
Vue.prototype.$axios = axios;

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    loading:'static/img/loading.gif'
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
