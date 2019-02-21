<template>
	<div class="wrapper bedbox" ref="bedbox">
		<ul class="content">
			<li v-for="(item,index) in goodsdetailsImg">
				<img :src="item.goodsCover"/>
				
			</li>
		</ul>
	</div>
</template>

<script>
	import Bscroll from "better-scroll";
	import Vuex from "vuex";
	export default{
		data(){
			return{
				// imgs:[]
			}
		},
		created(){
			// this.$axios({
			// 	method:"post",
			// 	url:"/apiw/mock/5c36e81c96e17359c184e2f8/huiju/shop/goods/goodsDetail",
			// 	data:{
			// 		goodsId:this.goodsId
			// 	}
			// }).then((data)=>{
			// 	this.imgs = data.data.listproinfo[0].goodsPicture;
			// })
		},
		computed:{
			...Vuex.mapState({
				// goodsId:state=>state.Shop.goodsId
				goodsdetailsImg: state => state.details.goodsdetailsImg
			})
		},
		updated(){
			this.scroll = new Bscroll(this.$refs.bedbox,{
				scrollX : true,
				/* snap: false 是为了获取到当前滚动的页数*/
				snap: {
				  loop: false
				},
				/*是否启用回弹动画效果 */
				bounce: false,
				probeType:2
			});
			/*监听当前实例上的自定义事件。如：scroll, scrollEnd, pullingUp, pullingDown等*/
			this.scroll.on('scrollEnd',(pos)=>{
				let pageIndex = this.scroll.getCurrentPage().pageX;
				this.$emit("handle",pageIndex+1);
			})
			this.scroll.refresh();
		}
	}
</script>

<style scoped lang="scss">
	.bedbox{
		width:100%;
		height:56%;
		position: absolute;
		top: 21%;
		overflow: hidden;
		ul{
			height: 100%;
			width:500%;
			display: flex;
			li{
				width: 20%;
				height: 100%;
				flex-shrink: 0;
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
		}
	}
</style>