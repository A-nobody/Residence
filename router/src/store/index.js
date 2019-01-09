import Vue from "vue";
import Vuex from "vuex";
import IndexRenovation from './renovation'
import mine from './mine'
import Checkstand from './checkstand'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
  	Checkstand,
    mine,
    IndexRenovation
  }
})

export default store
