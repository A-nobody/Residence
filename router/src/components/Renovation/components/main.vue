<template>
    <div class="main">
        <!-- 装修必看 -->
        <div class="renovation_look">
            <p class="look_title">装修必看</p>
            <ul>
                <!-- <router-link> -->
                    <li v-for="(item,index) in mustlook">
                        <p>{{item.looktitle}}</p>
                        <img :src="item.lookimg">
                    </li>
                <!-- </router-link> -->
            </ul>
        </div>
        <!-- 空间 -->
        <div class="space">
           <p class="look_title">空间</p>
           <ul>
              <li v-for="(item,index) in space">
                  <p>{{item.looktitle}}</p>
                  <img :src="item.lookimg">
              </li>
           </ul>
        </div>
        <!-- 大家都在看 -->
        <div class="alllook">
           <p class="look_title">大家都在看</p>
          <ul>
              <li v-for="(item,index) in alllook">
                  <p>{{item.looktitle}}</p>
                  <img :src="item.lookimg">
              </li>
          </ul>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";

export default{
     computed:{
        ...Vuex.mapState({
          mustlook:state=>state.IndexRenovation.mustlook,
          space:state=>state.IndexRenovation.space,
          alllook:state=>state.IndexRenovation.alllook,         
        })
    
    },
    created(){
       this.$store.dispatch("IndexRenovation/mustlookActions");
       this.$store.dispatch("IndexRenovation/spaceActions");
       this.$store.dispatch("IndexRenovation/alllookActions")
    }
}
</script>

<style scoped>
   .main{
       width: 100%;
       height:auto;
       padding: 0 .4rem;
       margin-top: .47rem;
   }
   /* 装修必看---标题 */
    .look_title{
      font-size: .33rem;
      font-weight: bold;
      color: #131313;
      margin-bottom:.3rem; 
   }
   .renovation_look ul li{
       width: 1.5rem;
       height: 1.7rem;
       float: left;
       background: #EAF3F5;
       border-radius: .06rem;
       margin: 0 .23rem .24rem 0;
   }
   /* 装修必看---最右边的li */
   .renovation_look ul li:nth-child(4n){
       margin-right: 0;
   }
   .renovation_look ul{
       width: 100%;
       height: 6.2rem;
   }
   .renovation_look ul p{
       color: #7FCDCA;
       font-size: .18rem;
       margin: .18rem 0 0 .18rem;
   }
   .renovation_look ul li img{
       height: .74rem;
       margin:.23rem 0 0 .48rem;
   }
    /* 图片位置设置 */
   .renovation_look ul li:nth-of-type(2) img,
   .renovation_look ul li:nth-of-type(5) img,
   .renovation_look ul li:nth-of-type(6) img,
   .renovation_look ul li:nth-of-type(7) img,
    .renovation_look ul li:nth-of-type(9) img{
       margin-left:.38rem; 
   }
   .renovation_look ul li:nth-of-type(3) img,
   .renovation_look ul li:nth-of-type(4) img{
       margin-left:.34rem; 
   }
   .renovation_look ul li:nth-of-type(8) img{
      margin-left: .27rem;
   }
   /* 空间 */
   .space,
   .alllook{
       width: 100%;
       height:2.35rem;
       margin: 0 0 .47rem 0;
   }
   .space>ul,
   .alllook>ul{
       width:100%;
       height: 100%;
       display: flex;
       justify-content: space-between;
   }
   .space>ul>li,
   .alllook>ul>li{
       width: 1.5rem;
       height: 1.7rem;
       background:#F5F0EA;
       border-radius: .06rem;
   }
   .space>ul>li>p,
   .alllook>ul>li>p{
       font-size: .18rem;
       color: #CDBC7F;
       margin: .18rem 0 .23rem .19rem;
   }
   .space>ul>li>img,
   .alllook>ul>li>img{
       height:.75rem;
       margin-left:.37rem ;
   }
   .alllook li:nth-of-type(1) img{
       margin-left: .4rem;
   }
   .alllook li:nth-of-type(2) img{
       margin-left: .23rem;
   }
   .alllook li:nth-of-type(3) img{
       margin-left: .55rem;
   }
   .alllook li:nth-of-type(4) img{
       margin-left: .43rem;
   }
</style>
