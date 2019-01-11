<template>
	<div class="wrapper bedbox" ref="bedbox">
		<ul class="content">
			<li v-for="(item,index) in imgs">
				<img :src="item.url"/>
			</li>
		</ul>
	</div>
</template>

<script>
	import Bscroll from "better-scroll";
	
	export default{
		data(){
			return{
				imgs:[
					{
						id:0,
						url:"http://files.eyee.com/Shop/system/main/a0b614d6b54b4a639ce85b18113c013c.jpg"
					},
					{
						id:1,
						url:"http://files.eyee.com/Shop/system/main/bd22f8913850432bb93d44ecb1bb2692.jpg"
					},
					{
						id:2,
						url:"http://files.eyee.com/Shop/system/main/06bd1f85d6f346c18c8f486cb457b1cb.jpg"
					},
					{
						id:3,
						url:"http://files.eyee.com/Shop/system/main/a0b614d6b54b4a639ce85b18113c013c.jpg"
					},
					{
						id:4,
						url:"http://files.eyee.com/Shop/system/main/bd22f8913850432bb93d44ecb1bb2692.jpg"
					}
				]
			}
		},
		mounted(){
			this.scroll = new Bscroll(this.$refs.bedbox,{
				scrollX : true,
				snap: {
				  loop: true
				},
				probeType:2
			});
			
			/*监听当前实例上的自定义事件。如：scroll, scrollEnd, pullingUp, pullingDown等*/
			this.scroll.on('scroll',(pos)=>{
				let pageIndex = this.scroll.getCurrentPage().pageX;
				this.$emit("handle",pageIndex+1);
			})
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
			width: max-content;
			display: flex;
			li{
				width: 7.5rem;
				height: 100%;
				flex-shrink: 0;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>