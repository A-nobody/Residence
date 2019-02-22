<template>
    <div class="reg-box">
        <component :is="com_h"></component>
        <div class="reg-query">遇到问题?</div>
        <div class="reg-reg">
            <div @click="log">登录</div>
        </div>
        <div class="reg-warn">
            <router-link to="/register">注册绘居账号</router-link>
        </div>
      
    </div>
</template>

<script>
import Active_com from "./reglog.vue"
import Active_com1 from "./logreg.vue"
import axios from "axios"
    export default {
        data () {
            return {
                com_h:"Active_com",
                iphone:'',
                yzm:"",
            }
        },
        created () {
          this.observer.$on('phone-h',(data)=>{
              this.com_h = data;
          }) 
          this.observer.$on('phone-g',(data)=>{
              this.iphone=data.iphone,
              this.yzm=data.yzm
          }) 
        },
        components: {
            Active_com,
            Active_com1
        },
        methods: {
            log(){
                console.log(this.iphone)
                console.log(this.yzm)
                axios({
                    method:'post',
                    // url:"http://10.9.26.132:8080/user/login",
                    url:"http://47.93.27.243:8081/huiju-lr/user/login",
                    params:{
                        loginMode:2,
                        userPhone:this.iphone,
                        captcha:this.yzm
                    }
                }).then((data)=>{
                    if(data.code===0){
                        this.$router.push('/welcome')
                    }
                })
            },

        }
    }
</script>

<style scoped>
.reg-warn>a{
     color:#666
}
.reg-warn{
    width:1.94rem;
    height:.23rem;
    font-size:.24rem;
    text-align: center;
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
    font-size:.3rem;
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
    border-bottom: .02rem solid rgba(233,233,233,1)
 
}
.reg-center-right{
    height: 1.12rem;
    width: 5rem;
    background: beige;
}
.reg-center-right>input{
    height: 100%;
    width: 100%;
    line-height: 1.12rem;
    outline: none;
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