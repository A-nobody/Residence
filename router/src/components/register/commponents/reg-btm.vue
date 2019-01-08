<template>
    <div class="reg-box">
        <div class="reg-img">
            <img src="../../../../static/img/注册_slices/icon_wx.png" alt="">
            <img src="../../../../static/img/注册_slices/icon-zc-wb.png" alt="">
            <img src="../../../../static/img/注册_slices/icon-zc-qq.png" alt="">
        </div>
        <div class="reg-font">
            <p>登录代表你同意</p><span>《绘居用户协议》</span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.reg-font span{
    color:#7FD0A3
}
.reg-font{
    display: flex;
    width: 3.5rem;
    margin: .5rem auto;
    font-size:.22rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(121,121,121,1);
    justify-content: space-around;
}
.reg-box{
    width: 3.5rem;
    height: .51rem;
    margin: .8rem auto 0;

}
.reg-img{
    display: flex;
    justify-content: space-between;
    
    font-size:22px;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(121,121,121,1);
    line-height:20px;

}
.reg-font{
    
}
</style>