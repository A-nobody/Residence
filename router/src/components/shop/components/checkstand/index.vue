<template>
	<div id="checkstand_g">
		<!-- 头部 -->
		<div class="head" >
			<router-link to="/mine/order?id=1">
				<span class="img">
					<img src="static/img/shop/homeg/arrowsg.png"/>
				</span>
			</router-link>
			<span>收银台</span>
		</div>
		<!-- 倒计时 -->
		<div class="excessfunds_g">
			<div class="exfunds_top">
				<p class="tit">支付剩余时间</p>
				<p class="time"><span>{{timer|timer}}</span></p>
			</div>
			<div class="exfunds_bot">
				<p>共<span>1</span>件商品，需付款：<span class="price">￥2790</span></p>
			</div>
		</div>
		<!-- 付款方式 -->
		<div id="payment_g">
			<ul>
				<li class="paystyle">选择支付方式</li>
				<li v-for="(item,index) in select">
					<div class="le">
						<span><img :src="'static/img/shop/pay_g/'+item.img"/></span>
						<span>{{item.tit}}</span>
					</div>
					<label 
						class="radiobox" 
						@click="check(index)"
						>
						<img :src="'static/img/shop/pay_g/'+item.checkimg" v-if="!item.isChecked"/>
						<img :src="'static/img/shop/pay_g/'+item.checkedimg" v-if="item.isChecked"/>
					</label>
				</li>
			</ul>
			<div class="radiusPay" @click="confirmPay()">
				确认支付<span>￥2790</span>
			</div>
		</div>
		<!-- 遮罩层 -->
		<div id="mask_g" v-if="showAlert1||showAlert2"></div>
		<!-- 弹出框 -->
		<div id="alipay_g" v-if="showAlert1">
			<div class="tit">
				“绘居”想要打开<span>“{{paystyle}}”</span>
			</div>
			<div class="btn">
				<span @click="cancelClickStyle()">取消</span>
				<span>打开</span>
			</div>
		</div>
		<!-- 点击确认支付时-->
		<div class="alet_container" v-if="showAlert2">
			<section class="tip_text_container">
				<div class="tip_icon">
					<span></span>
					<span></span>
				</div>
				<p class="tip_text">{{alertText}}</p>
				<div class="confrim" @click="closeTip">确认</div>
			</section>
    	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				select:[
					{
						"img":"zhifubao@2x.png",
						"tit":"支付宝",
						"isChecked":false,
						"checkimg":"check.png",
						"checkedimg":"checked.png"
					},
					{
						"img":"weixin@2x.png",
						"tit":"微信",
						"isChecked":false,
						"checkimg":"check.png",
						"checkedimg":"checked.png"
					}
				],
				timer:1800,//倒计时半个小时
				newtimer:null,//控制定时器的开启或关闭
				showAlert1: false,//控制支付的弹出框是否创建
				showAlert2: false,//控制点击确认订单的时候出现的弹出框
				paystyle:"",//支付方式
				gotoOrders: false, //去付款
				alertText:""//弹出框的内容
			}
		},
		methods:{
			/* 选择付款方式 */
			check(index){
				//先取消所有选中项
				this.select.forEach((item)=>{
					item.isChecked = false;
				})
				this.select[index].isChecked = true;
				this.paystyle = this.select[index].tit;
				this.showAlert1 = true;
				/* 暂停倒计时 */
				clearInterval(this.newtimer);
			},
			/* 取消选择付款方式 */
			cancelClickStyle(){
				this.select.forEach((item)=>{
					item.isChecked = false;
				})
				this.showAlert1 = false;
				//继续倒计时
				this.remainingTime();
			},
			 //确认付款
			confirmPay(){
				this.showAlert2 = true;
                this.alertText = '当前环境无法支付';
                this.gotoOrders = true;
			},
			//倒计时
			remainingTime(){
				clearInterval(this.newtimer);
				this.newtimer = setInterval(()=>{
				if(this.timer<0){
					this.timer = 0;
					clearInterval(this.newtimer);
					this.showAlert2 = true;
					this.alertText="支付超时";
					return;
				}
					this.timer--;
				},1000)
					
			},
			/* 跳转到我的订单 */
			/* goMineOrder(){
				this.$router.push({name:"order",query:{id:1}});
			}, */

            //关闭提示框，跳转到订单列表页
            closeTip(){
                this.showAlert = false;
                if (this.gotoOrders) {
                    this.$router.push({name:"order",query:{id:2}});
                }
			},
			
		},
		//初始化后就执行定时器
		created(){
			this.remainingTime();
		},
		beforeDestroy(){
            clearInterval(this.newtimer);
		},
		//过滤器把秒过滤成小时分钟
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
	#checkstand_g{
		width: 100%;
		height: 100%;
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
		#payment_g{
				padding: .4rem;
				li{
					color: #020202;
					font-size: .32rem;
					height: 1.08rem;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom: .01rem solid #E9E9E9;
					.le{
						display: flex;
						img{
							width: .4rem;
							height: .4rem;
						}
						span{
							margin-right: .4rem;
						}
					}
				}
				.paystyle{
					color: #7E7E7E;
					font-size: .3rem;
				}
				.radiobox{
					width: .36rem;
					height: .36rem;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.radiusPay{
					width: 6.7rem;
					height: .8rem;
					border-radius: .4rem;
					text-align: center;
					line-height: .8rem;
					position: fixed;
					bottom: .6rem;
					background: #7fd0a3;
					color: #fff;
					font-size: .3rem;
				}
		}
		#mask_g{
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background: rgba(0,0,0,.3);
		}
		#alipay_g{
			width: 5.44rem;
			height: 2.1rem;
			background: #fff;
			position: absolute;
			top: 42.1%;
			left: 13.5%;
			font-size: .34rem;
			text-align: center;
			line-height: 1.04rem;
			border-radius: .2rem;
			.tit{
				width: 100%;
				color: #020202;
				font-weight:500;
				border-bottom: 0.01rem solid #CECECE;
			}
			.btn{
				display: flex;
			}
			.btn span{
				width: 50%;
				color: #7FD0A3;
			}
			.btn span:nth-of-type(1){
				border-right: 0.01rem solid #CECECE;
			}
		}
		.alet_container{
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 200;
			//宽高
			@mixin wh($width, $height){
				width: $width;
				height: $height;
			}
			//字体大小，颜色
			@mixin sc($size, $color){
				font-size: $size;
				color: $color;
			}
			.tip_text_container{
				width: 100%;
				position: absolute;
				top: 50%;
				margin-top: -3rem;
				animation: tipMove .4s ;
				background-color: rgba(255,255,255,1);
				border: 1px;
				padding-top: .6rem;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				border-radius: 0.25rem;
				.tip_icon{
					@include wh(1.5rem, 1.5rem);
					border: 0.15rem solid #f8cb86;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					span:nth-of-type(1){
						@include wh(.1rem, .5rem);
						background-color: #f8cb86;
					}
					span:nth-of-type(2){
						@include wh(.1rem, .1rem);
						border-radius: 50%;
						margin-top: .2rem;
						background-color: #f8cb86;
					}
				}
				.tip_text{
					@include sc(.48rem, #333);
					line-height: .9rem;
					text-align: center;
					margin-top: .8rem;
					padding: 0 .4rem;
				}
				.confrim{
					@include sc(.6rem, #fff);
					font-weight: bold;
					margin-top: .8rem;
					background-color: #4cd964;
					width: 100%;
					text-align: center;
					line-height: 1rem;
					border-bottom-left-radius: 0.25rem;
					border-bottom-right-radius: 0.25rem;
				}
    	}
	}
}
</style>