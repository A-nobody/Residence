<template slot-scope>
    <div id="articleW" class="w100">
         <div class="article_w w100" v-for="(item,index) in homeNavs.releaseEssayResoult.list":keys="index">
            <section class="user_info w100">
                <div>
                    <img  class="user_img" :src="homeNavs.photoPicture" alt="" @click="jumpDynamic()" ref="user_img">
                    <p class="user_name"  @click="jumpDynamic()" ref="user_name">{{item.essayMain}}</p>
                </div>
                <section class="follow">已关注</section>
            </section>
            <div class="article_img w100">
                <img :src="item.picpath" alt="">
            </div>
            <p class="article_title w100" @click="jumpArticle()">
                {{item.essayTitle}}
            </p>
            <section class="article_info w100">
                <button class="forward_w w30  iconfont" v-html="forward_w"></button>
                <div>
                    <span><button class="comment_w w30 iconfont" v-html="comment_w" @click="jumpComment()"></button> <i>{{item.essayCollectionNum}}</i></span>
                    <span><button class="collection_w w30  iconfont" v-html="collection_w" @click="jumpColl()"></button> <i>{{item.flagCollection}}</i></span>
                    <span><button class="up_w w30  iconfont" v-html="up_w"></button> <i>{{item.essayGoodNum}}</i></span>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
import BScorll from "better-scroll";
export default {
    props:{
        // commemtFlag 父传子  commentSF 子传父事件  comment_sf 事件函数
        commemtFlag:Boolean,
        collFlag:Boolean
    },
    created(){
        this.$store.dispatch("home/handleSetHome")
    },
    mounted(){
    },
    computed:{
        ...Vuex.mapState({
            homeNavs:state=>state.home.homeNavs,
        })
    },
    data(){
        return{
            forward_w:"&#xe647;",
            comment_w:"&#xe601;",
            collection_w:"&#xe648;",
            up_w:"&#xe607;",
            comment_flag:"",
        }
    },

    methods:{
        jumpDynamic(){
         this.$router.push({name:"dynamic_w"})
        },
        jumpArticle(){1
            this.$router.push({name:"details_w"})
        },
        jumpComment(){
            this.$emit("commentSF",!this.commemtFlag)
        },
        jumpColl(){
            this.$emit('collSF',!this.collFlag)
        }
    }, 
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
        font-size:.3rem;
    }
    #articleW{
        position: relative;
        top:2.08rem;
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
        width: 5.1rem;
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
        width: 4.1rem;
        font:bolder .3rem/.6rem PingFang-SC-Heavy;
    }
    .user_info>.follow{
        width: 1.16rem;
        height: .46rem;
        font:.24rem/.46rem PingFang-SC-Medium;
        background:#e5f6ed;
        position: absolute;
        bottom:.33rem;
        right:.41rem;
        border-radius:1rem; 
        color: #7FD0A3;
        text-align: center;
    }
    /* outline：none */
    .article_info button{
        outline:none;
        border:0;
        vertical-align: middle;
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
        font:.3rem/.51rem  PingFang-SC-Regular
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
        margin-left: .1rem;
        vertical-align: middle;
    }
    .article_info>.forward_w{
        margin-left: .40rem;
    }
</style>
