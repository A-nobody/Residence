<template>
    <div class="reg-box">
        <div class="reg-top">
            <div class="reg-top-right">
                <div>设计师入住</div>
                <div><img src="../../../../static/img/注册_slices/icon-zc-fh.png" alt=""></div>
            </div>
            <div class="reg-top-left">
                <div>
                    <img src="" alt="">
                </div>
                欢迎你
            </div>
            <div class="reg-top-bottom">
                <div @click="phoneLogin('Active_com')">手机号登录</div>
                <div @click="phoneLogin('Active_com1')">账号密码登录</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            phoneLogin(params){
                this.observer.$emit('phone-h',params)
            }
        }
    }
</script>

<style scoped>
.reg-top{
    width:7.5rem;
    height:5rem;
    position: relative;
    background: url('../../../../static/img/注册_slices/icon-zc-tp.png');
}
.reg-top-right{
    display: flex;
    justify-content: space-between;
    height: .21rem;
    width: 1.5rem;
    position: absolute;
    left: 5.75rem;
    top:.9rem
}
.reg-top-right div:nth-child(1){
    height: 100%;
    line-height: .21rem;
    font-size: .22rem;
    letter-spacing: .02rem;
    font-family: PingFang-SC-Regular;
    color: #ffffff
}
.reg-top-right div:nth-child(2){
    padding:.02rem .08rem;
    

}
.reg-top-right img{
    height: 100%;
}
.reg-top-left{
    font-size: .54rem;
    font-family: PingFang-SC-Heavy;
    font-weight: 500;
    color: #ffffff;
    position: absolute;
    height: .97rem;
    line-height: .97rem;
    left: .4rem;
    top:1.81rem;
}
.reg-top-bottom{
    width: 100%;
    height:.29rem;
    font-size:.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:#ffffff;
    line-height:.2rem;
    position: absolute;
    top:4.35rem;
    padding: 0 .9rem;
    display: flex;
    justify-content: space-between;
}
</style>