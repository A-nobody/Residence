<template>
    <div id="userHeader">
        <p class="returnfor">
            <i class="return iconfont" v-html="return_w" @click="returnHome()"></i>
            <i class="forwrading iconfont" v-html="forwrading"></i>
        </p>
        <div class="userInfo_w">
            <div class="user_w">
                <img src="/static/img/home_slices/tp_jzy_02@2x.png" alt="">
                <p>asdas</p>
            </div>
            <section class="user_status">
                <div>
                    <p class="user_follow">
                        <i>关注</i>
                        <span>1111</span>
                    </p>
                    <p class="user_fans">
                        <i>粉丝</i>
                        <span>1111</span>
                    </p>
                    <p class="user_up">
                        <i>获赞</i>
                        <span>1111</span>
                    </p>
                </div>
                <button>已关注</button>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            return_w:"&#xe64a;",
            forwrading:"&#xe647;"
        }
    },
    methods:{
        returnHome(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
    i{
        font-style: normal;
    }
    #userHeader{
       width: 100%;
       height: 4.88rem;
       background: url(/static/img/home_slices/tp_jzy_01@2x.png);
       padding-top:1px; 
       background-size: cover;
       position: relative;
       z-index: 5;
    }
    #userHeader>.returnfor{
        width: 100%;
        height: .33rem;
        padding: 0 .4rem;
        margin-top: .38rem;
        display: flex;
        justify-content: space-between;
    }
    .returnfor>i{
        display: inline-block;
        font-size: .30rem;
        color:#fff;
    }
    #userHeader>.userInfo_w{
        width: 100%;
        height: 2rem;
        margin-top: 1.8rem;
        padding:0 .4rem;
        display: flex;
        justify-content: space-between;
    }
    .user_w{
        width: 165px;
        height: 100%;
    }
    .user_w>p{
        font:.34rem PingFang-SC-Bold;
        color:#fff;
        text-align: center;
    }
    .user_status{
        height: 1.09rem;
        width: 2.76rem;
        margin-top: .89rem;
    }
    .user_status>div{
        width: 100%;
        height: 0.58rem;
        display:flex;
        justify-content: space-between;
    }
     .user_status>div>p{
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
     }
     .user_status>div>p>span{
        font: .32rem PingFang-SC-Heavy;
        color: #fff;
     }
     .user_status>div>p>i{
         font: .28rem PingFang-SC-Regular;
         color:#fff;
         text-align: center;
     }
    .user_status>button{
        border:0;
        width: 2.79rem;
        height: 0.37rem;
        background: #7FD0A3;
        border-radius: .1rem;
        color:#fff;
        font:.18rem PingFang-SC-Medium;
        margin-top: .14rem;
    }
</style>

