<template>
    <div class="main">
        <!-- 装修必看 -->
        <div class="renovation_look">
            <p class="look_title">装修必看</p>
            <ul>
                <li v-for="(item,index) in mainpage"  @click="handledata(item)" v-if="index<10" >
                <router-link :to="{name:'details',params:{id:index}}">
                   
                        <p>{{item.essayTitle}}</p>
                        <img :src="item.picpath" class="imgmain">

                    </router-link> 
                </li>
            </ul>
        </div>
        <!-- 空间 -->
        <div class="space">
           <p class="look_title">空间</p>
           <ul>
              <li v-for="(item,index) in mainpage"  @click="handledata(item)" v-if="index>9&&index<14">
                   <router-link :to="{name:'details'}">
                        <p>{{item.essayTitle}}</p>
                        <img :src="item.picpath">
                  </router-link> 
              </li>
           </ul>
        </div>
        <!-- 大家都在看 -->
        <div class="alllook">

           <p class="look_title">大家都在看</p>
          <ul>
              <li v-for="(item,index) in mainpage"  @click="handledata(item)" v-if="index>13&&index<18">
                   <router-link :to="{name:'details'}">
                        <p>{{item.essayTitle}}</p>
                        <img :src="item.picpath">
                  </router-link> 
              </li>
          </ul>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
export default{
    
    created(){
        this.$store.dispatch("IndexRenovation/textActions")
    },
    computed:{
         ...Vuex.mapState({
         mainpage:state=>state.IndexRenovation.mainpage
         })
          
     },
    
    methods:{
        handledata(item){
            setTimeout(() => {
            this.observer.$emit("detail",item);
            this.observer.$off('datail'); 
            }, 200); 
            
        }
    },
    data(){
        return {

        }
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
   .imgmain{
       width:.73rem;
       height:.9rem;
       margin: .2rem .38rem 0 .38rem;
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
   .space>ul>li>a>p,
   .alllook>ul>li>a>p{
       font-size: .18rem;
       color: #CDBC7F;
       margin: .18rem 0 .23rem .19rem;
   }
   .space>ul>li>a>img,
   .alllook>ul>li>a>img{
       width: .73rem;
       height:.9rem;
       margin-left:.37rem ;
   }

</style>
