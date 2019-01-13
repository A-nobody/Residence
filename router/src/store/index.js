import Vue from 'vue'
import Vuex from 'vuex'
import mine from './mine'
import home from "./home"
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    mine,
    home
  }
})

export default store
