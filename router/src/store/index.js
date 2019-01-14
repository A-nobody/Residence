import Vue from "vue";
import Vuex from "vuex";
import IndexRenovation from './renovation'
import mine from './mine'
import home from "./home"
import Checkstand from './checkstand'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    mine,
    home,
  	Checkstand,
    IndexRenovation

  }
})

export default store
