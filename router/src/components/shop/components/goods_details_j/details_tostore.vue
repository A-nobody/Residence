<template>
  <div class="details_tostore_j">
    <div class="tostore_store">
      <img src="../../../../../static/img/shop/goods_details_slices_j/logo@2x.png">
    </div>
    <div class="star">
      <div>
        <img src="../../../../../static/img/shop/goods_details_slices_j/star@2x.png" alt>
      </div>
      <div>
        <img src="../../../../../static/img/shop/goods_details_slices_j/star@2x.png" alt>
      </div>
      <div>
        <img src="../../../../../static/img/shop/goods_details_slices_j/star@2x.png" alt>
      </div>
      <div>
        <img src="../../../../../static/img/shop/goods_details_slices_j/star@2x.png" alt>
      </div>
      <div>
        <img src="../../../../../static/img/shop/goods_details_slices_j/star@2x.png" alt>
      </div>
      <span>5.0</span>
    </div>
    <div class="tostore_kan" @click="handleStore()">
        <img src="../../../../../static/img/shop/goods_details_slices_j/kankan@2x.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleStore(){
      this.$router.push({name:'shophome'})
    }
  },
};
</script>
<style lang="scss" scoped>
@mixin font {
  font-size: 0.26rem;
  font-family: PingFang-SC-Regular;
  color: rgba(157, 156, 161, 1);
  line-height: 0.7rem;
}
@mixin font_bold {
  font-size: 0.24rem;
  font-family: PingFang-SC-Regular;
  font-weight: bold;
  color: rgba(50, 50, 50, 1);
  line-height: 0.7rem;
}
.details_tostore_j {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  width: 7.5rem;
  height: 0.84rem;
  background: rgba(255, 255, 255, 1);
  .tostore_store {
    float: left;
    width: 1.08rem;
    height: 0.24rem;
    margin-left: 0.4rem;
    margin-top: 0.3rem;
  }
  .star {
    float: left;
    line-height: 0.84rem;
    font-size: .16rem;
    width: 2.7rem;
    display: block;
    margin-left:.03rem;
    img {
      width: 0.16rem;
      height: 0.15rem;
      margin: 0 0.04rem;
      margin-top:.34rem;
      display: block;
      float: left;
    }
  }
  .tostore_kan{
      width:1.2rem;
      height:.4rem;
      float: left;
      margin:.17rem 0 0 1.6rem;
      img{
          width:100%;
          height:100%;
      }
  }
}
</style>

