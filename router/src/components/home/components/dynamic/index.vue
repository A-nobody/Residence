<template>
    <div id="juHomePage">
        <userInfo-com/>
        <h2 class="user_dong">动态</h2>
        <div class="wrapper" ref="dynamicWrapper">
            <div class="content">
                <dynamic-com/>
            </div>
        </div>
    </div>
</template>

<script>
import userInfo_w from "./components/userInfo_w"
import dynamic from "./components/dynamic"
import BScroll from "better-scroll"
export default {
    components:{
        "userInfo-com":userInfo_w,
        "dynamic-com":dynamic
    },
    mounted(){
        if(!this.scroll){
            this.scroll = new BScroll(this.$refs.dynamicWrapper,{
                pullUpLoad:true,
                click:true
            })
        }
        console.log(this.scroll)
      
    }
}
</script>

<style scoped>
    #juHomePage{
        width: 100%;
        height: 100%;
    }
    .user_dong{
        width: 100%;
        height: 0.74rem;
        font:.34rem/.74rem PingFang-SC-Bold;
        text-align: center;
        background:#fff;
        position: relative;
        z-index: 5;
        border-bottom:1px solid rgb(236,236,236);
    }
    .wrapper{
        height: 100%;
        position: fixed;
        top:5.62rem;
    }
    .content{
        padding-bottom:5rem; 
    }
</style>

