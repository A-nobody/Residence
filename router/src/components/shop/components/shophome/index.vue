<template>
	<div id="shophome_g">
		<div class="shopstatic_g">
			<Head/>
			<About/>
			<Tab/>
		</div>
		<div class="wrapper mainwrapper" ref="maing">
			<div class="content maingcon">
				<Main/>
			</div>
		</div>
	</div>
</template>

<script>
	import Head from "./components/head.vue";
	import About from "./components/about.vue";
	import Tab from "./components/tab.vue";
	import Main from "./components/main.vue";
	
	import BScroll from 'better-scroll'
	export default{
		components:{
			Head,
			About,
			Tab,
			Main
		},
		mounted(){
			this.scroll = new BScroll(this.$refs.maing);
			this.scroll.refresh();
		}
	}
</script>

<style scoped>
	#shophome_g{
		background: #F6F6F6;
		width: 100%;
		height: 100%;
		color: #323232;
	}
	.shopstatic_g{
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 5;
		background: #F6F6F6;
	}
	.mainwrapper{
		height: 72%;
		margin-top: 3.74rem;
	}
	
</style>