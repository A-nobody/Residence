<template>
    <div>
        <header class = "h">
          <button class = "b1"></button>
          <h2>系统消息</h2>
        </header>
        <section class = "s">
           <div class="ss">
               <div class="s1"></div>
               <div class="s2">
                   <p>
                       绘居是一个为用户打造的原创家居内容分享平台，我们希望帮助大家改善居住观念、提高居住审美，借由连接不同的人与机构，让专业而不枯燥的居住常识、理念可以惠及更多人，让发现值得购买的家居好物变得更轻松。
                        </p>
                   <a href="##">查看详情</a>
               </div>
           </div>
           <div class="ss">
               <div class="s1"></div>
               <div class="s2">
                   <h3>你买过哪些十元好物？快别藏着掖着啦</h3>
                   <p>
                    用好十块钱可是大本事！你都买过哪些十元内好物？
快来分享一下！
                   </p>
                   <a href="##">查看详情</a>
               </div>
           </div>
        </section>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
   .h{
       width:100%;
       display: flex;
       align-items: center;
       height:.88rem;
       border-bottom: 0.01rem solid rgba(226,226,226,1);
   }
   .h>.b1{
       margin-left: .4rem;
       width:.16rem;
       height:.28rem;
       border:0;
       background:#fff url(/static/img/addressl/you@2x.png) no-repeat;
       background-size: contain;
   }
   .h>h2{
        margin-left: 2.24rem;
        font-size:.32rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(0,0,0,1);
   }
   .s{
       margin-top: .32rem;
       display: flex;
       flex-direction: column;
       align-items: center;
   }
   .s>.ss{
       border: 0.01rem solid #f4f4f4;
   }
   .s>.ss:nth-child(1){
       width:88.8%;
       height:6.1rem;
   }
    .s>.ss:nth-child(2){
       width:88.8%;
       height:5.97rem;
       margin-top: .22rem;
       position: relative;
   }
   .s>.ss:nth-child(2)>.s2>h3{
        font-size:.28rem;
        font-family:PingFang-SC-Regular;
        font-weight:bold;
        color:rgba(1,1,1,1);
        position: absolute;
        top:3.92rem;
        bottom:1.74rem;
        width:4.76rem;
        height:.28rem;
   }
   .s>.ss>.s2{
       position: relative;
   }
   .s>.ss>.s1{
       margin-bottom: .27rem;
   }
   .s>.ss>.s1:nth-child(1){
       height:4.07rem;
       background:url(/static/img/systeml/tp_xx_01@2x.png) no-repeat;
       background-size: contain;
   }
   .s>.ss:nth-child(2)>.s1{
       height:4.07rem;
       background:url(/static/img/systeml/tp_xx_04@2x.png) no-repeat;
       background-size: contain;
   }
   .s>.ss>p{
        width:6rem;
        height:1.44rem;
        font-size:.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:bold;
        color:rgba(136,136,136,1);
        line-height: .4rem;
   }
   .s>.ss>.s2>a{
        font-size:.2rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(127,208,163,1);
        position: absolute;
        left:5.37rem;
        margin-top: .15rem;
   }
</style>


