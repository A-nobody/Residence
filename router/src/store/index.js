import Vue from 'vue'
import Vuex from 'vuex'
import mine from './mine'
<<<<<<< HEAD
import home from "./home"
=======
import Checkstand from './checkstand'
>>>>>>> f91ad915dc40efef2a908fe02a6e3c3e60779c67
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
<<<<<<< HEAD
    mine,
    home
=======
  	Checkstand,
    mine
>>>>>>> f91ad915dc40efef2a908fe02a6e3c3e60779c67
  }
})

export default store
