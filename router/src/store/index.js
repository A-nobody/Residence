import Vue from "vue";
import Vuex from "vuex";
import IndexRenovation from './renovation'

Vue.use(Vuex);

 const store=new Vuex.Store({
     modules:{
        IndexRenovation
    }
 })
 
 export default store;