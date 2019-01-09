<template>
    <div>
        <header-com/>
        <main-com/>
        <footer-com/>
    </div>
</template>

<script>
import header from './header';
import main from './main'; 
import footer from './footer';  
export default {
   components:{
       "header-com":header,
       "main-com":main,
       "footer-com":footer
   } ,
   
}
</script>

<style>

</style>