<template>
    <div id="footer">
        <ul>
            <li v-for="(item,index) in navs">
                <router-link :to="item.name">
                    <i class="iconfont" v-html="item.icon"></i>
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
                    curl:"/img/home_slices/home1.png",
                    icon:"&#xe63f;"
                },
                {
                    name:"renovation",
                    title:'装修',
                    url:"/img/home_slices/icon_sy_zx@2x.png",
                    curl:"/img/home_slices/decorate1.png",
                    icon:"&#xe619;"
                },
                {
                    name:"release",
                    title:'发布',
                    url:"/img/home_slices/ZX_8_fb@2x.png",
                    curl:"/img/home_slices/ZX_8_fb@2x.png",
                    icon:"&#xe688;"
                },
                {
                    name:"style",
                    title:'风格',
                    url:"/img/home_slices/icon_sy_fg@2x.png",
                    curl:"/img/home_slices/style1.png",
                    icon:"&#xe791;"
                },
                {
                    name:"mine",
                    title:'我的',
                    url:"/img/home_slices/icon_sy_wd@2x.png",
                    curl:"/img/home_slices/my1.png",
                    icon:"&#xe602;"
                },
            ]
        }
    },
 
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
        z-index:1000;
	}
	#footer ul{
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: .21rem;
		height: 100%;
	}
    #footer>ul>li>a{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
    }
	#footer>ul>li i{
        font-size: .41rem;
        display: inline-block;
	}
    #footer>ul>li span{
        font-size:.22rem;
        font-family: 'PingFang-SC-Medium';
    }
	#footer>ul>li:nth-of-type(3) i{
		font-size: .82rem;
		position: absolute;
		top: -0.36rem;
		left: 50%;
		margin-left: -0.4rem;
		border: .06rem solid rgba(255,255,255,0.85);
        border-top: .02rem solid rgba(255,255,255,0.85);
		border-radius: 50%;
		box-shadow: 0 -2px 5px rgba(163,163,163,0.34);
        color: #7FD0A3
	}
	#footer>ul>li:nth-of-type(3) span{
		display: inline-block;
		margin-top: 0.63rem;
        margin-left: .1rem;
        margin-bottom:.19rem;
	}
    #footer>ul>li>.router-link-active{
        color: #7FD0A3
    }
</style>


