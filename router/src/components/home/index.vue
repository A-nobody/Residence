<template>
    <div class="home_w">
        <HearderW @handlenav="handlenavs"/>
        <!-- 父传子 控制searchjump页面的出现 -->
        <search-com  @searchSF="search_sf"/>
        <div class="wrapper" ref="homeWrapper">
            <div class="content">
                <keep-alive>
                    <!-- commemtFlag 父传子  commentSF 子传父事件  comment_sf 事件函数 -->
                    <components :is="nav_w"
                    :commemtFlag='flag_comment'
                    @commentSF="comment_sf"
                    :collFlag='flag_coll'
                    @collSF="coll_sf">
                      </components>
                </keep-alive>
            </div>
        </div>
        <transition name = "comment" >
             <comment-com class="commentW" v-show="flag_comment" 
             @commentSF="comment_sf" />
        </transition>
        <transition name = "search" >
            <search-page class="searchPage" v-show="flag_search" 
            @searchSF="search_sf"/>
        </transition>
        <transition name = "coll" >
            <Collection-com class="collectionpage" v-show="flag_coll"
            @collSF="coll_sf"/>
        </transition>
    </div>
</template>

<script>
import HearderW from "./components/HearderW.vue"
import Search from "./components/search.vue"
import HArticle from "./components/HArticle"
import Recommend from "./components/recommend"
import Comment_w from "./components/comment"
import SearchPage from "./components/searchjump"
import Collection from "./components/collection"
import Vuex from "vuex"
import BScorll from "better-scroll"
export default {
    components:{
        "HearderW": HearderW,
        "search-com":Search,
        "HArticle-com":HArticle,
        "Recommend-com":Recommend,
        "comment-com":Comment_w,
        "SearchPage":SearchPage,
        "Collection-com":Collection
    },
    created(){
       
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
            flag_comment:false,
            flag_search:false,
            flag_coll:false,
        }
    },
    methods:{
        handlenavs(data){
            this.nav_w = data
        },
        comment_sf(data){
            this.flag_comment=data
        },
        search_sf(data){
            this.flag_search = data
        },
        coll_sf(data){
            this.flag_coll = data
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
    /* 评论界面 */
    .commentW{
        position:absolute;
        right:0;
        bottom:0;
    }

    /* 评论出现的动画 */
    .comment-enter,.comment-enter-to{
        left:0px;
        bottom:-100%;
    }
    .comment-enter-active,.comment-leave-active{
        transition:all .5s ease-in 0s;
    }
    /* 搜索界面 */
    .searchPage{
        position:absolute;
        top:0px;
        left:0px;
    }
    /* 搜索动画 */
    .search-enter,.search-enter-to{
        left:-750px;
        top:0;
    }
    .search-enter-active,.search-leave-active{
        transition:all .5s ease-in 0s;
    }

    /* 收藏界面 */
    .collectionpage{
        position:absolute;
        right:0;
        bottom:0;
    }
     .coll-enter,.coll-enter-to{
        left:0px;
        bottom:-100%;
    }
    .coll-enter-active,.coll-leave-active{
        transition:all .5s ease-in 0s;
    }
</style>