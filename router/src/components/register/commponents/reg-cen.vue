<template>
    <div class="reg-box">
        <div class="reg-center">
            <div class="reg-center-left d1">
                 +86
            </div>
            <div class="reg-center-right">
               <input type="number" v-model="iphone"  oninput="if(value.length>11)value=value.slice(0,11)" placeholder="请输入手机号码">
            </div>
        </div>
        <div class="reg-center d1">
               <div class="reg-center-right">
                   <input type="text" v-model="yzm" maxlength="6" placeholder="请输入验证码">
               </div>
               <div class="reg-center-btn" @click="handReg">
                   获取验证码
               </div>
        </div>
        <div class="reg-query">遇到问题?</div>
        <div class="reg-reg">
            <div @click="handRege">注册</div>
        </div>
        <div class="reg-warn">
            <router-link to="/login">通过账号密码登录</router-link>
        </div>
      
    </div>
</template>

<script>
import axios from "axios"
    export default {
        data () {
            return {
                iphone:"",
                code:'',
                yzm:''
            }
        },
        methods: {
            handReg(){
                console.log(this.iphone)
                axios({
                    method:'post',
                    url:"http://10.9.26.132:8080/getPhoneCaptcha",
                    // url:"http://47.93.27.243:8081/huiju-lr/getPhoneCaptcha",
                    params:{
                        userPhone:this.iphone
                    }
                }).then((data)=>{
                    console.log(data)
                })
            },
            handRege(){
                console.log(this.yzm)
                console.log(this.iphone)
                axios({
                    method:'post',
                    url:"http://10.9.26.132:8080//user/register",
                    // url:"http://47.93.27.243:8081/huiju-lr/getPhoneCaptcha",
                    params:{
                        userPhone:this.iphone,
                        kaptcha:this.yzm
                    }
                }).then((data)=>{
                    if(this.code===0){
                        this.$router.push({ path: '/login', query:{iphone:this.iphone,yzm:this.yzm} })
                     }
                })
                
            }
        },
    }
</script>

<style scoped>
.reg-warn{
    color:rgba(0,0,0,1);
}
.reg-warn{
    width:1.94rem;
    height:.23rem;
    font-size:.24rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    line-height:.2rem;
    margin: 0 auto;
}
.reg-reg{
    margin: 1rem auto .3rem;
    width:5.26rem;
    height:.95rem;
    background:rgba(127,208,163,1);
    border-radius:5px;
}
.reg-reg div{
    display: block;
    height: 100%;
    width: 100%;
    line-height: .95rem;
    font-size:.3rem;
    text-align: center;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
}
.reg-query{
    height:.23rem;
    font-size:.24rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(0,0,0,1);
    position: absolute;
    left: 5.7rem;
    top:7.5rem;
}
.reg-box{
    padding: 0 .5rem;
}
.reg-center{ 
    height:1.12rem;
    display: flex;
    justify-content: space-between;
    margin-top: .05rem;
    align-items: center;
}
.reg-center-left{
    height:1.12rem;
    width: 1.12rem;
    background: #ffffff;
    text-align: center;
    line-height: 1.12rem;
    font-size:.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(0,0,0,1);
    margin-right:.2rem ; 
}
.reg-center-right{
    
    height: 1.12rem;
    width: 5rem;
    line-height: 1.12rem;
    background: beige;
}
.reg-center-right>input{
    height: 100%;
    width: 100%;
    outline: none;
    line-height: .6rem;
    border: none;
    font-size: .3rem;
    border-bottom: .02rem solid rgba(233,233,233,1)
}
.d1{
    border-bottom: .02rem solid rgba(233,233,233,1)

}
.reg-center-btn{
    width:1.39rem;
    height:.6rem;
    background:rgba(127,208,163,1);
    border-radius:.1rem;
    text-align: center;
    line-height: .6rem;
    font-size:.22rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
}
</style>