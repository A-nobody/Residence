<template>
	<div id="viewphoto_g">
		<div class="head">
			<div class="img" @click="clickCancel()">
				<img src="static/img/shop/homeg/cancel.png" />
			</div>
			<div class="num">
				<span>{{index}}</span>/<span>5</span>
			</div>
		</div>
		<!--main组件向父组件传当前是第几张图片-->
		<Main @handle="handlescroll"/>
	</div>
</template>
<script>
	import Main from "./main.vue";
	export default{
		components:{
			Main
		},
		data(){
			return{
				index:1
			}
		},
		methods:{
			handlescroll(val){
				this.index = val;
			},
			clickCancel(){
				this.$router.push({name:'Shopdetails'});
			}
		}
	}
</script>

<style scoped lang="scss">
	#viewphoto_g{
		height: 100%;
		width: 100%;
		background: black;
		position: relative;
		.head{
			color: #fff;
			font-size: .32rem;
			text-align: center;
			font-family:Adobe Heiti Std R;
			line-height:1.26rem;
			.img{
				width: .28rem;
				height: .28rem;
				position:absolute;
				left: .4rem;
				top: .5rem;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>