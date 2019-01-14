import Vue from 'vue'
import Vuex from 'vuex'
import mine from './mine'
import Shop from './shop_g'
import home from "./home"
import Checkstand from './checkstand'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
  	Shop,
    mine,
    home,
  	Checkstand,
    mine
  }
})

export default store
