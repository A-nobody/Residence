<template>
	<div class="head" :style="note">
		<span>确认订单</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				note:{
					backgroundImage:"url("+require('../../../../../../static/img/shop/homeg/arrowsg.png')+")",
					backgroundSize:".18rem .32rem",
					backgroundRepeat:"no-repeat",
					backgroundPosition:".4rem .28rem"
				}
			}
		}
	}
</script>

<style scoped>
	.head{
		height: .88rem;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #323232;
		font-size: .3rem;
		font-weight:bold;
		background-color: #fff;
	}
</style>