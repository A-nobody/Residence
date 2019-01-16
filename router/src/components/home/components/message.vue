<template>
    <div>
        <header class = "h">
            <span class="iconfont back" @click="handleback()">&#xe64a;</span>
            <b>消息</b>
            <i>设置</i>
        </header>
        <section class = "s">
            <div class="ss">
            <div class="s1"><img src="/static/img/home_slices/shezhi@2x.png" alt=""></div>
            <div class="sr">
                <p><b>系统设置</b><span>12:21</span></p>
                <h3>Hi,我们看到你发布的第一张图片</h3>
            </div>
            </div>
            <div class="ss">
            <div class="s1"><img src="/static/img/home_slices/tongzhi@2x.png" alt=""></div>
            <div class="sr">
                <p><b>通知</b><span>22小时前</span></p>
                <h3>来说说：我的2018年度关键词</h3>
            </div>
            </div>
            <div class="ss">
            <div class="s1"><img src="/static/img/home_slices/zixun@2x.png" alt=""></div>
            <div class="sr">
                <b>设计咨询</b>
                <h3>没有新的咨询</h3>
            </div>
            </div>
            <div class="ss">
            <div class="s1"><img src="/static/img/home_slices/wuliu@2x.png" alt=""></div>
            <div class="sr">
                <b>商城信息</b>
                <h3>没有新的信息</h3>
            </div>
            </div>
            <div class="ss">
            <div class="s1"><img src="/static/img/home_slices/shangcheng@2x.png" alt=""></div>
            <div class="sr">
                <b>交易物流</b>
                <h3>没有新的消息</h3>
            </div>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    methods:{
        handleback(){
            this.$router.back()
        }
    }
}
</script>


<style scoped lang="scss">
    a,u{text-decoration:none;}
    b,strong{font-weight:normal;}
    em,i{font-style:normal;}
    .h{
        width:100%;
        height:0.88rem;
        background:rgba(255,255,255,1);
        text-align: center;
        position: relative;
        .back{
            font-size:.32rem;
            float:left;
            line-height: 0.88rem;
            position: relative;
            left: .4rem;
        }
    }
    
    .h>b{
        font-size:.32rem;
        font-family:PingFang-SC-Medium;
        font-weight:bold;
        color:rgba(0,0,0,1);
        line-height: 0.88rem;  
    }
    .h>i{
        line-height: 0.44rem;
        font-size:.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(0,0,0,1);
        margin-left: 3.31rem;
        position: absolute;
        left:3.3rem;
        top:0.21rem;
    }
    .s{
        width:100%;
        margin-top: 0.03rem;
        border-top: 1px solid rgba(204,202,202,1);
        display: flex;
        flex-direction: column;
    }
    .s>.ss{
        margin:auto;
        width:6.69rem;
        height:1.53rem;
        border-bottom: 1px solid rgba(204,202,202,1);
        display: flex;
        align-items: center;
    }
    .s>.ss>.s1{
        width:12%;
        height:0.79rem;
        margin-right: 0.4rem;
    }
    .s>.ss>.s1>img{
        width:0.79rem;
        height:0.79rem;
        /* background:url(/static/img/messagel/shezhi@2x.png) no-repeat;  */
    }
    .s>.ss>.sr>p{
        width:88%;
        display: flex;
        justify-content: space-between;
    }
    .s>.ss>.sr>p>b{
        font-size:.3rem;
        font-family: PingFang-SC-Regular;
    }
    .s>.ss>.sr>b{
        font-size:.3rem;
        font-family: PingFang-SC-Regular;
    }
    .s>.ss>.sr>p>span{
        font-size:.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(191,191,191,1);
    }
    .s>.ss>.sr>h3{
        font-size:.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(191,191,191,1);
    }
    .s>.ss>.sr{
        width:88%;
        height:0.79rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>


