<template>
  <div id="app">
    <router-view/>
    <Footer-com v-show="false"/>
  </div>
</template>

<script>
import Footer from "./components/footer"
export default {
  components:{
    "Footer-com":Footer
  },
  created(){
  	this.footshow = this.$route.meta.flag;
  },
  data(){
  	return{
  		footshow:true
  	}
  },
  watch:{
  	"$route"(to,from){
  		this.footshow = this.$route.meta.flag;
  	}
  }
}
</script>

<style>
#app {
	width: 100%;
	height: 100%;
}
</style>
