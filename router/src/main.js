import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/css/reset.css"
import "./common/css/iconfont/iconfont.css"
import "./common/js/flexble"
import store from "./store"
import './common/css/animate.min.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
