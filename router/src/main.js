import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/css/reset.css"
import "./common/css/iconfont/iconfont.css"
import "./common/js/flexble"
import oBserver from "./common/js/observer";
import store from "./store";
Vue.prototype.Observer = oBserver;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
