import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/css/reset.css"
import "./common/js/flexble"
import observer from './common/js/observer'
Vue.config.productionTip = false

Vue.prototype.observer = observer
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
