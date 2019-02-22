<template>
    <div>
        <header-com  @toggle="handleToggle"/>
        <main-com/>
      <transition name="fade">
        <mask-com v-show="flag"  @close="handleClose"/>
      </transition>
      <transition name="slide">
        <liststyle-com v-show="flag"/>
      </transition>
    </div>
</template>

<script>
import header from './header';
import main from './main'; 
import mask from "./mask";
import liststyle from "./liststyle"
export default {
   components:{
       "header-com":header,
       "main-com":main,
       "mask-com":mask,
       "liststyle-com":liststyle
   } ,
   data(){
       return{
           flag:""
       }
   },
   methods:{
    handleClose(data){
      this.flag = false;
    },
    handleToggle(val){
      this.flag = val;
    },
    

   } 
}
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 300ms;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 300ms;
}



</style>