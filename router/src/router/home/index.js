import Vue from 'vue'
import Router from 'vue-router'
import recommend_w from '@components/home/components/recommend.vue'
// import dynamic_w from '@components/home/dunamic'

Vue.use(Router)

export default (
   [
       {
           path:"/recommend_w",
           component:recommend_w,
           name:"recommend_w",
           meta:{
               flag:true
           }
       },
    //    {
    //         path:"/dynamic_w",
    //         component:dynamic_w,
    //         name:"/dynamic_w",
    //         meta:{
    //             flag:false
    //         }
    //    }
   ]
)