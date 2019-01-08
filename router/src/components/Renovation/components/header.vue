<template>
    <div class="box_n">
        <!-- 灰色背景块 -->
        <div class="top_n">
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
    </div>
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
            icon:"&#xe646;"
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
       margin-top:0.4rem;
   }
   .process_left,.process_right{
      width:3.34rem;
      height:1.36rem;
      float: left;
      background:#EEF5F6;
      border-radius: .06rem;
   }
   .process_left{
       margin-right:.02rem;
   }


</style>
