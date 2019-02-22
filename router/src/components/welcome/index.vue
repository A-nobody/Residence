<template>
    <div class="welcome_box">
        <div class="box">
            <h2>选择你的居住状态</h2>
            <h2>开启绘居之旅</h2>
        </div>
        <div class="or">
            <router-link to ="/style" @click.native="sendData(1)">打算装修</router-link>
        </div>
        <div class="or">
            <router-link to ="/renovation" @click.native="sendData(2)">装修ing</router-link>
        </div>
        <div class="or">
            <router-link to ="/home" @click.native="sendData(3)">随便看看</router-link>
        </div>
        <div>
            <div>

            </div>
        </div>
    </div>
</template>

<script>
 import axios from "axios"
    export default {
        methods: {
            sendData(index){
                console.log(index)
                axios({
                    method:"post",
                    url:"http://10.9.26.132:8080/user/updataUserDetail",
                    params:{
                        userLiveStatr:index
                    }
                })
            }
        }
    }
</script>

<style scoped>
.welcome_box{
    height: 100%;
    width: 100%;
}
.box h2{
    width: 100%;
    text-align: center;
    font-size:.48rem;
    font-family:PingFang-SC-Heavy;
    color:rgba(0,0,0,1);
}
.box{
    padding: 1.5rem 0;

}
.or{
    width:2.45rem;
    height:2.45rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 15px 3px rgba(127, 163, 208, 0.35);
    border-radius:50%;
    border:1px solid #7FD0A3;
    position: absolute
}
.welcome_box div:nth-child(2){
    left:.6rem;
    top:3.54rem;
}
.welcome_box div:nth-child(3){
    left:4.33rem;
    top:4.5rem;
}
.welcome_box div:nth-child(4){
    left:1.84rem;
    top:6.89rem;
}
.welcome_box div:nth-child(5){
    position: absolute;
    height: 1.14rem;
    width: 6.7rem;
    background: url("../../../static/img/注册_slices/icon-syq-men.png") no-repeat;
    background-size: cover;
    left: .4rem;
    top:9.65rem;
}
.welcome_box div:nth-child(5)>div{
    height: .98rem;
    width: .53rem;
    background: url("../../../static/img/注册_slices/icon-syq-ren.png") no-repeat;
    background-size: cover;
    position: absolute;
    left: 4.12rem;
    top:.17rem;

}
.or a{
    display: block;
    text-align: center;
    line-height: 2.45rem;
    widows: 2.45rem;
    text-align: center;
    font-size:.42rem;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(127,208,163,1);
}
</style>