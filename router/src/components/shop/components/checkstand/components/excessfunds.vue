<template>
	<div class="excessfunds_g">
		<div class="exfunds_top">
			<p class="tit">支付剩余时间</p>
			<p class="time"><span>{{timer|timer}}</span></p>
		</div>
		<div class="exfunds_bot">
			<p>共<span>1</span>件商品，需付款：<span class="price">￥2790</span></p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				timer:1800,
				newtimer:null,
			}
		},
		props:{
			val:Boolean
		},
		created(){
			this.newtimer = setInterval(this.autoplay,1000);
		},
		watch:{
			val(newval,oldval){
				//先清除定时器
				clearInterval(this.newtimer);
				this.newtimer = setInterval(this.autoplay,1000)
			}
		},
		methods:{
			autoplay(){
					if(this.timer<0){
						this.timer = 0;
						clearInterval(this.newtimer);
						alert("订单取消");
						return;
					}
					if(this.val){
						clearInterval(this.newtimer);
					}else{
						this.timer--;
					}
			}
		},
		filters:{
			timer(val){
				var hour = Math.floor(val/60);
				var second = val - (hour*60);
				if(second<10){
					second = "0"+second;
				}
				var time = hour+":"+second;
				return time;
			}
		}
	}
</script>

<style scoped lang="scss">
	.excessfunds_g{
		height: 3.06rem;
		width: 100%;
		background: #fff;
		padding: 0 .4rem;
		border-bottom: 0.2rem solid #f6f6f6;
		.exfunds_top{
			border-bottom:0.01rem solid #E9E9E9;
			p{
				text-align: center;
			}
			 .tit{
				color: #8A8A8A;
				font-size:.3rem;
				margin-top: .59rem;
			}
			.time{
				line-height: 1.09rem;
				span{
					font-size: .4rem;
					color: #050505;
				}
			}
		}
		.exfunds_bot{
			color: #2A2A2A;
			font-size: .28rem;
			font-weight:bold;
			text-align: right;
			line-height: 1.08rem;
			.price{
				color: #7FD0A3;
				font-size: .32rem;
			}
		}
	}
	
</style>