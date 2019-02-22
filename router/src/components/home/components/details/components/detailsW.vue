<template>
    <div id="details_w">
        <section class="user_info w100">
            <div>
                <img  class="user_img" src="/static/img/mine/banner.png" alt="" >
                <p class="user_name" >qweqs</p>
            </div>
            <section class="follow">已关注</section>
        </section>
        <p class="article_title w100">
            堕落天使-莫甘娜是《英雄联盟》系列中的英雄之一。莫甘娜拥有被动技
        </p>
        <p class="releaseTime">发布于 <span>2018-10-1</span></p>
        <section class="de_comment">
            <h2 class="de_title">评论</h2>
            <div class="comment_navs">
                <section class="commentator_img">
                    <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=659071980,1632459771&fm=27&gp=0.jpg" alt="">
                </section>
                <section class="commentator_info">
                    <p class="commentator_name">乔巴克鲁克</p>
                    <p class="commentator_time">2018-10-10 12:22:22</p>
                    <p class="commentator_con">哈哈哈哈哈哈</p>
                </section>
                <i class="commentator_up iconfont" v-html="commentator_up"></i>
            </div>
                <div class="comment_navs">
                <section class="commentator_img">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3890185672,1933578877&fm=27&gp=0.jpg" alt="">
                </section>
                <section class="commentator_info">
                    <p class="commentator_name">乔巴克鲁克</p>
                    <p class="commentator_time">2018-10-10 12:22:22</p>
                    <p class="commentator_con">哈哈哈哈哈哈</p>
                </section>
                <i class="commentator_up iconfont" v-html="commentator_up"></i>
            </div>
            <p class="comment_surplus">查看全部<span>72</span>条评论</p>
        </section>
        
    </div>
</template>
<script>
export default {
   props:{
        acticle_main:Object,
        action_comment:Object
   },
   data(){
       return{
           commentator_up:"&#xe607;",
           acticle_m:""
       }
   },
   created(){
       
   },
   mounted(){
       
   }
}
</script>

<style secped>
    i{
        font-style: normal;
    }
    .w100{
        width: 100%;
        box-sizing: border-box;
    }
    #details_w{
      width: 100%;
      height: 5.97rem;
      margin-bottom:.3rem;
    }
    .user_info{
        height: 1.09rem;
        padding:.1rem .4rem .3rem;
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
    .article_title{
        height:.8rem;
        padding:0rem .53rem 0 .4rem;
        font:.3rem/.51rem  PingFang-SC-Regular
    }
    .releaseTime{
        font:.2rem PingFang-SC-Regular;
        margin:.4rem .58rem 0rem .4rem;
        padding-bottom:.18rem;
        color:rgb(132, 132, 132); 
        border-bottom:1px solid rgb(233,233,233); 
    }
    .de_comment{
        height: 3.8rem;
        width: 100%;
        padding:.0rem .4rem;
        box-sizing: border-box;
    }
    .de_title{
        /* padding:.3rem 0rem .26rem 0rem; */
        font:.34rem PingFang-SC-Bold
    }
    .comment_navs{
        height: .89rem;
        /* padding:0 .58rem 0rem .4rem; */
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.3rem;
    }
    .commentator_img{
        width: 10%;
        height: .7rem;
    }
    .commentator_img>img{
        width: 0.67rem;
        height: 0.7rem;
    }
    .commentator_info{
        width: 80%;
        height: 0.89rem;
        display: flex;
        flex-direction: column;
        justify-content:space-around;
    }
    .commentator_name{
        font: bold .26rem PingFang-SC-Bold
    }
    .commentator_time{
        font:.2rem PingFang-SC-Regular;
        color:rgb(161,160,160)
    }
    .commentator_con{
        font:.26rem PingFang-SC-Regular;
        color:rgb(161,160,160)
    }
    .commentator_up{
        font-size:.32rem;
        color:rgb(161,160,160);
        text-align: center;
        width: 5%;
        display:block;
    }
    .comment_surplus{
        width: 100%;
        text-align: center;
        color:#7FD0A3;
        font-size:.2rem;
        border-bottom:1px solid #E9E9E9;
        padding-bottom: .2rem;
    }
</style>

