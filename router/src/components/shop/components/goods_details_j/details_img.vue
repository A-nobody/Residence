<template>
  <div class="details_img_j" v-for="(item,index)  in goodsdetailsList">
    <div class="back_j">
      <img src="../../../../../static/img/shop/goods_details_slices_j/jiantou_left@2x.png">
    </div>
    <div class="shoppingcar_j">
      <img src="../../../../../static/img/shop/goods_details_slices_j/gouwu@2x.png">
    </div>
    <div class="img_num_j">
      <span>{{}}</span>
      /
      <span>5</span>
    </div>
    <div class="img_j" @click="handleNone()">
      <img :src="item.url">
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";

export default {
  created() {
    this.handleDetails();
  },
  data() {
    return {
      num:0
    };
  },
  computed: {
    ...Vuex.mapState({
      goodsdetailsList: state => state.details.goodsdetailsList
    })
  },
  methods: {
    handleNone() {
      this.observer.$emit("handleSend", this.flag);
    },
    ...Vuex.mapActions({
      handleDetails: "details/handleDetails"
    })
  }
};
</script>
<style lang="scss" scoped>
%img {
  img {
    width: 100%;
    height: 100%;
  }
}
.details_img_j {
  width: 100%;
  height: 7.5rem;
  position: relative;
  .img_j {
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
    position: absolute;
    top:0;
    left:0;
    @extend %img;
    // background: pink;
  }
  .back_j {
    width: 0.6rem;
    height: 0.6rem;
    position: absolute;
    top: 0.54rem;
    left: 0.4rem;
    z-index: 99;
    @extend %img;
  }
  .shoppingcar_j {
    width: 0.6rem;
    height: 0.6rem;
    position: absolute;
    top: 0.54rem;
    left: 6.5rem;
     z-index: 99;
    @extend %img;
  }
  .img_num_j {
    position: absolute;
    top: 6.76rem;
    left: 6.5rem;
     z-index: 99;
    width: 0.8rem;
    height: 0.44rem;
    background: rgba(152, 152, 152, 1);
    opacity: 0.49;
    border-radius: 0.22rem;
    text-align: center;
    line-height: 0.44rem;
    font-size: 0.22rem;
    color: #fff;
    font-family: PingFang-SC-Regular;
  }
}
</style>
