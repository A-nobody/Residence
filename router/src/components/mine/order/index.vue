<template>
    <div id="order_g">
		<div class="fixedBox">
			<!-- 头部 -->
			<div class="head" :style="note">
				<router-link to="/mine" class="btn"></router-link>
				<span>我的订单</span>
			</div>
			<!-- tabs -->
			<div id="tabs_g">
				<ul>
					<li 
						v-for="(item,index) in tabarr"
						>
						<router-link :to="{'name':'order','query':{'id':index}}"
							>{{item.con}}</router-link>
					</li>
				</ul>
			</div>
		</div>
    	<Main/>
    </div>
</template>
<script>
export default {
    components:{
    	Main:()=>import("./components/main.vue")
	},
	data(){
			return{
				note:{
					backgroundImage:"url("+require('../../../../static/img/shop/homeg/arrowsg.png')+")",
					backgroundSize:".18rem .32rem",
					backgroundRepeat:"no-repeat",
					backgroundPosition:".4rem .28rem"
				},
				tabarr:[
						{
							"con":"全部",
							"flag":true
						},
						{
							"con":"待付款",
							"flag":true
						},
						{
							"con":"待收货",
							"flag":true
						},
						{
							"con":"已完成",
							"flag":true
						},
						{
							"con":"已取消",
							"flag":true
						},
					],
				tabindex:0
			}
	},
	created(){
		this.$store.dispatch("mine/handleGetOrder");
	},
}
</script>

<style scoped lang="scss">
    #order_g{
    	width: 100%;
    	height: 100%;
		background: #f6f6f6;
		font-weight: bold;
		.fixedBox{
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 200;
		}
		.head{
			height: .88rem;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #323232;
			font-size: .3rem;
			background-color: #fff;
			position: relative;
			.btn{
				width: 0.5rem;
				height: 0.5rem;
				position: absolute;
				left: 0.3rem;
			}
		}
		#tabs_g{
			width: 100%;
			height:.84rem;
			background: #fff;
			ul{
				height: 100%;
				display: flex;
				li{
					width: 20%;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: .24rem;
					.router-link-active{
						color: #323232;
						display: inline-block;
						height:100%;
						line-height:.84rem;
					}
				}
				
			}
		}
		.router-link-exact-active{
			font-size: .30rem;
			border-bottom: .06rem solid #E37E2E;
		}
    }
</style>