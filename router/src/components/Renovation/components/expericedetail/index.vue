<template>
    <div class="experindex">
        <header-com/>
        <main-com/>
        <footer-com/>
    </div>
</template>

<script>
import header from './header';
import main from './main';
import footer from './../mustlookskip/footer'
export default {
    components:{
        "header-com":header,
        "main-com":main,
        "footer-com":footer
    }
}
</script>

<style>
   .experindex{
       position: relative;
   }
   footer-com{
       position: fixed;
       bottom: 0;
       left: 0;
   }
</style>
