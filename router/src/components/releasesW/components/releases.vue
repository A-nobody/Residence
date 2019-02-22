<template >
    <div id="releases_w">
        <section>
            <router-link to="">
                <img src="static/img/home_slices/wenzhang.png" alt="">
                <span>发布文章</span>
            </router-link>
            <router-link  to="">
                <img src="static/img/home_slices/zhaoxiangji.png" alt="">
                <span>发布图片</span>
            </router-link>
        </section>
        <footer>
            <span @click="handleback()">
                <img src="static/img/home_slices/cheng.png" alt="">
            </span>
        </footer>
    </div>
</template>

<script>
export default {
    methods:{
        handleback(){
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
    #releases_w{
        width:100%;
        height: 100%;
        background:#7FD0A3;
        position: relative;
        section{
            width: 100%;
            height: 1.7rem;
            box-sizing: border-box;
            padding:0 .5rem;
            position: absolute;
            bottom:3.34rem;
            left:0;
            display: flex;
            justify-content: space-around;
            a{
                display: inline-block;
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                text-align:center;
                font-size:.3rem;
                color:#fff;
                img{
                    width: 1.26rem;
                    height: 1.26rem;
                }
               
            }
        }
        footer{
            width: 100%;
            height: .72rem;
            position:absolute;
            bottom:.5rem;
            left:0;
            text-align: center;
            img{
                width:.72rem;
                height:.72rem;
                margin-left: 50%;
                transform:translateX(-50%);
            }
        }
    }

</style>

