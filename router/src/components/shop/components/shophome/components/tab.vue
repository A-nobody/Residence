<template>
	<div id="tab_g">
		<ul>
			<li
				 v-for="(item,index) in arr"
				 @click="hasClick(index)"
				 :class="activeindex==index?'active':''"
				 >
				{{item}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				arr:["主页","全部商品"],
				activeindex:0
			}
		},
		methods:{
			hasClick(index){
				this.activeindex = index;
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
		}
		li:nth-of-type(1){
			margin-left: .99rem;
		}
		li:nth-of-type(2){
			margin-left: 1.64rem;
		}
		.active{
			border-bottom:0.06rem solid #7FD0A3;
		}
	}
</style>