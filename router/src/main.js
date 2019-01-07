import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/css/reset.css"
import "./common/js/flexble"
import oBserver from "./common/js/observer";
Vue.prototype.Observer = oBserver;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
