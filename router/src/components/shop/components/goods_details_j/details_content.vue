<template>
  <div class="details_content_j" >
    <div class="content_price_j">
      <span class="content_price_sign">￥</span>
      <span class="content_price_pri">{{content.goodsDiscountPrice}}</span>
    </div>
    <div class="content_price_old">
      <span class="content_price_old_font">价格</span>
      <span class="content_price_old_none">￥{{content.goodsPrice}}</span>
    </div>
    <div class="content_price_title">{{content.goodsTitle.substr(0,10)}}</div>
    <div class="content_price_details">
        <span>快递:{{content.goodsFreight}}</span>
        <span>发货时间:72小时</span>
        <span>发货地:{{content.shopAddress}}</span>
    </div>
  </div>
</template>


<script>
import Vuex from "vuex"

export default {
  created() {
    this.handleDetails()
  },
   computed: {
    ...Vuex.mapState({
      content: state => state.details.content
    })
  },
    methods: {
    ...Vuex.mapActions({
      handleDetails: "details/handleDetails"
    })
  }
};
</script>


<style lang="scss" scoped>

@mixin font {
  font-size: .26rem;
  font-family: PingFang-SC-Regular;
  color: rgba(157, 156, 161, 1);
}
.details_content_j {
  width: 7.5rem;
  height: 2.16rem;
  background: rgba(255, 255, 255, 1);
  position: relative;
  margin-bottom: .1rem;
  .content_price_j {
    .content_price_sign {
      width: 0.21rem;
      height: 0.27rem;
      font-size: 0.36rem;
      font-family: PingFang-SC-Regular;
      color: rgba(127, 208, 163, 1);
      line-height: 0.7rem;
      margin: 0.32rem 0 0 0.39rem;
    }
    .content_price_pri {
      width: 0.93rem;
      height: 0.31rem;
      font-size: 0.4rem;
      font-family: PingFang-SC-Regular;
      color: rgba(127, 208, 163, 1);
    }
  }
  .content_price_old {
    .content_price_old_font,
    .content_price_old_none {
      @include font;
    }
    .content_price_old_font {
      margin-left: 0.39rem;
    }
    .content_price_old_none {
      text-decoration: line-through;
    }
  }
  .content_price_title {
    width: 4.73rem;
    height: .60rem;
    font-size: .28rem;
    font-family: PingFang-SC-Regular;
    font-weight: bold;
    color:#323232;
    line-height: .60rem;
     margin-left: 0.39rem;
  }
  .content_price_details{
      @include font;
      font-size: .22rem;
      height:.21rem;
      span:nth-child(1){
          margin-left: 0.39rem;
      }
       span:nth-child(2){
          margin-left: 1.33rem;
      }
       span:nth-child(3){
          margin-left: .87rem;
      }
  }
}
</style>
