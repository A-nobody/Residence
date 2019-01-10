<template>
    <div class="mine">
        <div class="top">
            <div class="top-one">
                <router-link to=""><img src="static/img/mine/guanzhu.png"></router-link>
                <router-link to=""><img src="static/img/mine/shezhi.png"></router-link>
            </div>
            <div class="top-two">
                <router-link to="/mine/userData"><img src="static/img/mine/touxiang.png"><span>居友_qq</span><img src="static/img/mine/rightb.png"></router-link>
            </div>
        </div>
        <div class="pic"><img src="static/img/mine/banner.png"></div>
        <div class="bottom">
            <router-link to="/mine/favorite"><img src="static/img/mine/shoucangjia.png"><br><span>收藏</span></router-link>
            <router-link to="/mine/cart"><img src="static/img/mine/gouwuche.png"><br><span>购物车</span></router-link>
            <router-link to="/mine/order"><img src="static/img/mine/dingdan.png"><br><span>我的订单</span></router-link>
        </div>
        
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    methods:{
        ...Vuex.mapMutations({
            
        }) 
    }
}
</script>

<style scoped>
    .mine{
        width: 100%;
        height: 100%;
        font-weight:400;
        font-family: "PingFang-SC-Medium";
        /*解决滑动问题*/
        overflow-x: hidden;
    }
    .mine>.top{
        width: 100%;
        height: 2.7rem;
        background: #53876A;
        position: relative;
    }
    .mine>.pic{
        width: 100%;
        height: 6.89rem;
    }
    .mine>.pic>img{
        width: 100%;
        height: 100%;
    }
    .mine>.bottom{
        width: 100%;
        height: 3rem;
        padding-top: 0.41rem;
        display: flex;
        justify-content: space-around;
    }
    .mine>.bottom>a{
        width: 1rem;
        height: 0.5rem;
        display: block;
        text-align: center;
        float: left;  
    }
    .mine>.bottom>a>img{
        display: inline-block;
    }
    .mine .top-one{
        padding-top: 0.22rem;
        position: absolute;
        right: 0.4rem;
    }
    .mine .top-one>a{
        float: left;
        margin-left: 0.54rem;
    }
    .mine .top-two{
        position: absolute;
        top: 0.77rem;
        width: 100%;
        height: 1.13rem;
        padding: 0 0.39rem;
    }
    .mine .top-two>a{
        color: #ffffff;
        font-size: 0.36rem;
        display: flex;
        align-items: center;
        position: relative;
    }
    .mine .top-two>a>img{
        float: left;
        margin-right: 0.22rem;
    }
    .mine .top-two>a>img:last-child{
        position: absolute;
        right: -0.15rem;
        top: 0.45rem;
    }
</style>
