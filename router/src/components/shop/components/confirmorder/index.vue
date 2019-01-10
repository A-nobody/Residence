<template>
	<div id="confirm">
		<Head/>
		<Message/>
	</div>
</template>

<script>
	import Head from "./components/head.vue";
	import Message from "./components/message.vue";
	export default{
		components:{
			Head,
			Message
		}
	}
</script>

<style scoped>
	#confirm{
		width: 100%;
		height: 100%;
	}
</style>