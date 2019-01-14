import Vue from 'vue'
import Vuex from 'vuex'
import mine from './mine'
import Checkstand from './checkstand'
import details from './details_j'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
  	Checkstand,
    mine,
    details
  }
})

export default store
