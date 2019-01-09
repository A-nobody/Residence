<template>
  <div class="server_header_j">
    <div class="back">
      <img src="../../../../../static/img/shop/server_slices_j/jiantou@2x.png" alt>
    </div>
    <div class="title">绘居客服</div>
    <div class="store">
      <img src="../../../../../static/img/shop/server_slices_j/dianpu@2x.png" alt>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@mixin width($width) {
  width: $width;
  height: 100%;
}
%wh {
  width: 100%;
  height: 100%;
}
.server_header_j {
  margin-top: 0.4rem;
  width: 100%;
  height: 0.88rem;
  background: rgb(252, 219, 219);
  .back {
    width: 0.18rem;
    height: 0.32rem;
    margin: 0.28rem 0 0 0.4rem;
    float: left;
    img {
      @extend %wh;
    }
  }
  .title {
    margin-left: 2.55rem;
    width: 1.22rem;
    height: 0.88rem;
    font-size: 0.3rem;
    font-family: PingFang-SC-Regular;
    font-weight: bold;
    color: rgba(50, 50, 50, 1);
    line-height: 0.88rem;
    float: left;
  }
  .store {
    margin-left: 1.79rem;
    margin-top: .28rem;
    width: 0.96rem;
    height: 0.32rem;
    float: left;
    img {
        @extend %wh;
    }
  }
}
</style>
