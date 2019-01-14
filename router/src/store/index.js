import Vue from 'vue'
import Vuex from 'vuex'
import mine from './mine'
import Shop from './shop_g'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
  	Shop,
    mine
  }
})

export default store
