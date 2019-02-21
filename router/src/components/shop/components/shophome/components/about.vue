<template>
	<div id="about_g">
		 <div class="about_logo">
			<img v-lazy="data.shopsLogo"/>
		</div>
		<div class="about_ri">
			<p><span>{{data.shops.shopsName}}</span></p>
			<div class="star">
				<span class="star_item" v-for="(star,index) in starScore">{{star}}</span>
   				<span class="star_level">{{data.shops.shopsLevel|level}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				data:[]
			}
		},
		created(){
		this.index = this.$route.query.id;
			this.$axios({
				method:"post",
				url:"/apig/shops/1",
				}).then((data)=>{
					this.data = data;
			})
			/* this.$axios({
				method:"post",
				url:"/apiw/mock/5c36e81c96e17359c184e2f8/huiju/shop/shopid",
				data:{
					id:4
				}
				}).then((data)=>{
					this.data = data.data.data[0];
			}) */
		},
		filters:{
			level(val){
				return val+".0"
			}
		},
		computed:{
			starScore(){
				let stars = []; /*定义一个空数组来存储类名*/
				let score = Math.floor((this.data.shops.shopsLevel)*2)/2    
				/*把评分转成整数或整数+0.5（4.7转成4.5 4.2转成4.0）*/
				let wholeScore = Math.floor(score)/*取整数分数（显示全星）*/
			
				for(let i = 0 ; i < wholeScore ; i++ ){
					stars.push("★")/*整数分数为多少 ，就添加几个全星*/
				}
				while(stars.length<5){
					stars.push("☆");
				}
				return stars;
			}
		}
	}
</script>

<style scoped lang="scss">
	#about_g{
		height: 1.72rem;
		background: #fff;
		display: flex;
		margin-bottom: .2rem;
	}
	#about_g .about_logo{
		margin: .29rem .24rem .29rem .4rem;
	}
	#about_g .about_logo img{
		width: 1.1rem;
		height: 1.14rem;
	}
	#about_g .about_ri{
		padding-top:.34rem;
	}
	#about_g .about_ri p{
		font-size: .34rem;
		font-weight:bold;
		line-height: .34rem;
		margin-bottom: .23rem;
	}
	
	.star{
		.star_item{
			width: .26rem;
			height: .26rem;
			display: inline-block;
			margin: 0 .03rem;
			background: no-repeat;
			color: #F8EC61;
			font-size: .26rem;
		}
		.star_level{
			font-size: .22rem;
			font-weight:bold;
		}
	}
</style>