<template>
	<div id="foot">
		<div class="paybox">实付:<span>￥2790</span></div>
		<div class="btn" @click="handleTocheck()">
			提交订单
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		handleTocheck(){
			this.$router.push({name:'checkstand'})
		}
	},
}
</script>

<style scoped lang="scss">
	#foot{
		width: 100%;
		height: .98rem;
		background: #fff;
		position: fixed;
		bottom: 0;
		font-weight: bold;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		.paybox{
			color: #2b2b2b;
			font-size: .28rem;
			span{
				color:#7fd0a3;
				font-size:.32rem;
			}
		}
		.btn{
			width: 1.54rem;
			height:.6rem;
			border-radius:.6rem;
			background: #7fd0a3;
			margin-left: .36rem;
			margin-right: .4rem;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #FFFFFF;
			font-size: .28rem;
		}
		
	}
</style>