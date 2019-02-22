<template>
    <div class="talk_footer">
        <hr>
        <div class="talkinput">
            <input type="text" placeholder="大家正热烈讨论，你也来聊聊吧">
           
        </div>
         <div class="comunity">
            <dl> 
                <dt> <img :src="img"> </dt>
                <dd></dd>
            </dl>
            <dl> 
                <dt> <img :src="star"> </dt>
                <dd></dd>
            </dl>
            <dl> 
                <dt> <img :src="zan"> </dt>
                <dd></dd>
            </dl>
            </div>

    </div>
</template>

<script>

export default {
    data(){
        return{
            img:"../../../../../static/img/renovation/icon_sy_pl@2x.png",
            star:"../../../../../static/img/renovation/icon_sy_sc@2x.png",
            zan:"../../../../../static/img/renovation/icon_sy_dz@2x.png",
        }
    }
}
</script>

<style>
    .talk_footer{
        width: 100%;
        height: max-content;
        margin-top: .61rem;
    }
    .talk_footer hr{
         width: 6.7rem;
         height: .01rem;
         margin-bottom: .15rem;
    }
    .talkinput{
        width: 4.28rem;
        height: .63rem;
        border-radius: .06rem;
        float: left;
        margin: 0 .51rem 0 .19rem;
    }
    .comunity{
        float: left;
        margin-top:.22rem; 
    }
    .comunity dl{
        float: left;
        
    }
    .comunity dl dt img{
        float:left;
        width: .32rem;
        height: .30rem;
    }
    .comunity dl:nth-of-type(2) dt img{
        margin: 0 .58rem;
    }

    .talkinput input{
        width: 4.28rem;
        height: .63rem;
        background: #F6F6F6;
        font-size: .24rem;
        outline: none;
        border: none;
        padding-left: .26rem;
        line-height: .63rem;
    }
    .talk_footer{
        position: fixed;
        left: 0;
        bottom: .15rem;
    }
</style>
