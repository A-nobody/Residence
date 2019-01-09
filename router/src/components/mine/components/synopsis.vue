<template>
    <div class="synopsis">
        <div class="top">
            <div class="topInside">
                <span @click="synoHide()">取消</span><h3>个人简介</h3><span>完成</span>
            </div>
        </div>
        <div class="main">
            <textarea class="userTxt"></textarea>
        </div>
        <div class="bottom"><span>10/40</span></div>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    methods:{
        ...Vuex.mapMutations({
            synoHide:'mine/synoHide'
        })
    }
}
</script>

<style scoped>
    .synopsis{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: #ffffff;
        font-family: PingFang-SC-Regular;
        font-size: 0.3rem;
        font-weight:400;
    }
    .synopsis .top{
        width: 100%;
        height: 1.2rem;
        border-bottom: 0.01rem solid #CACACA;
    }
    .synopsis .top .topInside{
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        align-items: center;
    }
    .synopsis .top .topInside h3{
        font-size: 0.34rem;
    }
    .synopsis .main{
        width: 90%;
        height: 100%;
        margin: 0 auto;
        padding-top: 0.3rem;
    }
    .synopsis .main .userTxt{
        width: 100%;
        height: 5rem;
        border: none;
        font-size: 0.3rem;
    }
    .synopsis .bottom{
        width: 100%;
        height: 0.98rem;
        background: #F6F6F6;
        color: #777;
        position: absolute;
        bottom: 0;
        left: 0;
        line-height: 0.98rem;
    }
    .synopsis .bottom>span{
        float: right;
        margin-right: 0.41rem;
    }
</style>
