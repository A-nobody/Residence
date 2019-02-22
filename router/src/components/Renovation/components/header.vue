<template>
    <div class="box_n">
        <!-- 灰色背景块 -->
        <div class="top_n">
             <i class="iconfont" v-html="righticon" @click="search()"></i>
            <!-- 标题-装修 -->
           <p class="title_n">{{title}}</p>
           <!-- 蓝色背景块 -->
           <div class="task_n">
               <!-- 上边部分 -->
               <div class="task_top_n">
                 <p>{{task}}</p>
                 <p>{{finsh}}: <span>{{process}}</span></p>
                  <!-- 查看任务 -->
                  <span class="view_task_n">{{viewtask}}</span>
               </div>
               <!-- 下边部分 -->
               <div class="task_bottom_n">
                   <span>{{renovation}}</span>
                   <span class="iconfont"></span>
               </div>
           </div>
           <!-- 蓝色背景块 -->
        </div>
        <!-- 灰色背景块 -->

         <!-- 装修流程，避坑指南 -->
           <div class="process_n">
              <router-link :to="{name:'process'}">
                <div class="process_left">
                    <dl>
                        <dt><img :src="imgfirst"></dt>
                        <dd><p>{{imgtitleleft}}</p></dd>
                        <dd><span>{{bottomtitleleft}}</span></dd>
                    </dl>
                </div>
              </router-link>
              <!-- <router-link :to="{name:'process'}"> -->
                <div class="process_right">
                    <dl  @click="skiphome()">
                        <dt><img :src="imgtwo"></dt>
                        <dd><p>{{imgtitleright}}</p></dd>
                        <dd><span>{{bottomtitleright}}</span></dd>
                    </dl>
                </div>
              <!-- </router-link> -->
           </div>
    </div>
    <!-- 顶部结束 -->
</template>

<script>
export default {
    data(){
        return {
            title:"装修",
            task:"装修任务",
            finsh:"已完成",
            process:"0/117",
            viewtask:"查看任务",
            renovation:"我的装修信息",
            imgfirst:"../../../../static/img/renovation/szt@2x.png",
            imgtitleleft:"装修流程",
            bottomtitleleft:"三分钟把握要点",
            imgtwo:"../../../../static/img/renovation/zxl@2x.png",
            imgtitleright:"避坑指南",
            bottomtitleright:"过来人血泪经验",
            righticon:"&#xe626;"
        }
    },
    methods:{
        skiphome(){
            console.log(1)
            this.$router.history.push("/home/message")
        },
        search(){
            this.$router.history.push("/renovation/search")
        }
    }
}
</script>

<style scoped>
/* 灰色背景图层 */
   .top_n{
       width:100%;
       height: 3.5rem;
       background: #777777;
       padding: .32rem 0.4rem 0 .4rem;
       position: relative;
   }
   .lefticon{
       width: .18rem;
       height:.30rem;
       position: absolute;
       top: .4rem;
       left: .39rem;
       z-index: 5;
   }
   .top_n i{
        font-size: .48rem;
        color: #fff;
        position: absolute;
        top: .3rem;
        right: .39rem;
        z-index: 5;
   }
   /* 标题---装修栏 */
   .title_n{
       text-align: center;
       font-size: .36rem;
       color: #EDEDED;
   }
   /* 蓝色背景层 */
   .task_n{
       width: 100%;
       height: 2.9rem;
       background: linear-gradient(to right,#23BCBA, #7FD0BE); 
       border-radius: .1rem;
       margin: 0 auto;
       margin-top:.6rem;
   }
   /* 蓝色背景层上边部分 */
    .task_top_n{
        width: 100%;
        height: 1.94rem;
        position: relative;
        padding-top: .48rem;
        border-bottom: 1px solid #F1F1F1;
    }
    /* 蓝色背景层上边部分P标签 */
   .task_top_n p{
       color:#EDEDED;
   }
   .task_top_n p:nth-child(1){
       font-size: 0.36rem;
       margin-left:.38rem;
   }
   .task_top_n p:nth-child(2){
       font-size: .23rem;
       margin: .24rem 0 0 .4rem;
   }
   /* 查看任务圆角矩形框 */
   .view_task_n{
      width: 1.63rem;
      height:.59rem;
      background: #F5F5F5;
      color: #6FCBD3;
      font-size: .22rem;
      float: right;
      border-radius: .28rem;
      text-align: center;
      line-height: .6rem;
      position: absolute;
      top: .62rem;
      right: .38rem;
   }
   /* 蓝色背景层下边部分--我的装修信息 */
   .task_bottom_n{
       width: 100%;
       height: 0.95rem;
       padding-top: .37rem;
   }
   .task_bottom_n span{
      color: #F6F5F5;
      font-size: .23rem;
      margin: .37rem 0 0 .41rem;
   }
/* 灰色---装修流程，装修避坑 */
   .process_n{
       width: 100%;
       height: 1.36rem;
       margin: 1.05rem 0 0 0;
       padding: 0 .35rem 0 .35rem;
   }
   .process_n a{
       display: inline-block;
       float: left;
       margin-right: .02rem;
   }
   .process_left,.process_right{
      width:3.34rem;
      height:1.36rem;
      float: left;
      background:#EEF5F6;
      border-radius: .06rem;
   }

/* 装修流程样式 */
   .process_left>dl>dt,
   .process_right>dl>dt{
       float: left;
       margin: 0 .08rem 0 0;
   }
   /* 左边图片样式 */
   .process_left>dl>dt>img{
       width: .56rem;
       height: .43rem;
       margin: .43rem 0 0 .38rem;
   }
   /* 右边图片样式 */
   .process_right>dl>dt>img{
       width: .36rem;
       height: .44rem;
       margin: .43rem 0 0 .47rem;
   }
   .process_left>dl>dd,
   .process_right>dl>dd{
       float: left;
   }

   .process_left>dl>dd>p,
   .process_right>dl>dd>p{
      font-size: .3rem;
      color: #242424;
      margin:.35rem 0 .15rem .34rem;
   }

   .process_left>dl>dd>span,
   .process_right>dl>dd>span{
      font-size: .24rem;
      color:#828181;
   }
   .process_left>dl>dd>span{
       margin: 0 0 0 .34rem;
   }
   .process_right>dl>dd>span,
   .process_right>dl>dd>p{
       margin-left: .40rem;
   }
</style>
