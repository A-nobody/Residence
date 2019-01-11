<template>
    <div id="order_g">
    	<Head/>
    	<Tabs/>
    	<Main/>
    </div>
</template>

<script>
import Head from "./components/head.vue";
import Tabs from "./components/tabs.vue";
import Main from "./components/main.vue";
export default {
    components:{
    	Head,
    	Tabs,
    	Main
    }
}
</script>

<style scoped>
    #order_g{
    	font-weight: bold;
    	width: 100%;
    	height: 100%;
    	background: #f6f6f6;
    }
</style>