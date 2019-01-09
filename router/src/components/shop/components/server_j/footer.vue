<template>
  <div class="server_footer_j">
    <input type="text">
    <div class="face">
      <img src="../../../../../static/img/shop/server_slices_j/biaoqing@2x.png" alt>
    </div>
    <div class="add">
      <img src="../../../../../static/img/shop/server_slices_j/jia@2x.png" alt>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
%wh {
  float: left;
  width: 0.46rem;
  height: 0.46rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.server_footer_j {
    display: flex;
  width: 100%;
  height: 0.98rem;
  background: rgba(246, 246, 246, 1);
  justify-content: space-around;
  align-items: center;
  input {
    float: left;
    width: 4.73rem;
    height: .70rem;
    background: rgba(255, 255, 255, 1);
    border-radius: .35rem;
    border:none;
    font-size: .24rem;
  }
  .face {
    @extend %wh;
  }
  .add {
    @extend %wh;
  }
}
</style>
