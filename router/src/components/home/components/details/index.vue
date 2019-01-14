<template>
    <div id="detailsW">
        <section class="details_bg" :style="'background-image:url('+ details_bg+')'">
            <p class="returnfor">
                <i class="return iconfont" v-html="return_wd" @click="returnHome()"></i>
                <i class="forwrading iconfont" v-html="forwrading_d"></i>
            </p>
        </section>
        <div class="wrapper" ref="detailsW">
            <div class="content">
                <details-com/>
                <want-com/>
            </div>
        </div>
        <discussW-com/>
    </div>
</template>

<script>
import detailsW from "./components/detailsW";
import wanttobody from "./components/wanttobay";
import discussW from "./components/discussW"
import BScroll from "better-scroll";
export default{
    data(){
        return{
            details_bg:"/static/img/home_slices/tp_dtxq_05@2x.png",
            return_wd:"&#xe64a;",
            forwrading_d:"&#xe647;"
        }
    },
    methods:{
        returnHome(){
            this.$router.back()
        }
    },
    components:{
        "details-com":detailsW,
        "want-com":wanttobody,
        "discussW-com":discussW
    },
    mounted(){
        if(!this.scroll){
            this.scroll = new BScroll(this.$refs.detailsW,{
                pullUpLoad:true,
                click:true
            })
            console.log(this.scroll);
        }
    }
}
</script>

<style secped>
    .details_bg{
        width: 100%;
        height: 7.61rem;
        padding-top:1px; 
        position: relative;
        z-index:5;
    }
    .returnfor{
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
    .wrapper{
        height: 6rem;
    }
</style>


