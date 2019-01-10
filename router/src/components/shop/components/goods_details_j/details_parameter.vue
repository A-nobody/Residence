<template>
  <div class="details_parameter_j" v-show="flag">
    <h2>商品参数</h2>
    <ul>
      <li v-for="(item,index) in parameter">
        {{item}}
        <span>{{content[index]}}</span>
      </li>
    </ul>
  </div>
  <!-- <div class="parameter_complete">
    <div class="p_complete">完成</div>
  </div> -->
</template>
<script>
export default {
  created() {
    this.Observer.$on("handleSend", params => {
      this.flag = params;
    });
    this.Observer.$on("handleSendpar", params => {
      this.flag = params;
    });
  },
  data() {
    return {
      flag: false,
      parameter: ["品牌", "型号", "风格", "尺寸"],
      content: ["林氏木业", "BA3A###", "北欧", "1500mm*2000mm"]
    };
  }
};
</script>
<style lang="scss" scoped>
.details_parameter_j {
  position: fixed;
  top: 1.8rem;
  left: 0;
  z-index: 90;
  width: 7.5rem;
  height: 11.54rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.2rem 0.2rem 0 0;
    h2{
        text-align: center;
    }
  .parameter_complete {
    width: 100%;
    height: 4.9rem;
    position: relative;
    .p_complete {
      width: 670px;
      height: 80px;
      background: rgba(127, 208, 163, 1);
      border-radius: 40px;
      position: absolute;
      bottom: 0.1rem;
      left: 0.4rem;
      width: 6.7rem;
      height: 0.9rem;
      font-size: 34px;
      font-family: PingFang-SC-Regular;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 70px;
    }
  }
}
</style>

