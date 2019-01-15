<template>
    <div id="disscssW">
        <input type="text" placeholder="大家正在热烈讨论，你也来聊聊吧！" class="discuss_user">
        <section class="disscssW_info">
            <span  class="disscssW_comment">
                <i class="iconfont" v-html="disscssW_comment"></i>
                <span>111</span>
            </span>
            <span  class="disscssW_collection">
                 <i class="iconfont"  v-html="disscssW_collection"></i>
                  <span>111</span>
            </span>
            <span  class="disscssW_up">
                 <i class="iconfont"  v-html="disscssW_up"></i>
                  <span>111</span>
            </span>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return{
           disscssW_comment:"&#xe601;" ,
           disscssW_collection:"&#xe648;",
           disscssW_up:"&#xe607;"
        }
    }
}
</script>

<style>
    #disscssW{
        height: 0.98rem;
        width:100%;
        position: fixed;
        bottom:0;
        left:0;
        z-index:5;
        padding:0 .19rem 0 .4rem;
        display:flex;
        justify-content: space-between;
        background: #fff;
        border-top:1px solid #E9E9E9;
    }
    .discuss_user{
        width: 4.9rem;
        height: 0.63rem;
        background: #f6f6f6;
        border:0;
        border-radius: .06rem;
        margin-top:.18rem; 
        color: #A1A0A0;
        font-size:.24rem;
        padding-left: .26rem;
    }
    .disscssW_info{
        width: 3.1rem;
        font-size:.32rem;
        display:flex;
        justify-content: space-around;
    }
     .disscssW_info>span{
        display:flex;
        flex-direction: column;
        justify-content:center;
        width: 7%;
     }
     .disscssW_info>span>span{
         font:.16rem PingFang-SC-ExtraLight;
         color:#A1A0A0;
     }
    .disscssW_info i{
        font-size:.3rem;
    }
</style>
