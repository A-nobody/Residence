<template>
    <div id="comment_w">
        <section class="comment_bg" @click="handlecommentSF()">

        </section>
        <section class="comment_main" >
            <div class="comment_sum">
                <p><span >4</span><span>条评论</span></p>
                <i v-html="off_comment" class="off_comment iconfont" @click="handlecommentSF()"></i> 
            </div>
            <h2 class="comment_all">全部评论</h2>
            <div class="comment_one" v-for="(item,index) in commits">
                <section>
                    <div class="comment_user">
                        <section :style="{backgroundImage: 'url(' + item.userlmage + ')'}"></section>
                        <div>
                            <p>{{item.userName}}</p>
                            <i>{{item.articleDate}}</i>
                        </div>
                    </div>
                    <div class="comment_up">
                        <i class="iconfont" v-html="comment_up"></i>
                        <span>{{item.articleNum}}</span>
                    </div>
                </section>
                <p class="comment_text">
                   {{item.article}}
                </p>
            </div>
        </section>
        <section class="comment_f">
            <input type="text" placeholder="发表你的评论">
            <a href="##" class="iconfont" v-html="comment_f"></a>
        </section>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    data(){
        return{
            off_comment:"&#xe603;",
            comment_up:"&#xe607;",
            comment_f:"&#xe609;"
        }
    },
    computed:{
        ...Vuex.mapState({
            commits:state=>state.home.commits
        })
    },
    created(){
        this.$store.dispatch("home/handleSetCommit")
    },
    methods:{
        handlecommentSF(){
            this.$emit("commentSF",false)
        }
    }
}
</script>

<style scoped lang="scss">
    i{
        font-style: normal;
    }
    #comment_w{
        height: 100%;
        width:100%;
         z-index: 1001;
    }
    .comment_main{
        height: 10.64rem;
        width: 7.5rem;
        background:#fff;
        box-sizing: border-box;
        padding:0px .4rem;
        border-top-left-radius: .1rem;
        border-top-right-radius: .1rem;
    }
    .comment_bg{
        height: 3.36rem;
        width: 7.5rem;
        background: rgba(0,0,0,.4)
    }
    .comment_sum{
        height: .69rem;
        width: 100%;
        font-size:.25rem;
        text-align: center;
        line-height: .69rem;
        position: relative;
        .off_comment{
            position: absolute;
            right:.4rem;
            line-height: .69rem;
            top:0;
        }
    }
     .comment_all{
        font: bold .33rem PingFang-SC-Heavy;
        margin-bottom: .21rem;
        }   
    .comment_one{
            height: 1.51rem;
            width: 100%;
            section{
                height: 0.65rem;
                width: 100%;
                display: flex;
                justify-content: space-between;
                .comment_user{
                    width: 3.25rem;
                    display: flex;
                    section{
                        width: 0.62rem;
                        height: 0.62rem;
                        border-radius: 50%;
                    }
                    div{
                        margin-left: .16rem;
                        p{
                            font:.26rem PingFang-SC-Regular
                        }
                        i{
                            font:.2rem PingFang-SC-Regular;
                            color:#A1A0A0;
                        }
                    }
                }
                .comment_up{
                    display:flex;
                    flex-direction: column;
                    justify-content: center;
                    color:#A1A0A0;
                    i{
                        font-size:.3rem;
                    }
                    span{
                        font-size:.2rem;
                    }
                }
            }
            .comment_text{
                    font-size:.26rem;
                    line-height:.72rem;
                    padding-left:.8rem;
            }
        }
        .comment_f{
            height: 1rem;
            width: 100%;
            box-sizing: border-box;
            padding:0 .4rem;
            position: absolute;
            bottom:0px;
            left:0px;
            input{
                width: 6.02rem;
                height: 0.64rem;
                background: #E9E9E9;
                border:0;
                border-radius: .05rem;
                font-size:.24rem;
                color:#A1A0A0;
                text-indent: .16rem;
            }
            a{
                font-size:.35rem;
                vertical-align: middle;
            }
        }
</style>

