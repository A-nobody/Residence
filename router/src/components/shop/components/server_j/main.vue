<template>
  <div class="server_main_j">
    <div class="main_goods">
      <div class="goods_img">
        <img src="../../../../../static/img/shop/server_slices_j/tu9@2x.png" alt>
      </div>
      <div class="title">{{server.goodsBrand}}</div>
      <div class="price">￥ {{server.goodsDiscountPrice}}</div>
      <div class="sendGoods">
        <img src="../../../../../static/img/shop/server_slices_j/fasong@2x.png" alt>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex"
export default {
  computed:{
    ...Vuex.mapState({
      server:state=>state.details.server
    })
  }
};
</script>
<style lang="scss" scoped>
@mixin position($top, $left) {
  position: absolute;
  top: $top;
  left: $left;
}
.server_main_j {
  width: 100%;
  height: 11.08rem;
  .main_goods {
    width: 7.5rem;
    height: 2.92rem;
    background: rgba(246, 246, 246, 1);
    position: relative;
    .goods_img {
      width: 1.54rem;
      height: 1.54rem;
      @include position(0.32rem, 0.4rem);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      width: 4.37rem;
      height: 0.25rem;
      font-size: 0.26rem;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(20, 20, 20, 1);
      line-height: 0.7rem;
      @include position(0.28rem, 2.19rem);
    }
    .price {
      font-size: 0.34rem;
      font-family: PingFang-SC-Regular;
      font-weight: bold;
      color: rgba(127, 208, 163, 1);
      line-height: 0.7rem;
      @include position(1.2rem, 2.18rem);
    }
    .sendGoods {
      width: 1.55rem;
      height: 0.44rem;
      @include position(2.16rem, 2.99rem);
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

