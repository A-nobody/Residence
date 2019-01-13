<template>
  <div class="sty_header_j">
    <div class="header_img" @click="handleBack()">
      <img src="../../../../../static/img/shop/server_slices_j/jiantou@2x.png" alt="back">
    </div>
    <h2>风格</h2>
  </div>
</template>
<script>
export default {
    methods: {
        handleBack(){
            this.$router.go(-1)
        }
    },
};
</script>
<style lang="scss" scoped>
.sty_header_j {
  width: 100%;
    z-index:99;
  height: 0.88rem;
  margin-top: 0.4rem;
  position: relative;
  background: #fff;
  opacity: .8;
  h2 {
    text-align: center;
    line-height: 0.88rem;
    font-size: 0.3rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
  }
  .header_img {
    width: .16rem;
    height: .28rem;
    position: absolute;
    top: 0.29rem;
    left: 0.39rem;
    img{
        width:100%;
        height:100%;
    }
  }
}
</style>

