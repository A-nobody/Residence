<template>
    <div id="header_w">
        <p class="tab_w">
            <router-link  to="/home">关注</router-link>
            <router-link  to="/home1">推荐</router-link>
        </p>
        <router-link to="/home" class="smallBell" :style="'background-image:url('+smallBellBg+')'"></router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            smallBellBg:"static/img/home_slices/icon_sy_xx@3x.png"
        }
    }
}
</script>

<style scoped>
    #header_w{
        width: 100%;
        height: .88rem;
        position: fixed;
        top:0;
        left:0;
        border-bottom:#e2e2e2 .02rem solid;
    }
    #header_w>.tab_w{
        width: 2.16rem;
        height:100%;
        position: absolute;
        left:50%;
        margin-left: -1.13rem;
        display: flex;
        justify-content: space-between;
        padding:0 .2rem;
    }
    .tab_w>a{
        display: block;
        height: 100%;
        line-height: .88rem;
        font-size:.32rem;
        font-weight: 700;
        font-family: PingFang-SC-Bold;
        position:relative;
    }
    .tab_w>a.router-link-active:after{
        content: "";
        display: block;
        height: .06rem;
        width: 0.5rem;
        background: #000;
        position:absolute;
        bottom:0;
        left:50%;
        margin-left: -0.25rem;
        border-radius: 5px;
    }
   #header_w>.smallBell{
        float: right;
        width: 0.38rem;
        height: 0.38rem;
        margin-top: .28rem;
        margin-right:.4rem ;
        background: no-repeat;
    }
</style>

