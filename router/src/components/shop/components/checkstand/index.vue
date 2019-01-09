<template>
	<div id="checkstand_g">
		<Head/>
		<Excessfunds :val="paystyle?flag:!flag"/>
		<Payment/>
		<Mark v-show="paystyle?flag:!flag"/>
		<Alipay v-show="paystyle?flag:!flag"/>
	</div>
</template>

<script>
	import Head from "./components/head.vue";
	import Excessfunds from "./components/excessfunds.vue";
	import Payment from "./components/payment.vue";
	import Mark from "./components/mask.vue";
	import Alipay from "./components/alipay.vue";
	import Vuex from "vuex";
	
	export default{
		components:{
			Head,
			Excessfunds,
			Payment,
			Mark,
			Alipay
		},
		computed:{
			...Vuex.mapState({
				paystyle:state=>state.Checkstand.paystyle
			})
		},
		data(){
			return{
				flag:true
			}
		}
	}
</script>

<style scoped>
	#checkstand_g{
		width: 100%;
		height: 100%;
	}
</style>