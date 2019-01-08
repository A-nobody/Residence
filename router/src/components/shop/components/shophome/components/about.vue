<template>
	<div id="about_g">
		<div class="about_logo">
			<img src="static/img/shop/homeg/logog.png" />
		</div>
		<div class="about_ri">
			<p><span>林氏木业</span></p>
			<div class="star">
				<span class="star_item" v-for="(star,index) in starScore">{{star}}</span>
   				<span class="star_level">{{temp|level}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				temp:4.0 //从后台获取星级评价数据
			}
		},
		filters:{
			level(val){
				return val+".0"
			}
		},
		computed:{
			starScore(){
				let stars = []; /*定义一个空数组来存储类名*/
				let score = Math.floor(this.temp*2)/2    
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