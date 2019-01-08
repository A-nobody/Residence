<template>
  <div id="app">
    <router-view/>
    <Footer-com v-show="footshow"/>
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

<style >
#app {
<<<<<<< HEAD
  height: auto;
=======
	width: 100%;
	height: 100%;
>>>>>>> master
}
</style>
