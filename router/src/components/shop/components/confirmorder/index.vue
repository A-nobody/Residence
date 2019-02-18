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
			<ul v-for="(item,index) in shoplist">
				<li class="shopname"><span>{{Object.keys(item).toString()}}</span></li>
				<li v-for="(list,ind) in item[shopname[index]]">
					<div class="img">
						<img v-lazy="list.goodsPicture[0].url" />
					</div>
					<div class="tit">
						<span class="detail">{{list.goodsTitle}}</span>
						<span class="bcolor">{{list.goodsColor}}</span>
						<span class="price">{{list.goodsDiscountPrice|price}}</span>
						<p class="num">×<span>{{list.goodsNumber}}</span></p>
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
					<p class="count">共计<span>{{shopcount.length==0?0:shopcount[index]}}</span>件商品</p>
					<p class="total">小计：<span class="tprice">{{shopprice.length==0?0:shopprice[index]|price}}</span></p>
				</li>
			</ul>
		</div>
		<!-- 尾部 提交订单-->
		<div id="foot">
			<div class="paybox">实付:<span>{{sumprice|price}}</span></div>
			<div class="btn" @click="handleTocheck()">
				提交订单
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				shoplist:[],//订单列表
				shopname:[],//店铺名字
				shopcount:[],//商品总数
				shopprice:[],//商品总价
				sumprice:0,//付款总价
				sumcount:0,//付款商品的数量
			}
		},
		/* 过滤 */
		filters:{
			price(p){
				return "￥"+p;
			}
		},
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
				this.$router.push({name:'checkstand','query':{"sumprice":this.sumprice,"sumcount":this.sumcount}})
			},
			count(){
				 if(this.shoplist.length!=0){
					 var countlist = [];
					 var pricelist = [];
					 this.shoplist.forEach((item,index)=>{
						 var count = 0;
						 var price = 0;
						item[this.shopname[index]].forEach((list,ind)=>{
							count += Number(list.goodsNumber);
							price += Number(list.goodsDiscountPrice)*Number(list.goodsNumber);
						})
						pricelist.push(price);
						countlist.push(count);
					}) 
					this.shopcount = countlist;
					this.shopprice = pricelist;
					if(pricelist.length!=0){
						pricelist.forEach((lis,ind)=>{
							this.sumprice += Number(lis);
						})
					}
					if(countlist.length!=0){
						countlist.forEach((lis,ind)=>{
							this.sumcount += parseInt(lis);
						})
					}
				 }
            }
		},
		created(){
			this.$axios({
				method:"post",
				url:"api/mock/5c36e81c96e17359c184e2f8/huiju/shop/addOrder",
				data:{
					userId:1,
					addressId:1,
					cartId:[
							{
								"shopId":1,
								"goodsId":[1]
							},
							{
								"shopId":2,
								"goodsId":[4,5]
							}
						]
				}
			}).then((data)=>{
				
				this.shoplist = data.data.Result;
				var arr = this.shoplist.map((item,index)=>{
					return Object.keys(item).toString();
				})
				this.shopname = arr;
			})
		},
		 beforeMount(){
            this.count()
		},
		watch:{
			shoplist(newval,oldval){
				this.count()
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
			position: fixed;
			top: 0;
			z-index: 99;
			height: .88rem;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #323232;
			font-size: .3rem;
			font-weight:bold;
			background-color: #fff;
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
			margin-top: .88rem;
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
			margin-bottom: .98rem;
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