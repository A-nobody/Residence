<template>
	<div id="confirm">
		<Head/>
		<Message/>
		<Main/>
		<Foot/>
	</div>
</template>

<script>
	import Head from "./components/head.vue";
	import Message from "./components/message.vue";
	import Main from "./components/main.vue";
	import Foot from "./components/foot.vue"
	export default{
		components:{
			Head,
			Message,
			Main,
			Foot
		}
	}
</script>

<style scoped>
	#confirm{
		width: 100%;
		height: 100%;
		background: #f6f6f6;
		font-weight: bold;
	}
</style>