<template>
    <div id="header_w">
        <p class="tab_w">
            <i :class="num==1?'active':''" @click="handleNavF()">关注</i>
            <i :class="num==2?'active':''" @click="handleNavR()">推荐</i>
        </p>
        <router-link to="/home/message" class="smallBell iconfont" >&#xe605;</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            smallBellBg:"static/img/home_slices/icon_sy_xx@2x.png",
            num:1
        }
    },
    methods:{
        handleNavF(){
            this.$emit("handlenav","HArticle-com");
            this.num=1
        },  
        handleNavR(){
            this.$emit("handlenav","Recommend-com")
            this.num=2
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
        background: #fff;
        z-index: 5;
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
    .tab_w>i{
        display: block;
        height: 100%;
        font:normal 700 .32rem/.88rem PingFang-SC-Bold;
        position:relative;
    }
    .tab_w>i.active::after{
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
        font-size:.38rem
    }
</style>

