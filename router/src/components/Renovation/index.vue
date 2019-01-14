<template>
    <div class="renovation_header">
        <div class="wrapper" ref="renovation">
           <div class="content">
            <Header-com/>
            <Main-com/>
            <Footer-com/>
          </div> 
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import Bscroll from "better-scroll";
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer_n.vue';


export default {
    components:{
       "Header-com":Header,
       "Main-com":Main,
       "Footer-com":Footer 
    },
    mounted(){

        this.scroll = new Bscroll(this.$refs.renovation,{
            //只有设置成true pullingUp才能使用
            pullUpLoad:true,
            click:true,
            probeType:2
        });
    }
}


</script>

<style>
   .renovation_header{
       width: 100%;
       height: 100%;
   }
   .renovation_header>.wrapper{
       height: 100%;
     
   }
 
</style>