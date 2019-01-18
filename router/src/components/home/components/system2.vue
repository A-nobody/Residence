<template>
    <div>
        <header class = "h">
          <button class = "b1 iconfont" @click="handleback()">&#xe64a;</button>
          <h2>系统消息</h2>
        </header>
        <div class="wrapper" ref="system2">
            <div class = "content s">
                <section class="ss" @click="jumpsystem1()">
                    <div class="s1"></div>
                    <div class="s2">
                        <p>
                            绘居是一个为用户打造的原创家居内容分享平台，我们希望帮助大家改善居住观念、提高居住审美，借由连接不同的人与机构，让专业而不枯燥的居住常识、理念可以惠及更多人，让发现值得购买的家居好物变得更轻松。
                                </p>
                        <section><a href="##">查看详情</a></section>
                    </div>
                </section>
                <section class="ss" @click="jumpsystem1()">
                    <div class="s1"></div>
                    <div class="s2">
                        <h3>你买过哪些十元好物？快别藏着掖着啦</h3>
                        <p>
                            用好十块钱可是大本事！你都买过哪些十元内好物？
        快来分享一下！
                        </p>
                        <section><a href="##">查看详情</a></section>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import BScorll from "better-scroll"
export default {
    mounted(){
        if(!this.scroll){
            this.scroll = new BScorll(this.$refs.system2,{
                pullupload:true,
                click:true,
                probeType:2
            }) 
        }
    },
    methods:{
        jumpsystem1(){
            this.$router.push({name:"system1_l"})
        },
        handleback(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
    .wrapper{
        height: 10rem;
        margin-top: 1rem;
    }
   .h{
       width:100%;
       display: flex;
       align-items: center;
       height:.88rem;
       border-bottom: 0.01rem solid rgba(226,226,226,1);
       position: fixed;
       top:0;
       left:0;
       z-index: 10;
       background: #fff;
   }
   .h>.b1{
       margin-left: .4rem;
       border:0;
       font-size:.24rem;
       text-align:center;
       outline:none;
       background:#fff;
   }
   .h>h2{
        margin-left: 2.24rem;
        font-size:.32rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(0,0,0,1);
   }
   .s{
       display: flex;
       flex-direction: column;
       align-items: center;
   }
   .s>.ss{
       border: 0.03rem solid #f4f4f4;
       box-shadow: 0 .1rem .1rem #E0DFDF;
   }
   .s>.ss{
        width:88.8%;
        margin-top: .22rem;
        padding-bottom: .35rem;
   }
   .s>.ss .s2>h3{
        font-size:.28rem;
        font-family:PingFang-SC-Regular;
        font-weight:bold;
        line-height:.46rem;
        color:rgba(1,1,1,1);
   }
   .s>.ss>.s2{
       position: relative;
       padding:0 .4rem;
   }
   .s>.ss>.s1{
        margin-bottom: .1rem;
        height:4.07rem;
        background-size: cover;
   }
   .s>.ss>.s1:nth-child(1){
       background:url(/static/img/home_slices/tp_xx_01@2x.png) no-repeat;
   }
   .s>.ss:nth-child(2)>.s1{
       background:url(/static/img/home_slices/tp_xx_04@2x.png) no-repeat;
   }
   .s>.ss p{
        width:6rem;
        font-size:.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:bold;
        color:rgba(136,136,136,1);
        line-height: .4rem;
   }
   .s>.ss>.s2>section{
       text-align: right;
       margin-top: .2rem;
   }
   .s>.ss>.s2>section>a{
        font-size:.2rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(127,208,163,1);
        margin-top: .15rem;
   }
</style>


