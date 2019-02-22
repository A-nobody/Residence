<template>
<div></div>
     
</template>

<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
    computed:{
        ...Vuex.mapState({
            professor:state=>state.IndexRenovation.professor
        })
    },
    created(){
        this.$store.dispatch("IndexRenovation/expericeActions")
    },
    
}
</script>

<style>
   
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
       border: 1px solid #ECECEC;
       border-radius: .1rem;
       margin-right: .25rem;
   }
   .professor>ul>li:nth-of-type(1){
       margin-left: .35rem;
   }
   .professor>ul>li>img:nth-of-type(1){
       width:4.58rem;
       height: 2.54rem;
   }
   .professor>ul>li>a>p{
       font-size:.28rem;
       color:#000;
       margin: .2rem .3rem 0 .3rem;
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
