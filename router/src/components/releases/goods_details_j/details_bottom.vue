<template>
  <div class="details_bottom_j">
    <div class="bottom_store" @click="handleStore()">
      <img src="../../../../../static/img/shop/goods_details_slices_j/dianpu@2x.png" alt>
      <span>店铺</span>
    </div>
    <div class="bottom_service" @click="handleServer()">
      <img src="../../../../../static/img/shop/goods_details_slices_j/kefu@2x.png" alt>
      <span>客服</span>
    </div>
    <div class="bottom_tostore">
      <div class="toshoppingcar" @click="handleTocar()"></div>
      <img class="tobuy" @click="handletoBuy()" src="../../../../../static/img/shop/goods_details_slices_j/goumai@2x.png" alt>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleServer(){
      this.$router.push({name:'Shopserver'})
    },
    handleStore(){
      this.$router.push({name:'shophome'})
    },
    handletoBuy(){
      this.$router.push({name:'confirm'})
    },
    handleTocar(){
      this.observer.$emit('handleTocar',true)
    }
  },
};
</script>
<style lang="scss" scoped>
.details_bottom_j {
  width: 7.5rem;
  height: 0.98rem;
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-around;
  .bottom_store,
  .bottom_service {
    margin-top: 0.09rem;
  }
  span {
    width: 0.39rem;
    height: 0.2rem;
    font-size: 0.2rem;
    font-family: PingFang-SC-Regular;
    font-weight: bold;
    color: rgba(58, 56, 50, 1);
    line-height: 0.2rem;
  }
  .bottom_tostore {
    position: relative;
    margin-top: 0.09rem;
    width: 4.34rem;
    height: 0.62rem;
    .toshoppingcar{
      position: absolute;
      top:0;
      left:0;
      width:2.17rem;
      height:0.62rem;
      z-index: 5;
    }
  }
}
</style>
