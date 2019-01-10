<template>
  <div class="details_img_j">
    <div class="back_j">
      <img src="../../../../../static/img/shop/goods_details_slices_j/jiantou_left@2x.png">
    </div>
    <div class="shoppingcar_j" >
      <img src="../../../../../static/img/shop/goods_details_slices_j/gouwu@2x.png">
    </div>
    <!-- <div class="swiper-container img_j">
      <div class="swiper-wrapper">
        <div class="swiper-slide">slider1</div>
        <div class="swiper-slide">slider2</div>
        <div class="swiper-slide">slider3</div>
      </div>
    </div> -->
    <div class="img_num_j">
      <span>1</span>
           /
      <span>5</span>
    </div>
    <div class="img_j"  @click="handleNone"></div>
  </div>
</template>
<script>
// import { Swiper } from "swiper"; 
// import Vuex from 'vuex';
export default {
    data() {
      return {
        img_num_j:[1,2,3,4,5]
      }
    },
    methods: {
      handleNone(){
<<<<<<< HEAD
        this.observer.$emit('handleSend',this.flag)
=======
        this.Observer.$emit('handleSend',this.flag)
>>>>>>> heng
      }
    },
};
</script>
<style lang="scss" scoped>
.details_img_j {
  width: 100%;
  height: 7.5rem;
  .img_j {
    width: 100%;
    height: 100%;
    background: pink;
  }
  .back_j {
    width:.6rem;
    height: .6rem;
    position: absolute;
    top: 0.54rem;
    left: 0.4rem;
  }
  .shoppingcar_j {
    width:.6rem;
    height: .6rem;
    position: absolute;
    top: 0.54rem;
    left: 6.5rem;
  }
  .img_num_j {
    position: absolute;
    top: 6.76rem;
    left: 6.5rem;
    width: 0.8rem;
    height: 0.44rem;
    background: rgba(152, 152, 152, 1);
    opacity: 0.49;
    border-radius: 0.22rem;
    text-align: center;
    line-height: 0.44rem;
    font-size: .22rem;
    color: #fff;
    font-family: PingFang-SC-Regular;
  }
}
</style>
