<template>
	<div id="confirm">
		<!-- 头部 -->
		<div class="head" @click="goGoodsDetails()">
			<span class="img">
				<img src="static/img/shop/homeg/arrowsg.png"/>
			</span>
			<span>确认订单</span>
		</div>
		<!-- 收货人信息 -->
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
				<div class="message_ri" @click="goAddress()">
					<img src="static/img/shop/order_g/arrowsleft.png" />
				</div>
			</div>
			<div class="img">
				<img src="static/img/shop/order_g/地址条纹@2x.png" />
			</div>
		</div>
		<!-- 订单详情部分 -->
		<div class="main">
			<!--这里需要传递数据img-->
			<ul>
				<li class="shopname"><span>林氏木业</span></li>
				<li>
					<div class="img">
						<img src="static/img/mine/banner.png" />
					</div>
					<div class="tit">
						<span class="detail">林氏木业北欧家具1.8米床储物双人床</span>
						<span class="bcolor">红色</span>
						<span class="price">￥2790</span>
						<p class="num">×<span>1</span></p>
					</div>
				</li>
				<li>
					<div class="pay">运费</div>
					<div>包邮</div>
				</li>
				<li class="leavetag">
					<label>
						留言：<input type="text" placeholder="点击填写留言"/>
					</label>
				</li>
				<li class="last">
					<p class="count">共计<span>1</span>件商品</p>
					<p class="total">小计：<span class="tprice">￥2790</span></p>
				</li>
			</ul>
		</div>
		<!-- 尾部 提交订单-->
		<div id="foot">
			<div class="paybox">实付:<span>￥2790</span></div>
			<div class="btn" @click="handleTocheck()">
				提交订单
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			/* 跳转到商品详情 */
			goGoodsDetails(){
				this.$router.push({name:"Shopdetails"})
			},
			/* 跳转到我的地址 */
			goAddress(){
				this.$router.push({name:"address"});
			},
			/* 提交订单到收银台 */
			handleTocheck(){
				this.$router.push({name:'checkstand'})
			}
		}
	}
</script>

<style scoped lang="scss">
	#confirm{
		width: 100%;
		height: 100%;
		background: #f6f6f6;
		font-weight: bold;
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
			.img{
				position: absolute;
				left:.4rem;
				top:.28rem;
				width:.18rem;
				height: .32rem;
				img{
					width:.18rem;
					height: .32rem;
				}
			}
		}
		#message_g{
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
		.main{
			width: 100%;
			font-size: .28rem;
			color: #181818;
			font-weight:bold;
			ul{
				background: #FFFFFF;
				padding: 0 .4rem;
				margin-top: .3rem;
			}
			li{
				padding: 0.28rem 0;
			}
			li:not(.last){
				border-bottom: .01rem solid #E9E9E9;
				display: flex;
				justify-content: space-between;
				.img{
					width: 1.44rem;
					height: 1.42rem;
					margin-right:.54rem;
					border-bottom:0.02rem solid #E3E1E1;
					border-radius:.1rem;
					overflow:hidden;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.tit{
					flex: 1;
					display: flex;
					flex-direction: column;
					font-size: .26rem;
					
					.detail{
						color:#141414 ;
						line-height: .48rem;
					}
					.bcolor{
						color: #929292;
						line-height: .36rem;
						margin-bottom: .22rem;
					}
					.price{
						color: #7FD0A3;
						font-size: .32rem;
					}
					.num{
						text-align: right;
						color: #7FD0A3;
						font-size: .24rem;
					}
				}
			}
			.leavetag{
				input{
					border: 0;
					font-size: .28rem;
					text-indent: .2rem;
					outline: none;
				}
				input::input-placeholder{
					color: #E3E1E1;
				}
				input::-webkit-input-placeholder{
					color: #E3E1E1;
				}
				input::-moz-placeholder{
					color: #E3E1E1;
				}
				input::-ms-input-placeholder{
					color: #E3E1E1;
				}
			}
			.last{
				color: #2A2A2A;
				overflow: hidden;
				text-align: right;
				p{
					display: inline-block;
				}
				.count{
					color: #2A2A2A;
				}
				.total{
					color: #2B2B2B;
					.tprice{
						color: #7FD0A3;
						font-size: .32rem;
					}
				}
			}
		}
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
				color: #F6F6F6;
				font-size: .28rem;
			}
			
		}
	}
</style>