import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/css/reset.css"
import "./common/css/iconfont/iconfont.css"
import "./common/js/flexble"
import oBserver from "./common/js/observer";
import store from "./store";
<<<<<<< HEAD
Vue.prototype.Observer = oBserver;
=======
import observer from './common/js/observer'
import './common/css/animate.min.css'
>>>>>>> master
Vue.config.productionTip = false

Vue.prototype.observer = observer
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
