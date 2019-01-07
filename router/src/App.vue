<template>
  <div id="app">
    <router-view/>
    <Footer-com v-show="this.$route.meta.flag"/>
  </div>
</template>

<script>
import Footer from "./components/footer"
export default {
  name: 'App',
  components:{
    "Footer-com":Footer
  }
}
</script>

<style >
#app {
}
</style>
