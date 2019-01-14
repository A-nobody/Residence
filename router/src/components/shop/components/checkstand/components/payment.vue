<template>
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
		<div class="radiusPay">
			确认支付<span>￥2790</span>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				pays:state=>state.Shop.paystyle
			})
		},
		data(){
			return{
				paystyle:"",
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
			}
		},
		watch:{
			pays(newval,oldval){
				if(!newval){
					this.select.forEach((item)=>{
						item.isChecked = false;
					})
				}
			}
		},
		methods:{
			...Vuex.mapMutations({
				handleMutations:"Shop/handleMutations"
			}),
			check(index){
				//先取消所有选中项
				this.select.forEach((item)=>{
					item.isChecked = false;
				})
				this.select[index].isChecked = true;
				this.paystyle = this.select[index].tit;
				
				this.handleMutations(this.paystyle);
			}
		}
	}
</script>

<style scoped lang="scss">
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
</style>