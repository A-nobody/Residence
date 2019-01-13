<template>
	<div id="message_g">
		<div class="message_top">
			<div class="message_le">
				<img src="static/img/shop/order_g/zuobiao@2x.png" />
			</div>
			<div class="message_bet">
				<div class="message_con">
					<span class="uname">叶良辰</span>
					<span class="tel">1311111111</span>
				</div>
				<div class="address">
					<span>北京市海淀区黄村镇幸福小区</span>
				</div>
			</div>
			<div class="message_ri">
				<img src="static/img/shop/order_g/arrowsleft.png" />
			</div>
		</div>
		<div class="img">
			<img src="static/img/shop/order_g/地址条纹@2x.png" />
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="scss">
	#message_g{
		height:1.78rem;
		width: 100%;
		background-color: #F6F6F6;
		font-size: .28rem;
		color: #323232;
		font-weight: bold;
		.message_top{
			padding: 0 .4rem;
			display: flex;
			height: 1.48rem;
			justify-content: space-between;
			align-items: center;
		}
		.message_le img{
			width:.27rem;
			height: .34rem;
		}
		.message_ri img{
			width:.11rem;
			height: .19rem;
		}
		.uname{
			margin-right: .32rem;
		}
		.address{
			color: #929292;
			margin-top: .25rem;
		}
		.img{
			margin-top: .02rem;
			width: 100%;
			img{
				width: 100%;
			}
		}
	}
</style>