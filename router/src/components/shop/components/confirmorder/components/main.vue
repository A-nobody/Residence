<template>
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
</template>

<script>
</script>

<style scoped lang="scss">
	.main{
		width: 100%;
		background: #FFFFFF;
		font-size: .28rem;
		color: #181818;
		font-weight:bold;
		ul{
			padding: 0 .4rem;
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
</style>