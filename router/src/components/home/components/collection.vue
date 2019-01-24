<template>
    <div id="collection_w">
        <section class="collection_bg" @click="offColl()">

        </section>
       <section class="collection_main">
           <p class="coll_menu">成功加入
               <span>收藏的图片</span>
               <i class="iconfont" @click="offColl()">&#xe603;</i>
            </p>
            <p class="coll_choice">选择灵感</p>
            <div class="inspiration">
                <img :src="inspiration" alt="灵感">
                <span>1</span>
            </div>
            <div class="created_i">
                <section class="iconfont">&#xe604;</section>
                <span>创建灵感</span>
            </div>
       </section>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    data(){
        return{
            inspiration:"static/img/home_slices/jx 10@2x.png",
        }
    },
    computed:{
      
    },
    created(){
    
    },
    methods:{
       offColl(){
           this.$emit("collSF",false)
       }
    }
}
</script>

<style scoped lang="scss">
    i{
        font-style: normal;
    }
    #collection_w{
        height: 100%;
        width:100%;
        z-index: 1001;
    }
    .collection_main{
        height: 8.02rem;
        width: 7.5rem;
        background:#fff;
        box-sizing: border-box;
        padding:0px .4rem;
        border-top-left-radius: .1rem;
        border-top-right-radius: .1rem;
    }
    .collection_bg{
        height: 5.32rem;
        width: 7.5rem;
        background: rgba(0,0,0,.4)
    }
    .coll_menu{
        padding:0.35rem 0; 
        font:.3rem/.6rem PingFang-SC-Regular;
        position: relative;
        span{
            color:#7FD0A3;
            margin-left: .1rem;
        }
        i{
            position:absolute;
            right:0;
            top:50%;
            margin-top: -.27rem;
            font-size:.22rem;
        }
    }
    .coll_choice{
        font: .26rem PingFang-SC-Regular;
        color:#A1A0A0;
        position: relative;
        width: 100%;
        &::after{
            content: "";
            display: block;
            position: absolute;
            width: 5.29rem;
            height: .01rem;
            background:#A1A0A0;
            top:50%;
            right:0px;
        }
    }
    .inspiration{
        height: .84rem;
        margin: .38rem 0;
        img{
            width: .84rem;
            height: 0.84rem;
            border-radius: .06rem;
            float: left;
        }
        span{
            float: left;
            line-height:.84rem;
            margin-left: .26rem;
            font-size:.26rem;
        }
    }
    .created_i{
        height: .84rem;
        margin-bottom: .38rem;
        section{
            width: .84rem;
            height: 0.84rem;
            border:.05rem #E9E9E9 dashed;
            font-size:.25rem;
            color:#A1A0A0;
            text-align: center;
            line-height:.84rem;
            float: left;
        }
        span{
            float: left;
            line-height:.84rem;
            margin-left: .26rem;
            font-size:.26rem;
            color:#A1A0A0;
        }
    }
</style>

