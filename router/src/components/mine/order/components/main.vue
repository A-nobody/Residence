<template>
	<div id="main" class="wrapper" ref="main">
		<div class="mainContent content">
			<ul v-for="(item,index) in orderlist">
				<li class="shopname">
					<label 
						class="radiobox" 
						@click="check(index)"
						v-if="wholeflag"
						>
						<img src="static/img/shop/pay_g/check.png" v-if="!item.flag"/>
						<img src="static/img/shop/pay_g/checked.png" v-if="item.flag"/>
					</label>
					<span>{{item.shopName}}</span>
				</li>
				<li class="main_con">
					<div class="img">
						<img src="static/img/mine/banner.png" />
					</div>
					<div class="tit">
						<span class="detail">{{item.goodsTitle}}</span>
						<span class="bcolor">{{item.goodsColor}}</span>
						<span class="price">{{item.goodsDiscountPrice|price}}</span>
						<p class="num">×<span>{{item.goodsNumber}}</span></p>
					</div>
				</li>
				<li class="smalltotal">
					<p class="count">共计<span>{{item.goodsNumber}}</span>件商品</p>
					<p class="total">小计：<span class="tprice">{{item.goodsNumber*item.goodsDiscountPrice|price}}</span></p>
				</li>
				<li class="last" v-if="againflag ">
					<div class="cancel" v-if="cancelflag">
						取消订单
					</div>
					<div class="again" @click="againPay()">
						再次购买
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from "better-scroll";
	import Vuex from "vuex";

	export default{
		data(){
			return{
				id:0,
				wholeflag:true,
				againflag:true,
				cancelflag:false,
			}
		},
		filters:{
			price(p){
				return "￥"+p;
			},
		},
		created(){
			this.id = this.$route.query.id;
			this.changeStatus();
		},
		watch:{
			"$route"(to,from){
				this.id = to.query.id;
				if(this.id!=0){
					this.wholeflag = false;
				}else{
					this.wholeflag = true;
				}
				if(this.id==1){
					this.cancelflag = true;
				}else{
					this.cancelflag = false;
				}
				if(this.id==4){
					this.againflag = false;
				}else{
					this.againflag = true;
				}
				/* 调用修改订单状态的函数 */

				this.changeStatus();

				/* 使每次点击不同的订单状态都会从开始位置开始 */
				this.scroll.scrollTo(0, 0, 0);
				this.$store.dispatch("mine/handleGetOrder");
			},
			orderlist(newval,oldval){
				this.scroll.finishPullUp();
                 //作用 重新计算better-scroll
                this.scroll.refresh();
			}
		},
		computed:{
			...Vuex.mapState({
				orderState:state=>state.mine.orderState,
				orderlist:state=>state.mine.orderlist
			}),
		},
		methods:{
			check(index){
				this.orderlist[index].flag = !this.orderlist[index].flag;
			},
			againPay(){
				this.$router.push({name:"Shopdetails"})
			},
			/* 修改订单状态的 */
			changeStatus(){
				switch(this.id){
					case 1:{
						this.$store.commit("mine/handleChangeStatus",0);
						break;
					}
					case 2:{
						this.$store.commit("mine/handleChangeStatus",1);
						break;
					}
					case 3:{
						this.$store.commit("mine/handleChangeStatus",2);
						break;
					}
					case 4:{
						this.$store.commit("mine/handleChangeStatus",3);
						break;
					}
					default:{
						this.$store.commit("mine/handleChangeStatus","null");
					}
				}
			}
			
		},
		mounted(){
			 this.$nextTick(() =>{
				 this.scroll = new BScroll(this.$refs.main,{
					pullUpLoad:true,
					click:true,
					probeType:2,
				});
				this.scroll.on("pullingUp",()=>{
					this.$store.dispatch("mine/handleGetOrderAgain");
				});
				this.scroll.refresh();
			 })
		}
		
	}
</script>

<style scoped lang="scss">
	#main{
		width: 100%;
		font-size: .28rem;
		color: #181818;
		margin-top: 1.72rem;
		height: 84.1%;
		.mainContent{
			overflow: hidden;
		}
		ul{
			padding: 0 .4rem;
			background: #FFFFFF;
			margin-top:.2rem;
		}
		li{
			padding: 0.28rem 0;
		}
		.main_con{
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
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					width: 4.4rem;
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
		li:not(.last){
			border-bottom: .01rem solid #E9E9E9;
		}
		.smalltotal{
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
		.shopname{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.radiobox{
				width: .36rem;
				height: .36rem;
				display: inline-block;
				margin-right:.37rem;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
		.last{
			display: flex;
			justify-content: flex-end;
			div{
				width: 1.4rem;
				height:.4rem;
				border-radius:.4rem;
				background: #7fd0a3;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #F6F6F6;
				font-size: .23rem;
			}
			.again{
				margin-left: .22rem;
			}
		}
	}
</style>