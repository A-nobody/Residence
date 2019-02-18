<template>
    <div class="process">
        <div class="header_img">
            <img src="../../../../../static/img/renovation/tu@2x.png" class="proc_bgd"/>
            <!-- 左右两侧返回图标 -->
             <router-link :to="{name:'renovation'}">
                <i class="iconfont" v-html="lefticon"></i>
             </router-link>
                <i class="iconfont" v-html="righticon"></i>
        </div>
        <p class="title">装修流程</p>

      <div class="outprocess">
        <div class="wrapper detailprocess" ref="process">
            <ul class="content">
                <li>
                   <p>准备阶段</p>
                   <div class="article">
                       1.常见的施工模式<br/>
                       2.常见的设计模式<br/>
                       3.合理安排装修预算<br/>
                       4.规划主材购买顺序<br/>
                       5.签合同时的注意事项<br/>
                   </div>
                </li>
                <li>
                   <p>拆除</p>
                   <div class="article">
                       1.注意地面拆除<br/>
                       2.哪些可以拆<br/>
                       3.卫浴拆除需格外谨慎<br/>
                   </div>
                </li>
                <li>
                   <p>木工</p>
                   <div class="article">
                       1.明确购材使用目的<br/>
                       2.确认板材材质跟选购相符<br/>
                   </div>
                </li>
                <li>
                   <p>水电</p>
                   <div class="article">
                       1.走顶部不走地<br/>
                       2.确保排水流畅<br/>
                       3.开关插座谨慎安装<br/>
                   </div>
                </li>
                <li>
                   <p>瓦工</p>
                   <div class="article">
                       1.厨房用水处安装报警器<br/>
                       2.衣柜靠墙需涂刷防潮余料<br/>
                   </div>
                </li>
                <li>
                   <p>安装</p>
                   <div class="article">
                       1.核对图纸，确认尺寸<br/>
                       2.进场安装<br/>
                   </div>
                </li>
            </ul>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from "vue";
import Bscroll from "better-scroll";
export default {
   data(){
       return {
           flag:false,
           lefticon:"&#xe64a;",
           righticon:"&#xe647;",
       }
   },
   methods:{
       open(){
           this.flag=!this.flag;
       }
   },
   mounted(){
            
       this.scroll=new Bscroll(this.$refs.process,{
           //只有设置成true pullingUp才能使用
            pullUpLoad:true,
            probeType:2,
            scrollY:true
       });
   }
}
</script>

<style scoped>
.header_img{
    width: 7.5rem;
    height: 4.8rem;
    position: relative;
}
.header_img .proc_bgd{
    width: 100%;
    height: 4.8rem;
    z-index: 2;
    position: absolute;
    left: 0;
    right:0;
}
.header_img a i{
    font-size: .4rem;
    position: absolute;
    top: .8rem;
    left: .39rem;
    z-index: 5;
    color:#fff;
}
.header_img i{
    font-size: .4rem;
    position: absolute;
    top: .8rem;
    right: .39rem;
    z-index: 5;
    color:#fff;
}
.title{
    margin:.33rem 0 .22rem .4rem;
    font-size: .34rem;
    color: #424141;
    font-weight: bold;
}
.detailprocess{
    width: 6.58rem;
    height: 100%;
    margin-left: .43rem;
}
.detailprocess ul li{
    margin: .05rem 0;
    padding-bottom: .1rem;
    height: auto;
}
.detailprocess ul li p{
    color: #424141;
    font-size: .30rem;
}
.detailprocess ul li:last-child{
    padding-bottom: .2rem;
}
.article{
    margin-top: .2rem;
    padding-left: 2em;
    line-height: .45rem;
    height: auto;
    color: #424141;
    font-size: .30rem;
}
.right{
    float: right;
}
.outprocess{
    width: 100%;
    height: 7.7rem;
    background: #fff;
    overflow: hidden;
}
.content{
        max-height: max-content;
}
</style>
