<template>
    <div class="cart">
        <div class="header">
            <div class="headerInside">
                <img src="static/img/mine/left.png" @click="getBack()">
                <span>购物车</span><span></span>
            </div>
        </div>
        <div class="wrapper middle" ref="cartWrapper">
        <div class="content mainOutside">
            <div class="main" v-for="(item,index) in goodsList">
                <div class="mainList">
                    <div class="listTop">
                        <!-- <img src="static/img/mine/yuan.png"> -->
                        <input type="checkbox" :checked="item.flag" @click="handleCheck(index)">
                        <span>{{item.shop}}</span>
                        <p @click="handleDel(item.id)">删除</p>
                    </div>
                    <div class="listMain">
                        <img :src='item.src'>
                        <p>
                            <span class="goodsName">{{item.name}}</span><br>
                            <span class="goodsColor">{{item.color}}</span><br>
                            <span class="goodsPrice">{{item.price | price}}</span>
                        </p>
                    </div>
                    <div class="listBottom">
                        <p>满包邮，满99元即可包邮</p>
                        <div class="NumBtn">
                            <p class="reduce" @click="handleReduce(index)"></p>
                            <p class="thatNum">{{item.num}}</p>
                            <p class="add" @click="handleAdd(index)"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="footer">
            <div class="footerInside">
                <!-- <img src="static/img/mine/yuan.png"> -->
                <input type="checkbox" :checked='checkAll' @click="handleCheckAll()"><p>全选</p>
                    <span>不含运费</span><p>已选：<span>{{result.Num}}</span></p><p>总计：<span>{{result.Price}}</span></p>
                <img src="static/img/mine/jiesuan.png" @click="goConfirm()">
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import BScroll from 'better-scroll'
export default {
    created(){
        // this.$store.dispatch('mine/getGoodsList')
        this.getGoodsList()
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.cartWrapper,{
            click:true
        })
    },
    computed:{
        ...Vuex.mapState({
            goodsList:state=>state.mine.goodsList,
            checkAll:state=>state.mine.checkAll
        }),
        ...Vuex.mapGetters({
            result:'mine/result'
        })
    },
    methods:{
        ...Vuex.mapMutations({
            handleCheckAll:'mine/handleCheckAll',
            handleCheck:'mine/handleCheck',
            handleAdd:'mine/handleAdd',
            handleReduce:'mine/handleReduce'
        }),
        ...Vuex.mapActions({
            getGoodsList:'mine/getGoodsList',
            handleDel:'mine/handleDel'
        }),
        getBack() {
            this.$router.back();
        },
        goConfirm(){
            this.$router.push({name:"confirm"})
        }
    },
    filters:{
        price(val){
            return "￥"+val
        }
    }
}
</script>

<style scoped>
    .cart{
        width: 100%;
        height: 100%;
        background: #f6f6f6;
        position: relative;
    }
    .cart .headerInside,.mainList,.footerInside{
        width: 90%;
        height: 100%;
        margin: 0 auto;
        font-family: PingFang-SC-Regular;
    }
    .cart .header{
        width: 100%;
        height: 0.88rem;
        background: #ffffff;
        position: fixed;
        top: 0;
        z-index: 5;
        border-bottom: 0.02rem solid #f6f6f6;
    }
    .cart .headerInside{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.3rem;
        font-weight: bold;
    }
    .cart>.middle{
        width: 100%;
        height: 85%;
        position: absolute;
        top: 0.88rem;
    }
    .cart .mainOutside{
        width: 100%;
    }
    .cart .main{
        height: 3.77rem;
        width: 100%;
        background: #ffffff;
        margin-top: 0.2rem;
    }
    .cart .main .listTop{
        height: 0.86rem;
        width: 100%;
        display: flex;
        border-bottom: 0.01rem solid #E1E1E1;
        align-items: center;
        font-size: 0.28rem;
        color: #323232;
        position: relative;
    }
    .cart .main .listTop>input{
        margin-right: 0.36rem;
        width: 0.36rem;
        height: 0.36rem;
    }
    .cart .main .listTop>p{
        position: absolute;
        right: 0.2rem;
        color: #7FD0A3;
    }
    .cart .main .listMain{
        height: 2.05rem;
        width: 100%;
        display: flex;
        align-items: center;
        font-weight: bold;
    }
    .cart .main .listMain>img{
        width: 1.44rem;
        height: 1.44rem;
        margin-right: 0.36rem;
    }
    .cart .main .listMain .goodsName{
        font-size: 0.26rem;
        color: #141414;
    }
    .cart .main .listMain .goodsColor{
        font-size: 0.26rem;
        color: #929292;
    }
    .cart .main .listMain .goodsPrice{
        font-size: 0.32rem;
        color: #7FD0A3;
        line-height: 0.7rem;
    }
    .cart .main .listBottom{
        height: 0.85rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 0.01rem solid #E1E1E1;
        color: #BFBFBF;
        font-size: 0.26rem;
    }
    .cart .main .listBottom .NumBtn{
        height: 0.35rem;
    }
    .cart .main .listBottom .NumBtn>p{
        width: 0.35rem;
        height: 0.35rem;
        display: inline-block;
        background: url('../../../static/img/mine/jian.png');
    }
    .cart .main .listBottom .NumBtn .add{
        background-position-x: 36px;
    }
    .cart .main .listBottom .NumBtn .thatNum{
        background: #F6F6F6;
        text-align: center;
        position: relative;
        top: -0.1rem;
        color: #0e0e0e;
        font-size: 0.24rem;
    }
    .cart .footer{
        width: 100%;
        height: 0.98rem;
        background: #ffffff;
        position: fixed;
        bottom: 0;
        left: 0;
        border-top: 0.02rem solid #f6f6f6;
    }
    .cart .footerInside{
        display: flex;
        align-items: center;
        position: relative;
    }
    .footerInside>input{
        width: 0.36rem;
        height: 0.36rem;
    }
    .footerInside>p{
        font-size: 0.26rem;
        color: #323232;
        margin: 0 0.05rem;
        font-weight: 600;
    }
    .footerInside>span{
        font-size: 0.24rem;
        color: #ABABAB;
        margin: 0 0.05rem;
    }
    .footerInside>p>span{
        font-size: 0.32rem;
        color: #7FD0A3;
        font-weight: 400;
    }
    .footerInside>img:last-child{
        position: absolute;
        right: 0;
    }
</style>