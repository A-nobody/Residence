<template>
	<div class="head" :style="note" @click="handleBack()">
		<span>收银台</span>
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
		},
		methods: {
			handleBack(){
				this.$router.go(-1);
			}
		},
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
		border: 0.01rem solid #E9E9E9;
	}
</style>