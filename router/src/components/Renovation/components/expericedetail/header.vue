<template>
     <div class="experienceheader">
        <div class="data">
         <div>
         <div class="bgd">
             <img src="http://img5.imgtn.bdimg.com/it/u=2938004998,3625459091&fm=26&gp=0.jpg" class="photo">
             <i class="iconfont righticon" v-html="righticon" @click="handleToggle()"></i>
           
             <i class="iconfont lefticon" v-html="lefticon" @click="handleBack()"></i>
         </div>  
         <div class="article">
             <p>{{experience.releaseEssay.essayTitle}}</p>
             <span>{{experience.releaseEssay.essayMain}}</span>
         </div>
       </div>
        </div>
     </div>    
</template>


<script>
import Vuex from "vuex";


export default {
     data(){
         return {
       id:"",
       lefticon:"&#xe64a;",
       img:"../../../../../static/img/renovation/mater@2x.png",
       righticon:"&#xe647;",
       flag:false
         }
     },
     created(){
        this.id=this.$route.params.id;
        //  this.$store.dispatch("IndexRenovation/textActionsArticle",this.id)
        //  this.$store.dispatch("IndexRenovation/textActions")
     },
     computed:{
         ...Vuex.mapState({
          experience:state=>state.IndexRenovation.experience
         })
     },
     methods:{
         handleBack(){
             this.$router.go(-1);
         },
         handleToggle(){
             this.flag=!this.flag;
             this.$emit("toggle",this.flag)
         },
     }
}

</script>

<style scoped>
  .bgd{
      width:7.5rem;
      height: 3.68rem;
      position:relative;
  }
  .bgd .photo{
      width: 7.5rem;
      height: 3.68rem;
      position: absolute;
  }
  .bgd img{
      height: .30rem;
  }
  .bgd i{
      font-size: .36rem;
      position: absolute;
       top: .4rem;
       right: .39rem;
       z-index: 5;
  }

.article{
    width:100%;
    height:1.35rem;
    padding: 0 .49rem 0 .43rem;
    margin: 0 auto;
    margin-top: .33rem;
}


 .article p{
     font-size: .34rem;
     font-weight: bold;
     color: #424141;
     margin-bottom: .22rem;
 }
   .righticon{
       width: .30rem;
       height: .30rem;
       position: absolute;
       top: .4rem;
       right: .39rem;
       z-index: 5;
   }
   .lefticon{
       width: .30rem;
       height: .30rem;
       position: absolute;
       top: .4rem;
       left: .39rem;
       z-index: 5; 
   }
   .iconfont{
       color: #424141;
   }
</style>
