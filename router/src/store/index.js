import Vue from 'vue'
import Vuex from 'vuex'
import mine from './mine'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
  	Checkstand,
    mine
  }
})

export default store
