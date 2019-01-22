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
						@click="handleTab(index)"
						>
						<router-link :to="{'name':'order','query':{'id':index}}"
							:class="tabindex==index?'active':''"
							>{{item}}</router-link>
						</li>
				</ul>
			
			
			</div>
		</div>
    	<Main/>
    </div>
</template>
<script>
import Main from "./components/main.vue";
export default {
    components:{
    	Main
	},
	data(){
			return{
				note:{
					backgroundImage:"url("+require('../../../../static/img/shop/homeg/arrowsg.png')+")",
					backgroundSize:".18rem .32rem",
					backgroundRepeat:"no-repeat",
					backgroundPosition:".4rem .28rem"
				},
				tabarr:["全部","待付款","待收货","已完成","已取消"],
				tabindex:0
			}
	},
	methods:{
			handleTab(index){
				this.tabindex = index;
			}
	}
}
</script>

<style scoped lang="scss">
    #order_g{
    	font-weight: bold;
    	width: 100%;
    	height: 100%;
    	background: #f6f6f6;
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
					font-size: 0.24rem;
					a{
						color: #323232;
						display: inline-block;
						height:100%;
						line-height:.84rem;
					}
				}
				.active{
					font-size: .30rem;
					border-bottom: .06rem solid #E37E2E;
				}
			}
		}
    }
</style>