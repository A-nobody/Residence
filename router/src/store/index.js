import Vue from "vue";
import Vuex from "vuex";
import Checkstand from "./checkstand";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        Checkstand
    }
})

export default store;