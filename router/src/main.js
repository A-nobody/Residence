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
Vue.use(MintUi);

Vue.config.productionTip = false

Vue.prototype.observer = observer;

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import axios from "axios";
import "./lib"
Vue.prototype.$axios = axios;


/* 图片懒加载 */
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    preLoad: 50,    //预加载高度的比例
    loading:'static/img/loading.gif'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
