<template slot-scope>
    <div id="articleW" class="w100">
        <div class="article_w w100" v-for="(item,index) in homeNavs":keys="index">
            <section class="user_info w100">
                <div>
                    <img  class="user_img" src="/static/img/mine/banner.png" alt="">
                    <p class="user_name">dashabi</p>
                </div>
            </section>
            <div class="article_img w100">
                <img src="/static/img/home_slices/jx 10@2x.png" alt="">
            </div>
            <p class="article_title w100">
                堕落天使-莫甘娜是《英雄联盟》系列中的英雄之一。莫甘娜拥有被动技
            </p>
            <section class="article_info w100">
                <button class="forward_w w30" :style="{backgroundImage: 'url(' + forward_w + ')'}"></button>
                <div>
                    <span><button class="comment_w w30" :style="{backgroundImage: 'url(' + comment_w + ')'}"></button> <i>{{item.sCommentNumber}}</i></span>
                    <span><button class="collection_w w30" :style="{backgroundImage: 'url(' + collection_w + ')'}"></button> <i>{{item.sCollectionNumber}}</i></span>
                    <span><button class="up_w w30" :style="{backgroundImage: 'url(' + up_w + ')'}"></button> <i>{{item.sUpNumber}}</i></span>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
import BScorll from "better-scroll";
export default {
    created(){
        this.$store.dispatch("home/handleSetHome")
    },
    computed:{
        ...Vuex.mapState({
            homeNavs:state=>state.home.homeNavs,
        })
    },
    data(){
        return{
            forward_w:"/static/img/home_slices/icon_sy_fx@2x.png",
            comment_w:"/static/img/home_slices/icon_sy_pl@2x.png",
            collection_w:"/static/img/home_slices/icon_sy_sc@2x.png",
            up_w:"/static/img/home_slices/icon_sy_dz@2x.png",
        }
    },
    methods:{
        
    }
}
</script>


<style scoped>
    i{
        font-style: normal;
    }
    .w100{
        width: 100%;
        box-sizing: border-box;
    }
    .w30{
        width: .3rem;
        height: .3rem;
        border:none;
        background: #fff;
        vertical-align: top;
    }
    #articleW{
        position: relative;
        background: #f6f6f6;
    }
    .article_w{
        height:7.8rem;
        margin-bottom:.2rem;
        background: #fff;
    }
    .article_w>.user_info{
        height: 1.09rem;
        padding:.1rem .4rem .21rem;
        position: relative;
    }
    .user_info>div{
        width: 2.1rem;
        height: .7rem;
        display: flex;
        justify-content: space-between;
    }
    .user_info>div>.user_img{
        width: .7rem;
        height: .7rem;
        border-radius: 50%;
    }
    .user_info>div>.user_name{
        width: 1.1rem;
        font:bolder .3rem/.6rem PingFang-SC-Heavy;
    }
    .article_w>.article_img{
        height:4.52rem;
    }
     .article_img>img{
         width: 100%;
         height: 4.52rem;
    }
    .article_w>.article_title{
        height:1.5rem;
        padding:.21rem .53rem 0 .4rem;
        font-size:.3rem;
        font-family: PingFang-SC-Regular;
        line-height: .51rem;
    }
     .article_w>.article_info{
         height:.79rem;
         display:flex;
         justify-content: space-between;
         padding-top:.19rem; 
    }
    .article_info>div{
        width: 60%;
        display: flex;
        justify-content: space-around;
    }
    .article_info>div i{
        display: inline-block;
        margin-bottom: .1rem;
    }
    .article_info>.forward_w{
        margin-left: .40rem;
    }
</style>
