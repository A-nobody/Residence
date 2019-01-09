import Vue from 'vue'
import Vuex from 'vuex'
import mine from './mine'
import Checkstand from './checkstand'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
  	Checkstand,
    mine
  }
})

export default store
