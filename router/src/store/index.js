import Vue from "vue";
import Vuex from "vuex";
import IndexRenovation from './renovation'
import mine from './mine'
import home from "./home"
import Checkstand from './checkstand'
import details from './details_j'
import Shop from './shop_g'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    mine,
    home,
  	Checkstand,
    details,
    IndexRenovation,
  	Shop,
  }
})

export default store
