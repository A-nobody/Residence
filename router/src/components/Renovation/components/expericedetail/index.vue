<template>
    <div class="experindex">
        <header-com  @toggle="handleToggle"/>
        <footer-com/>
      <transition name="fade">
        <mask-com v-show="flag" @close="handleClose"/>
      </transition>  
      <transition name="slide"/>
        <liststyle-com v-show="flag"/>
      </transition> 
    </div>
</template>

<script>
import header from './header';
import mask from "../mustlookskip/mask"
import liststyle from "../mustlookskip/liststyle"
import footer from './../mustlookskip/footer'
export default {
    components:{
        "header-com":header,
        "mask-com":mask,
        "liststyle-com":liststyle,
        "footer-com":footer
    },
    data(){
        return{
            flag:""
        }
    },
    methods:{
    handleToggle(val){
      this.flag = val;
    },
    handleClose(){
      this.flag = false;
    }
    }
}
</script>

<style>
   .experindex{
       position: relative;
       height: 100%;
   }
   footer-com{
       position: fixed;
       bottom: 0;
       left: 0;
   }
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
