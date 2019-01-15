import Vue from 'vue'
import Vuex from 'vuex'
import mine from './mine'
import home from "./home"
import Checkstand from './checkstand'
import details from './details_j'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    mine,
    home,
  	Checkstand,
    details

  }
})

export default store
