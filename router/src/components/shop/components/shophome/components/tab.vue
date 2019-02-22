<template>
	<div id="tab_g">
		<ul>
			<li
				 v-for="(item,index) in arr"
				 >
				 <router-link :to="{name:item.name}">
				 	{{item.title}}
				 </router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				arr:[
					{
						"name":"hotlist",
						"title":"主页"
					},
					{
						"name":"alllist",
						"title":"全部商品"
					}
					]
			}
		}
	}
</script>

<style scoped lang="scss">
	#tab_g{
		height: .94rem;
		width: 100%;
		background: #fff;
	}
	#tab_g ul{
		font-size: .28rem;
		line-height: .88rem;
		li{
			float: left;
			a{
				display: flex;
			}
		}
		li:nth-of-type(1){
			margin-left: .99rem;
		}
		li:nth-of-type(2){
			margin-left: 1.64rem;
		}
		.router-link-exact-active{
			border-bottom:0.06rem solid #7FD0A3;
		}
	}
</style>