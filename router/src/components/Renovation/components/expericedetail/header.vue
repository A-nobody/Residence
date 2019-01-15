<template>
     <div class="experienceheader">
        <div class="data" v-for="(item,index) in experience" v-if="index==id">
         <div class="bgd">
             <img :src="item.img" class="photo">
            <img :src="lefticon"/>
            <img :src="righticon"/>
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
       lefticon:"../../../../../static/img/renovation/back@2x.png",
       righticon:"../../../../../static/img/renovation/fx@2x.png",
       img:"../../../../../static/img/renovation/mater@2x.png",
         }
     },
     created(){
         this.$store.dispatch("IndexRenovation/expericelistActions")
     },
     computed:{
         ...Vuex.mapState({
         experience:state=>state.IndexRenovation.experience
         })
     }
}
</script>

<style>
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
</style>
