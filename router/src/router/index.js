import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Searchhom from '@/components/home/components/searchjump'
import UserData from '@/components/mine/userData.vue'
import Cart from '@/components/mine/cart.vue'
import Favorite from '@/components/mine/favorite.vue'
import FavoriteArticle from '@/components/mine/like/favoriteArticle.vue'
import FavoriteGoods from '@/components/mine/like/favoriteGoods.vue'
import Order from '@/components/mine/order'

import Release from '@/components/releases'
// import Style from '@/components/styless/components/style_j'
import Renovation from '@/components/Renovation'
import Err from '@/components/error/error.vue'
import process from '@/components/Renovation/components/process'
import Shopdetails from '@/components/shop/components/goods_details_j'

/*店铺首页*/
import Shophome from '@/components/shop/components/shophome'
import Hotlist from '@/components/shop/components/shophome/components/main.vue'
import Alllist from '@/components/shop/components/shophome/components/wholemain.vue'
/* 收银台 */
import Checkstand from '@/components/shop/components/checkstand'
import Detail from '@/components/Renovation/components/mustlookskip/details'
import Experience from '@/components/Renovation/components/expericedetail'
/* 确认订单 */
// import Confirm from '@/components/shop/components/confirmorder'
/* 查看商品图片 */
import Viewphoto from '@/components/shop/components/viewphoto_g'
/* 添加收货地址*/
import AddAddress from '@/components/shop/components/address/address'
/* 收货地址 */
import Address from "@/components/shop/components/address/address1"


import Register from '@/components/register'
import Login from '@/components/login'
import Welcome from '@/components/welcome'
import Shopserver from '@/components/shop/components/server_j'

// 魏
import dynamic_w from '@/components/home/components/dynamic'
import details_w from '@/components/home/components/details'
import message_w from '@/components/home/components/message'
import system1_l from '@/components/home/components/system1'
import system2_l from '@/components/home/components/system2'
import ReleaseW from '@/components/releasesW'
Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/register'
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    {
      path: '/home',
      name: 'name',
      component: Home,
      meta: {
        //tab栏
        flag: true,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/components/Mine'),
      meta: {
        //tab栏
        flag: true,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/mine/cart',
      name:'ShopCart',
      component: Cart,
      meta: {
        flag: false
      }
    },
    {
      path: '/mine/userData',
      component: UserData,
      meta: {
        flag: false
      }
    },
    {
      path: '/mine/favorite',
      component: Favorite,
      meta: {
        flag: false
      }
    },
    // {
    //   path: '/mine/favorite/pic',
    //   component: FavoritePic,
    //   meta: {
    //     flag: false
    //   }
    // },
    {
      path: '/mine/favorite/article',
      component: FavoriteArticle,
      meta: {
        flag: false
      }
    },
    {
      path: '/mine/favorite/goods',
      component: FavoriteGoods,
      meta: {
        flag: false
      }
    },
    {
      path: '/mine/order',
      component: Order,
      name: 'order',
      meta: {
        flag: false
      }
    },
    {
      path: '/release',
      name: 'release',
      component: Release,
      meta: {
        //tab栏
        flag: true,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/releaseW',
      name: 'releaseW',
      component: ReleaseW,
      meta: {
        //tab栏
        flag: false,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/style',
      name: 'style',
      component: () => import("@/components/styless/components/style_j"),
      meta: {
        //tab栏
        flag: true,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/renovation',
      name: 'renovation',
      component: Renovation,
      meta: {
        //tab栏
        flag: true,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/shop/goodsdetails',
      name: 'Shopdetails',
      component: Shopdetails,
      meta: {
        //tab栏
        flag: false,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/shop/shopserver',
      name: 'Shopserver',
      component: Shopserver,
      meta: {
        //tab栏
        flag: false,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/shop/shophome',
      name: 'shophome',
      redirect:'/shop/shophome/hotlist',
      component: Shophome,
      meta: {
        //tab栏
        flag: false,
        //路由守卫
        requireAuth: true
      },
      children:[
		     {
		      path: '/shop/shophome/hotlist',
		      name: 'hotlist',
		      component: Hotlist,
		      meta: {
		        //tab栏
		        flag: false,
		        //路由守卫
		        requireAuth: true
		      }
		    }, 
		    {
		      path: '/shop/shophome/alllist',
		      name: 'alllist',
		      component: Alllist,
		      meta: {
		        //tab栏
		        flag: false,
		        //路由守卫
		        requireAuth: true
		      }
		    },
      ]
    },
   
    {
      path: '/shop/checkstand',
      name: 'checkstand',
      component: Checkstand,
      meta: {
        //tab栏
        flag: false,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: "/home/dynamic",
      name: "dynamic_w",
      component: dynamic_w,
      meta: {
        flag: false
      }
    },
    {
      path: "/home/details",
      name: "details_w",
      component: details_w,
      meta: {
        flag: false,
      }
    },
    {
      path:"/home/message",
      name:"message_w",
      component:message_w,
      meta:{
        flag:true,
      }
    },
    {
      path:"/home/system1",
      name:"system1_l",
      component:system1_l,
      meta:{
        flag:false,
      }
    },
    {
      path:"/home/system2",
      name:"system2_l",
      component:system2_l,
      meta:{
        flag:false,
      }
    },


    {  
      path:"/renovation/details/:id",
      component:Detail,
      name:"details",
      meta:{
        flag:false,
        requireAuth:true
      }
    },
    {
      path:"/renovation/details/expericence/:id",
      component:Experience,
      name:"expericence",
      meta:{
        flag:false,
        requireAuth:true
      }
    },
    {
      path:"/renovation/process",
      component:process,
      name:'process',
      meta:{
        flag:false,
        requireAuth:true
      }
    },

    /* 确认订单 */
    {
      path:"/renovation/search",
      component:Searchhom,
      name:'Searchhom',
      meta:{
        flag:false,
        requireAuth:true,
      }
    },
    {
      path: '/shop/confirm',
      name: 'confirm',
      component: resolve=>require(['@/components/shop/components/confirmorder'],resolve),
      meta: {
        //tab栏
        flag: false,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/shop/viewphoto',
      name: 'viewphoto',
      component: Viewphoto,
      meta: {
        //tab栏
        flag: false,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/shop/address',
      name: 'address',
      component: Address,
      meta: {
        //tab栏
        flag: false,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path:'/shop/addaddress',
      name:'addaddress',
      component:AddAddress,
      meta:{
        flag:false,
        requireAuth:true
      }
    },
    {
      path:'**',
      component:Err
    }

  ]
})

export default router;
