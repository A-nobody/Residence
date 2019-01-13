<template>
	<div id="tabs_g">
		<ul>
			<li 
				v-for="(item,index) in tabarr"
				@click="handleTab(index)"
				>
				<router-link :to="{'name':'order','query':{'id':index}}"
					:class="tabindex==index?'active':''"
					>{{item}}</router-link>
				</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tabarr:["全部","待付款","待收货","已完成","已取消"],
				tabindex:0
			}
		},
		methods:{
			handleTab(index){
				this.tabindex = index;
			}
		}
	}
</script>

<style scoped lang="scss">
	#tabs_g{
		width: 100%;
		height:.84rem;
		background: #fff;
		margin-bottom: .2rem;
		ul{
			height: 100%;
	        display: flex;
			li{
				width: 20%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 0.24rem;
				a{
					color: #323232;
					display: inline-block;
					height:100%;
					line-height:.84rem;
				}
			}
			.active{
				font-size: .30rem;
				border-bottom: .06rem solid #E37E2E;
			}
		}
	}
</style>