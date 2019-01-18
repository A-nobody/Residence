import Vue from 'vue'
import Vuex from 'vuex'
import mine from './mine'
import home from "./home"
import Checkstand from './checkstand'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    mine,
    home,
  	Checkstand,
  }
})

export default store
