<template>
    <div class="home_w">
        <HearderW @handlenav="handlenavs"/>
        <search-com/>
        <div class="wrapper" ref="homeWrapper">
            <div class="content">
                <keep-alive>
                    <components :is="nav_w"></components>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
import HearderW from "./components/HearderW.vue"
import Search from "./components/search.vue"
import HArticle from "./components/HArticle"
import Recommend from "./components/recommend"
import Vuex from "vuex"
import BScorll from "better-scroll"

export default {
    components:{
        "HearderW": HearderW,
        "search-com":Search,
        "HArticle-com":HArticle,
        "Recommend-com":Recommend
    },
    mounted(){
        if(!this.scroll){
            this.scroll = new BScorll(this.$refs.homeWrapper,{
                pullupload:true,
                click:true,
                probeType:2
            });
        }
    },
    data(){
        return{
            nav_w:"HArticle-com",
        }
    },
    methods:{
        handlenavs(data){
            this.nav_w = data
        }
    }
}
</script>

<style>
    .home_w{
        width: 100%;
        height: 100%;
    }
    .home_w>.wrapper{
        height: 100%;
        width:100%;
    }
    .home_w>.wrapper>.content{
       padding-bottom:2rem;
    }
</style>