<template>
    <div>
        <header class = "h">
          <button class = "b1 iconfont" @click="handleback()">&#xe64a;</button>
           </button>
        </header>
        <div class = "ban">    
        </div>
        <section class = "s">
            <div class="s1">
                <span>
                绘居APP能够方便用户随时随地查看装修风格、找装修设
        计师，用户通过手机直接查看装修效果图片，选择喜欢的装修
        风格，然后直接进行预订，省去许多麻烦。
                </span>
            </div>
            <div class="s1">
                <h2>1、装修风格展示</h2>
                <span>
                 展示各种类型的装修风格效果图，让用户能够很直观的找
到自己想要的装修风格。
             </span>
            </div>
            <div class="s1">
                <h2>2、户型选择</h2>
                <span>
                用户根据自己的户型和面积大小来综合选择不同的装修风
格，可以单独选择主卧、次卧、客厅、厨房、卫生间、书房等
的装修风格。 
                </span>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods:{
        handleback(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
   .h{
       width:100%;
       height:.88rem;
       background: #fff;
       display: flex;
       align-items: center;
       margin-left: .4rem;
   }
   .h>.b1{
        border:0;
        font-size:.24rem;
        text-align:center;
        outline:none;
        background:#fff;
   }
   .ban{
       height:5.6rem;
       background:url(/static/img/home_slices/tu@2x.png) no-repeat;
       background-size: contain;
   }
   .s{
       width:100%;
       display: flex;
       align-items: center;
       flex-direction: column;
   }
   .s>.s1{
       width:88.8%;
       margin-top: .4rem;
   }
   .s>.s1>span{
        text-indent: .48rem;
        font-size:.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:bold;
        color:RGBA(123, 123, 123, 1);
        line-height:.4rem;
        display: block;
   }
   .s>.s1>h2{
        text-indent: .48rem;
        font-size:.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:bold;
        color:RGBA(123, 123, 123, 1);
        line-height:.4rem;
   }
</style>

