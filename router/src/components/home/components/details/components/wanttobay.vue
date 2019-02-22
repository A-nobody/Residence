<template>
    <div id="want_w">
        <h2 class="de_title">你可能也想买</h2>
        <section class="want_commoditys">
            <div class="commodity_w">
                <section class="commodity_w_img">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3962805517,413692801&fm=27&gp=0.jpg" alt="">
                </section>
                <section class="commodity_w_info">
                    <p class="commodity_w_title">
                        卡莉丝塔是一名神射手，她会给予敌人大量的持续伤害
                    </p>
                    <div>
                        <p class="com_price">
                            ￥
                            <span class="com_price_s">68</span>
                            -
                            <span class="com_price_b">138</span>
                            </span>
                        </p>
                        <button class="purchase_w" @click="handleShopDetails()">已购买</button>
                    </div>
                </section>
            </div>
             <div class="commodity_w">
                <section class="commodity_w_img">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1101417620,1555767446&fm=27&gp=0.jpg" alt="">
                </section>
                <section class="commodity_w_info">
                    <p class="commodity_w_title">
                        卡莉丝塔是一名神射手，她会给予敌人大量的持续伤害
                    </p>
                    <div>
                        <p class="com_price">
                            ￥
                            <span class="com_price_s">68</span>
                            -
                            <span class="com_price_b">138</span>
                            </span>
                        </p>
                        <button class="purchase_w">已购买</button>
                    </div>
                </section>
            </div>
            <p class="comment_com">查看全部<span>72</span>个商品</p>
        </section>
    </div>
</template>

<script>
export default {
    methods:{
        handleShopDetails(){
            this.$router.push({name:"Shopdetails"})
        }
    }
}
</script>

<style scoped> 
    #want_w{
        width: 100%;
        padding:0 .4rem;
        height: 6rem;
    }
    .de_title{
        /* padding:.3rem 0rem .26rem 0rem; */
        font:.34rem PingFang-SC-Bold;
        margin-bottom:.3rem;
    }
    .want_commoditys{
        /* height: 6rem; */
        width: 100%;
    }
    .commodity_w{
        height: 2rem;
        width: 100%;
        display:flex;
        justify-content: space-between;
        margin-bottom:.3rem;
    }
    .commodity_w_img{
        width: 2rem;
        height: 2rem;
    }
    .commodity_w_img>img{
        width: 2rem;
        height: 2rem;
    }
    .commodity_w_info{
        height: 2rem;
        width: 4.04rem;
    }
    .commodity_w_title{
        font:bold .26rem/.4rem  PingFang-SC-Bold;
    }
    .commodity_w_info>div{
        width: 100%;
        display:flex;
        justify-content: space-between; 
        margin-top: 0.36rem;

    }
    .com_price{
        font:.26rem PingFang-SC-Bold;
        color:#757575;
    }
    .purchase_w{
        width: 1.18rem;
        height: 0.46rem;
        border:0;
        background:#E5F6ED;
        color:#7FD0A3;
        text-align: center;
        font:.22rem PingFang-SC-Bold;
        border-radius: 1rem;
    }
    .comment_com{
        width: 100%;
        text-align: center;
        color:#7FD0A3;
        font-size:.2rem;
        border-bottom:1px solid #E9E9E9;
        padding-bottom: .2rem;
    }
</style>
