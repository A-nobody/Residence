<template>
    <div id="search_w">
        <input type="search" class="search" 
        placeholder="大家都在搜：装饰画"
        @click="jumpsearch()">
    </div>
</template>
<script>
export default {
    methods:{
        jumpsearch(){
            this.$emit("searchSF",true)
        }
    }
}
</script>


<style scoped>
    #search_w{
        height: 1.2rem;
        width: 100%;
        position: absolute;
        top:.88rem;
        left:0;
        box-sizing: border-box;
        padding: .28rem .4rem;
        background: #fff;
        z-index: 5;
    }
     #search_w>.search{
         border:0;
         width: 100%;
         height: 100%;
         background:#f6f6f6;
         box-sizing: border-box;
         padding-left:.76rem;
         position: relative;
         font:.26rem PingFang-SC-Regular;
         border-radius: .1rem;
     }
     #search_w::after{
        content: "";
        display: block;
        position: absolute;
        top:.48rem;
        left:.7rem;
        width: .26rem;
        height:.26rem;
        background: url(/static/img/home_slices/icon_sy_ss@3x.png) no-repeat center;
        background-size:.26rem;
     }
</style>

