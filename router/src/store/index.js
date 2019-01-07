import Vue from "vue";
import Vuex from "vuex";
import shophome from "./shophome";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        shophome
    }
})

export default store;