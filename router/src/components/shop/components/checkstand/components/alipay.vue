<template>
	<div id="alipay_g">
		<div class="tit">
			“绘居”想要打开<span>“{{this.$store.state.Checkstand.paystyle}}”</span>
		</div>
		<div class="btn">
			<span @click="clickCancle()">取消</span>
			<span>打开</span>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		methods:{
			...Vuex.mapMutations({
				clickCancle:"Checkstand/clickCancle"
			})
		}
	}
</script>

<style scoped lang="scss">
	#alipay_g{
		width: 5.44rem;
		height: 2.1rem;
		background: #fff;
		position: absolute;
		top: 42.1%;
		left: 13.5%;
		font-size: .34rem;
		text-align: center;
		line-height: 1.04rem;
		border-radius: .2rem;
		.tit{
			width: 100%;
			color: #020202;
			font-weight:500;
			border-bottom: 0.01rem solid #CECECE;
		}
		.btn{
			display: flex;
		}
		.btn span{
			width: 50%;
			color: #7FD0A3;
		}
		.btn span:nth-of-type(1){
			border-right: 0.01rem solid #CECECE;
		}
	}
</style>