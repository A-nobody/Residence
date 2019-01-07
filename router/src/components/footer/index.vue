<template>
    <div id="footer">
        <ul>
            <li v-for="(item,index) in navs">
                <router-link :to="item.name" @click="handleFhover($event,index)">
                    <i></i>
                    <span>{{item.title}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            navs:[
                {
                    name:"home",
                    title:'首页',
                    url:"/img/home_slices/home.png",
                    curl:"/img/home_slices/home1.png"
                },
                {
                    name:"renovation",
                    title:'装修',
                    url:"/img/home_slices/icon_sy_zx@2x.png",
                    curl:"/img/home_slices/decorate1.png"
                },
                {
                    name:"release",
                    title:'发布',
                    url:"/img/home_slices/ZX_8_fb@2x.png",
                    curl:"/img/home_slices/ZX_8_fb@2x.png"
                },
                {
                    name:"style",
                    title:'风格',
                    url:"/img/home_slices/icon_sy_fg@2x.png",
                    curl:"/img/home_slices/style1.png"
                },
                {
                    name:"mine",
                    title:'我的',
                    url:"/img/home_slices/icon_sy_wd@2x.png",
                    curl:"/img/home_slices/my1.png"
                },
            ]
        }
    },
    methods:{
        handleFhover(e,index){
            
        }
    }
}
</script>

<style scoped>
#footer{
		height:.98rem;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		box-shadow:0px -2px 5px rgba(163,163,163,0.34);
		background: #FFFFFF;
		opacity: .85;
	}
	#footer ul{
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: .21rem;
		height: 100%;
	}
	#footer>ul>li i{
		width: .42rem;
		height: .42rem;
		margin-bottom: .09rem;
        display: inline-block;
	}
	#footer>ul>li:nth-of-type(3) img{
		width:.81rem;
		height: .81rem;
		position: absolute;
		top: -0.35rem;
		left: 50%;
		margin-left: -0.4rem;
		border: .06rem solid rgba(255,255,255,0.85);
		border-radius: 50%;
		box-shadow: 0 -2px 5px rgba(163,163,163,0.34);
	}
	#footer>ul>li:nth-of-type(3) span{
		display: inline-block;
		margin-top: 0.37rem;
	}
    #footer>ul>li>.router-link-active{
        color: #7FD0A3
    }
</style>


