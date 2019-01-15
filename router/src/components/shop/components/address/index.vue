<template>
  <div class="addres">
    <div class="topOut">
      <div class="top">
        <img src="static/img/mine/left.png">
        <h2>添加收货地址</h2>
        <span>保存</span>
      </div>
    </div>
    <div class="main">
      <div class="slct" >
        <span>收货人</span>
      </div>
      <div class="slct" >
        <span>手机号码</span>
        <p><span>+86</span><img src="static/img/mine/right2.png"></p>
      </div>
      <div class="slct" @click="addresShow()">
        <span>所在区域</span>
        <p><img src="static/img/mine/right2.png"></p>
      </div>
      <div class="slct" >
        <span>详细地址：如道路、门牌号、小区、楼道号等</span>
      </div>
    </div>
    <div class="addres2" v-show="flag">
        <div class="mask" @click="addresHide()"></div>
        <div class="content_z">

        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            flag:false
        }
    },
    methods:{
        addresShow(){  
            this.flag = true;
        },
        addresHide(){
            this.flag = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.addres {
    position: relative;
  width: 100%;
  height: 100%;
  font-family: PingFang-SC-Regular;
  font-size: 0.24rem;
  .topOut {
    border-bottom: 0.01rem solid #bfbfbf;
    .top {
      width: 90%;
      margin: 0 auto;
      height: 1.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        font-size: 0.3rem;
      }
    }
  }
  .main {
    width: 90%;
    margin: 0 auto;
    height: 100%;
    .slct {
      width: 100%;
      height: 0.92rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #787777;
      > p > img {
        display: inline-block;
        margin-left: 0.6rem;
      }
    }
  }
  .addres2{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      
      .mask{
          background: rgba(0, 0, 0, 0.3);
          width: 100%;
          height: 2.6rem;
      }
      .content_z{
          width:100%;
          height: 11.13rem;
          position: fixed;
          bottom: 0;
          background: #ffffff;
          border-radius:40px 40px 0 0;
      }
  }
}
</style>
