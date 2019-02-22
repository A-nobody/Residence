<template>
	<div id="wholemain_g" class="wrapper" ref="wholewrapper">
		<div class="content main_con">
			<ul>
				<li v-for="(item,index) in alllist">
					<div class="img" @click="handleClick()">
						<img v-lazy="item.goodsPicture" />
					</div>
					<div class="main_bot">
						<p class="con"><span>{{item.goodsTitle}}</span></p>
						<p class="price"><span>{{item.goodsDiscountPrice|price}}</span></p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex"
	import BScroll from 'better-scroll'
	export default{
		filters:{
			price(p){
				return "￥"+p;
			}
		},
		watch:{
			alllist(newval,oldval){
				 this.scroll.finishPullUp();
                 //作用 重新计算better-scroll
                this.scroll.refresh();
			}
		},
		computed:{
			...Vuex.mapState({
				alllist:state=>state.Shop.alllist
			})
		},
		mounted(){
			this.scroll = new BScroll(this.$refs.wholewrapper,{
				pullUpLoad:true,
				click:true,
				probeType:2
			});
			this.scroll.on("pullingUp",()=>{
				this.$store.dispatch("Shop/handlealllistagain");
			});
			this.scroll.refresh();
		},
		created() {
				this.$store.dispatch("Shop/handlealllist");
		},
		activated(){
			this.scroll.refresh();
		},
		methods:{
			handleClick(){
				this.$router.push({name:"Shopdetails"});
			}
		}
	}
</script>

<style scoped lang="scss">
	#wholemain_g{
		width: 100%;
		padding-top:0.22rem;
		height: 100%;
		.main_con ul{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			padding: 0 .2rem;
			li{
				width: 43%;
				margin:0.11rem 0.2rem;
				height: 4.12rem;
				.img{
					width: 3.25rem;
					height: 3.25rem;
					border-radius:.15rem;
					overflow:hidden;
					position: relative;
					img[lazy=loading] {
						width: .64rem;
						height: .64rem;
						margin:auto;
						position: absolute;
						left: 0;
						top: 0;
						right: 0;
						bottom: 0;
					}
					img[lazy=loaded]{
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