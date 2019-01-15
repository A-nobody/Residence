<template>
	<div id="shophome_g">
		<div class="shopstatic_g">
			<Head/>
			<About/>
			<Tab/>
		</div>
		<keep-alive>
			<div class="main">
				<router-view/>
			</div>
		</keep-alive>
		
	</div>
</template>

<script>
	import Head from "./components/head.vue";
	import About from "./components/about.vue";
	import Tab from "./components/tab.vue";
	
	export default{
		components:{
			Head,
			About,
			Tab
		}
	}
</script>

<style scoped>
	#shophome_g{
		background: #F6F6F6;
		width: 100%;
		height: 100%;
		color: #323232;
		font-weight: bold;
	}
	.shopstatic_g{
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 5;
		background: #F6F6F6;
	}
	.main{
		height: 72%;
		margin-top: 3.74rem;
	}
</style>