<template>
	<div id="shhead_g">
		<div class="arrows" @click="handleBack()">
			<img src="static/img/shop/homeg/arrowsg.png"/>
		</div>
		<div class="search">
	      <img src="static/img/shop/homeg/searchg.png"/>
				<input type="text" @change="handlekeyup($event)"/>
	    </div>
	</div>
</template>

<script>
export default {
	methods: {
		handleBack(){
			this.$router.go(-1)
		},
		handlekeyup(e){
			var str = e.target.value;
			this.$store.commit('Shop/changesearchstr',str);
		}
	},
}
</script>


<style scoped lang="scss">
	#shhead_g{
		height: .88rem;
		background: #fff;
		display: flex;
		align-items: center;
	}
	#shhead_g .arrows{
		padding-left: .4rem;
	}
	#shhead_g .arrows img{
		width: .18rem;
		height: .32rem;
	}
	#shhead_g .search{
		width:5.26rem;
		height:0.56rem;
		background: #F6F6F6;
		border-radius:.28rem;
		margin-left: .52rem;
		position: relative;
		input{
			width: 80%;
			height: 100%;
			border: 0;
			background: #F6F6F6;
			outline: none;
			text-indent: .1rem;
			font-size: .24rem;
			position:absolute;
		}
	}
	#shhead_g .search img{
		display: inline-block;
		width: .3rem;
		height: .3rem;
		margin: .13rem 0 .13rem .3rem;
	}
</style>