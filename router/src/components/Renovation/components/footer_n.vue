<template>
    <div class="footer_main">
        <div class="footertitle">
            <p>找设计师</p>
            <span>[北京]</span>
            <i> 查看更多 </i>
        </div>
        <div class="footer_design">
            <ul>
               <li v-for="(item,index) in footerdesign">
                <img :src="item.lookimg">
                <p>{{item.looktitle}}</p>
              </li> 
            </ul>
        </div>
        <div class="footerquality">
            <ul>
                <li v-for="(item,index) in logo">
                   <img :src="item.lookimg">
                   <span>{{item.looktitle}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            footerdesign:[
                {
                looktitle:"建宏设计",
                lookimg:"../../../../static/img/renovation/23@2x.png"
                },
                {
                looktitle:"设计师莫文",
                lookimg:"../../../../static/img/renovation/45@2x.png"
                },
                {
                looktitle:"小兰同学",
                lookimg:"../../../../static/img/renovation/xl12@2x.png"
                },
                {
                looktitle:"大丸子",
                lookimg:"../../../../static/img/renovation/456@2x.png"
                }
            ],
            logo:[
                {
                    looktitle:"实名认证",
                    lookimg:"../../../../static/img/renovation/rz@2x.png"
                },
                {
                    looktitle:"实景案例",
                    lookimg:"../../../../static/img/renovation/rz@2x.png"
                },
                {
                    looktitle:"极速联系",
                    lookimg:"../../../../static/img/renovation/rz@2x.png"
                }
            ]
        }
    }
}
</script>

<style scoped>
     .footer_main{
        width: 6.7rem;
        height: 3.66rem;
        background: #EAEAEA;
        border-radius: .1rem;
        margin: 0 .4rem;
    }
    .footertitle{
        width: 100%;
        height: .75rem;
        position:relative;
        overflow: hidden;
    }
    .footertitle p{
       font-size: .28rem;
       color: #131313;
       float: left;
       margin: .4rem .14rem 0 .31rem;
    }
    .footertitle span{
        font-size: .22rem;
        color: #757575;
        float:left;
        margin-top: .45rem;
    }
    .footertitle i{
        display:inline-block;
        width: 1.34rem;
        height: .35rem;
        border-radius: .18rem;
        position: absolute;
        right:-0.13rem;
        background: #B0E496;
        top: .31rem;
        font-style: normal;
        color: #F8F8F8;
        line-height: .35rem;
        font-size: .22rem;
        text-align: center
    }

    /* 找设计师 */
    .footer_design{
        width: 100%;
        height: 2.1rem;
        padding: 0 .1rem;
    }
    .footer_design ul{
        width: 100%;
        height: 100%;
        display: flex;
        padding: 0 .3rem;
        justify-content: space-between;
    }
    .footer_design ul li img{
        width: 1.24rem;
        height: 1.24rem;
    }
    .footer_design ul li p{
        font-size: .20rem;
        color: #757575;
        text-align: center;
        margin-top:.15rem; 
    }
    /* 底部 */
   .footerquality{
       width: 6.5rem;
       height: .8rem;
       margin: 0 auto;
       border-top: 1px solid #8A8989;
   }
   .footerquality ul{
       display: flex;
       justify-content: space-around;
   }
   .footerquality ul li{
       line-height: .8rem;
   }
   .footerquality ul li img{
       float: left;
       vertical-align: middle;
   }
</style>
