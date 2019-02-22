<template>
    <div>
      <div class="mockdata">
         <div class="header_details">
            <img src="http://img3.imgtn.bdimg.com/it/u=2424242699,3463634534&fm=26&gp=0.jpg" class="maskbgd"/>
             <p>{{experience.releaseEssay.essayTitle}}</p>
            <div class="mask">
                
            </div> 
            <!-- 左右两侧返回图标 -->
             <router-link :to="{name:'renovation'}">
                 <i class="iconfont lefticon" v-html="lefticon"></i>
             </router-link>

                <i class="iconfont righticon" v-html="righticon" @click="handleToggle"></i>
            
        </div>
        <div class="article">
            <span>
               {{experience.releaseEssay.essayMain}}
            </span>    
        </div>
    </div>
        <div class="title_professor">
            <p>专家经验</p>
            <div class="article_details">
         <!-- 横向ul滚动  -->
         <div class="professor wrapper" ref="listexperice">
             <ul class="content">
                
                 <li>
                     <router-link class="weisb" :to="{name:'expericence'}">
                     <img :src="experience.goods.goodsPicture2">
                     <p>{{experience.releaseEssay.essayMain}}</p>
                     
                     <!-- <img :src="item.headimg" class="headsmall"> -->
                     <!-- <span>{{item.specialname}}</span> -->
                     
                      </router-link>
                 </li>
                 <li>
                     <router-link class="weisb" :to="{name:'expericence'}">
                     <img :src="experience.goods.goodsPicture3">
                     <p>{{experience.releaseEssay.essayMain}}</p>
                     
                     <!-- <img :src="item.headimg" class="headsmall"> -->
                     <!-- <span>{{item.specialname}}</span> -->
                     
                      </router-link>
                 </li> 
                 <li>
                     <router-link class="weisb" :to="{name:'expericence'}">
                     <img :src="experience.goods.goodsPicture4">
                     <p>{{experience.releaseEssay.essayMain}}</p>
                     
                     <!-- <img :src="item.headimg" class="headsmall"> -->
                     <!-- <span>{{item.specialname}}</span> -->
                     
                      </router-link>
                 </li>
                 <li>
                     <router-link class="weisb" :to="{name:'expericence'}">
                     <img :src="experience.goods.goodsPicture5">
                     <p>{{experience.releaseEssay.essayMain}}</p>
                     
                     <!-- <img :src="item.headimg" class="headsmall"> -->
                     <!-- <span>{{item.specialname}}</span> -->
                     
                      </router-link>
                 </li>  
                 <li>
                     <router-link class="weisb" :to="{name:'expericence'}">
                     <img :src="experience.goods.goodsPicture6">
                     <p>{{experience.releaseEssay.essayMain}}</p>
                     
                     <!-- <img :src="item.headimg" class="headsmall"> -->
                     <!-- <span>{{item.specialname}}</span> -->
                     
                      </router-link>
                 </li>       
             </ul>
         </div>
         <!-- 横向ul滚动结束 -->
     </div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex"
import Vue from "vue"
import BScroll from "better-scroll";
export default {

     data(){
       return {
       id:"",
       title:"",
       arr:[],
       lefticon:"&#xe64a;",
       righticon:"&#xe647;",
       flag:false,
       img:"../../../../../static/img/renovation/mater@2x.png",
       details:[]
       }
   },
   methods:{
       handleToggle(){
           this.flag=!this.flag;
        this.$emit("toggle",this.flag)
       }
   },
   created(){  
       this.id=this.$route.params.id+1;   
      this.$store.dispatch("IndexRenovation/textActionsArticle",this.id);
      this.observer.$on("detail",(val)=>{
      this.title=val.title;
      this.arr.push(val)
      this.details=val.details;
      this.observer.$off("detail");
    }) 
   },
   computed:{
         ...Vuex.mapState({
        experience:state=>state.IndexRenovation.experience
         })
          
     },
   updated(){
         if(!this.scroll){
            this.scroll = new BScroll(this.$refs.listexperice,{
                scrollX:true,
                click:true
            });
        }
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
       margin-bottom: .3rem;
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
    .professor{
       width: auto;
       height: 4.2rem;
   }
   .professor>ul{
        height: 4.2rem;
        display: flex;
        width: max-content;
   }
   .professor>ul>li{
       width:4.6rem;
       height:4.2rem;
       float: left;
       border-radius: .1rem;
       margin-right: .25rem;
   }
   .professor>ul>li:nth-of-type(1){
       margin-left: .2rem;
   }
   .professor>ul>li>img:nth-of-type(1){
       width:4.58rem;
       height: 2.54rem;
   }
   .professor>ul>li>a>p{
       font-size:.28rem;
       color:#000;
       margin: .2rem .3rem 0 .3rem;
       width: 4.6rem;
   }
   .professor>ul>li>a>span{
       font-size: .22rem;
       color:#4D4D4D;
       float:left;
       margin-top: .25rem;
   }
  .headsmall{
      float:left;
      width: .28rem;
      height:.28rem;
      vertical-align: middle;
      margin: .23rem .04rem 0 .30rem;
      border-radius: 50%;
  }

    .weisb{
        display: inline-block;
        width: 4.58rem;
        height: 2.54rem;
    }
    .weisb img:first-child{
        width: 100%;
        height: 100%;
    }
</style>
