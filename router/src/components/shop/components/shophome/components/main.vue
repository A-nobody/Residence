<template>
	<div id="main_g" class="wrapper">
		<div class="main_top">
			热销商品
		</div>
		<div class="main_con">
			<ul>
				<li v-for="(item,index) in shoparr">
					<div class="img">
						<img :src="'static/img/shop/homeg/'+item.img" />
					</div>
					<div class="main_bot">
						<p class="con"><span>{{item.con}}</span></p>
						<p class="price"><span>{{item.price|price}}</span></p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				shoparr:[
					{
						"img":"tu1g.png",
						"con":"椰棕床垫1.8米弹簧双人护脊床护脊床",
						"price":1990
					},
					{
						"img":"tu2g.png",
						"con":"北欧布艺沙发小户型客厅组合组合组合",
						"price":2640
					},
					{
						"img":"tu3g.png",
						"con":"椰棕床垫1.8米弹簧双人护脊床护脊床",
						"price":1990
					},
					{
						"img":"tu4g.png",
						"con":"椰棕床垫1.8米弹簧双人护脊床",
						"price":1990
					},
					{
						"img":"tu2g.png",
						"con":"北欧布艺沙发小户型客厅组合组合组合",
						"price":2640
					},
					{
						"img":"tu3g.png",
						"con":"椰棕床垫1.8米弹簧双人护脊床护脊床",
						"price":1990
					},
					{
						"img":"tu4g.png",
						"con":"椰棕床垫1.8米弹簧双人护脊床",
						"price":1990
					}
				]
			}
		},
		filters:{
			price(p){
				return "￥"+p;
			}
		}
	}
</script>

<style scoped lang="scss">
	#main_g{
		width: 100%;
		padding-top:0.22rem;
		.main_top{
			font-size: .32rem;
			line-height: .71rem;
			margin-left: .4rem;
			font-weight:bold;
		}
		.main_con ul{
			width: 100%;
			display: flex;
			justify-content:space-around;
			padding: 0 .3rem;
			flex-wrap: wrap;
			li{
				margin-top: .22rem;
				height: 4.12rem;
				.img{
					width: 3.25rem;
					height: 3.25rem;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.main_bot{
					width: 3.25rem;
					padding-left: .36rem;
					background: #fff;
					padding-bottom: .13rem;
					.con{
						font-size: .18rem;
						color:#000;
						width: 2.58rem;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						line-height: .49rem;
					}
					.price{
						font-size: .24rem;
						color: #7FD0A3;
						line-height: .25rem;
					}
				}
			}
		}
	}
</style>