<template>
    <div>
        <header class = "h">
            <div class="hh">
            <button class = "b1"></button>
            <h2>我的收货地址</h2>
            <h3 @click="handlegoadd()">添加新的地址</h3>
            </div>
        </header>
        <section class = "s">
            <div class="ss">
                <div class="so">
                <div class="s1">
                    <img src="/static/img/addressl/icon1@2x.png" alt="">
                </div>
                <div class="s2">
                    <p><b>Alice</b><i>13213588888</i></p>
                    <span>河南省&nbsp;洛阳市&nbsp;洛龙区&nbsp;开元大道办事处</span>
                </div>
                </div>
                <button class = "s3">编辑</button>
            </div>
             <div class="ss">
                 <div class="so">
                <div class="s1">
                    <img src="/static/img/addressl/icon2@2x.png" alt="">
                </div>
                <div class="s2">
                    <p><b>Alice</b><i>13213588888</i></p>
                    <span>河南省&nbsp;洛阳市&nbsp;洛龙区&nbsp;开元大道办事处</span>
                </div>
                </div>
                <button class = "s3">编辑</button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods:{
        handlegoadd(){
            this.$router.push({"name":"addaddress"});
        }
    }
}
</script>

<style scoped>
    a,u{text-decoration:none;}
    b,strong{font-weight:normal;}
    em,i{font-style:normal;}
    .h{
        width:100%;
        height:.88rem;
        background:rgba(255,255,255,1);
        display: flex;
        justify-content: center;
        /* line-height: .88rem; */
    }
    .h>.hh{
        width:89%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .h>.hh>.b1{
        /* margin-left: .4rem; */
        width:.16rem;
        height:.28rem;
        border:0;
        background:#fff url(/static/img/addressl/you@2x.png) no-repeat;
        background-size: contain;
    }
    /* .h>.hh>.zuo>img{
        width:100%;
        height:100%;
    } */
    .h>.hh>h2{
        margin-left: 1.1rem;
        /* width:1.78rem; */
        height:0.88rem;
        line-height: .88rem;
        font-size:.3rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(0,0,0,1);
    }
    .h>.hh>h3{
        /* width:1.42rem; */
        /* margin-left: 1.03rem; */
        font-size:.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(0,0,0,1);
    }
    .s{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .s>.ss{
        width:89%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: .53rem;
    }
    .s>.ss:nth-child(1){
        margin-top:.61rem;
    }
    .s>.ss>.so>.s1{
        width:.88rem;
        height:.88rem;
    }
    .s>.ss>.so{
        display: flex;
        width:72.5%;
    }
    .s>.ss>.so>.s1>img{
        width:100%;
        height:100%;
    }
    .s>.ss>.so>.s2{
        width:44%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: .23rem;
    }
    .s>.ss>.so>.s2>p>b{
        font-size:.24rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(0,0,0,1);
    }
    .s>.ss>.so>.s2>p>i{ 
        margin-left: .12rem;
        font-size:.2rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(0,0,0,1);
    }
    .s>.ss>.so>.s2>span{
        width:3.35rem;
        font-size:.2rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(0,0,0,1);
    }
    .s>.ss>.s3{
        width:.84rem;
        height:.32rem;
        text-align: center;
        font-size:.2rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(191,191,191,1);
        border:0;
        background:#fff;
        border-left: .01rem solid rgba(191,191,191,1);
    }
</style>


