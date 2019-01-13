import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import UserData from '@/components/mine/userData.vue'
import Cart from '@/components/mine/cart.vue'
import Favorite from '@/components/mine/favorite.vue'
import Order from '@/components/mine/order.vue'
import Release from '@/components/releases'
import Style from '@/components/styless'
import Renovation from '@/components/Renovation'
import Err from '@/components/error/error.vue'
import Shop from '@/components/shop'
import Shophome from '@/components/shop/components/shophome'
import Checkstand from '@/components/shop/components/checkstand'
import Register from '@/components/register'
import Login from '@/components/login'

// 魏
import dynamic_w from '@/components/home/components/dynamic'
import details_w from '@/components/home/components/details'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
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
      component: ()=>import('@/components/Mine'),
      meta: {
        //tab栏
        flag: true,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/mine/cart',
      component: Cart,
      meta: {
        flag:false
      }
    },
    {
      path: '/mine/userData',
      component: UserData,
      meta: {
        flag:false
      }
    },
    {
      path: '/mine/favorite',
      component: Favorite,
      meta: {
        flag:false
      }
    },
    {
      path: '/mine/order',
      component: Order,
      meta: {
        flag:false
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
      path: '/style',
      name: 'style',
      component: Style,
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
      path: '/shop',
      name: 'shop',
      component: Shop,
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
      component: Shophome,
      meta: {
        //tab栏
        flag: false,
        //路由守卫
        requireAuth: true
      }
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
      path:"/home/dynamic",
      name:"dynamic_w",
      component:dynamic_w,
      meta:{
        flag:false
      }
    },
    {
      path:"/home/details",
      name:"details_w",
      component:details_w,
      meta:{
        flag:false
      }
    },
    {
      path:'**',
      component:Err
    }
    
  ]
})

export default router;