<template>
    <div>
      <div class="mockdata"  v-for="(item,index) in detailtitle" v-if="index==id">
        <div class="header_details">
            <img :src="item.img" class="maskbgd"/>
            <div class="mask">
                
            </div> 
            <!-- 左右两侧返回图标 -->
             <router-link :to="{name:'renovation'}">
                 <i class="iconfont lefticon" v-html="lefticon"></i>
             </router-link>

                <i class="iconfont righticon" v-html="righticon" @click="handleToggle"></i>
                <p>{{title}}</p>
        </div>
        <div class="article">
            <span>
               {{item.text}}
            </span>    
        </div>
    </div>
        <div class="title_professor">
            <p>专家经验</p>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex"
import Vue from "vue"


export default {
     data(){
       return {
       id:"",
       title:"",
       lefticon:"&#xe64a;",
       righticon:"&#xe647;",
       flag:false,
       img:"../../../../../static/img/renovation/mater@2x.png",
       }
   },
   methods:{
       handleToggle(){
           this.flag=!this.flag;
        this.$emit("toggle",this.flag)
       }
   },
   created(){
      
      this.$store.dispatch("IndexRenovation/detailtitleActions");
      this.observer.$on("detail",(val)=>{
      this.title=val.looktitle;
      this.id=val.id;
      this.observer.$off("detail")
    })   
   },
   computed:{
       ...Vuex.mapState({
           detailtitle:state=>state.IndexRenovation.detailtitle

       })
   }
}
</script>

<style scoped>

 .article{
       width: 6.7rem;
       height: 1.5rem;
       margin:.45rem 0 .85rem 0;
       font-size: .24rem;
       color: #757575;
       margin-left:.4rem; 
   }
  .header_details{
      width:100%;
      height: 3.9rem;
  }
  .mask{
      width: 100%;
      height:100%;
      background: #000;
      opacity: .3;
  }
  .maskbgd{
      width:100%;
      height:100%;
  }
  .title_professor{
      width: 100%;
      height: .90rem;
      padding: 0 .49rem 0 .36rem;
  }
  .title_professor p{
       font-size: .33rem;
       color: #000;
       float: left;
       font-weight: bold;
   }
   .header_details{
       position: relative;
   }
   .mask{
       position: absolute;
       left: 0;top:0;
   }
   .header_details p{
       position: absolute;
       left: .81rem;
       bottom: .89rem;
       font-size: .38rem;
       color: #FFFEFE;
   }
   .lefticon,.righticon{
       font-size: .4rem;
       color: #fff;
       position: absolute;
       top: .8rem;
       z-index: 5;
   }
   .lefticon{
       left: .39rem;
   }
   .righticon{
       right: .39rem;
   }
   .mint-actionsheet-list{
       display: flex;
       width: 7.1rem;
       height: .8rem;
       background:#FFF;
       border-radius: .10rem;
       margin: 0 auto;
       margin-bottom: .2rem;
       margin-top: .2rem;
   }
   .mint-actionsheet-listitem{
       float: left;
       line-height: .8rem;
       font-size: .28rem;
       color: #8A8989;
   }
   .mint-actionsheet-button{
       width: 7.1rem;
       height: .8rem;
       background: #FFFFFF;
       border-radius: .10rem;
       text-align: center;
       color: #8A8989;
       margin: 0 auto;
       font-size: .3rem;
       line-height: .8rem;
       margin-bottom: .2rem;
   }
</style>
