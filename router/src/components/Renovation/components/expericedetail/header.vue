<template>
     <div class="experienceheader">
        <div class="data" v-for="(item,index) in experience" v-if="index==id">
         <div class="bgd">
             <img :src="item.img" class="photo">
             <i class="iconfont righticon" v-html="righticon" @click="handleToggle()"></i>
           
             <i class="iconfont lefticon" v-html="lefticon" @click="handleBack()"></i>
             
         </div>  
         <div class="article">
             <p>{{item.title}}</p>
             <span>{{item.text}}</span>
         </div>
       </div>
     </div>    
</template>


<script>
import Vuex from "vuex";
export default {
     data(){
         return {
       id:1,
       lefticon:"&#xe64a;",
       img:"../../../../../static/img/renovation/mater@2x.png",
       righticon:"&#xe647;",
       flag:false
         }
     },
     created(){
         this.$store.dispatch("IndexRenovation/expericelistActions")
     },
     computed:{
         ...Vuex.mapState({
         experience:state=>state.IndexRenovation.experience
         })
     },
     methods:{
         handleBack(){
             this.$router.history.go(-1)
         },
         handleToggle(){
             this.flag=!this.flag;
             this.$emit("toggle",this.flag)
         }
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
