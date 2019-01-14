import Vue from 'vue'
import Vuex from 'vuex'
import mine from './mine'
<<<<<<< HEAD
import home from "./home"
=======
import Checkstand from './checkstand'
<<<<<<< HEAD
import details from './details_j'
=======
>>>>>>> f91ad915dc40efef2a908fe02a6e3c3e60779c67
>>>>>>> master
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
<<<<<<< HEAD
    mine,
    home
=======
  	Checkstand,
<<<<<<< HEAD
    mine,
    details
=======
    mine
>>>>>>> f91ad915dc40efef2a908fe02a6e3c3e60779c67
>>>>>>> master
  }
})

export default store
