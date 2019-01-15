<template>
  <div class="details_classify_j">
    <div class="classify_choose" @click='handlechoose'>
      <a>选择</a>
      <span>颜色</span>
    </div>
    <div class="classify_parameter" @click="handleparamter">
      <a>参数</a>
      <span>主体材质</span>
      <span>尺寸</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag:true,
    }
  },
  methods: {
    handlechoose(){
      this.observer.$emit('handleSendcolor',this.flag)
    },
    handleparamter(){
      this.observer.$emit('handleSendpar',this.flag)
    }
  },
};
</script>
<style lang="scss" scoped>
@mixin font {
  font-size: .26rem;
  font-family: PingFang-SC-Regular;
  color: rgba(157, 156, 161, 1);
  line-height:70px;
}
@mixin font_bold {
  font-size: .24rem;
  font-family: PingFang-SC-Regular;
  font-weight: bold;
  color: rgba(50, 50, 50, 1);
  line-height: .70rem;
}
.details_classify_j {
  margin-top: 0.2rem;
  width: 7.5rem;
  height: 1.44rem;
  background: rgba(255, 255, 255, 1);
  a{
      @include font;
      margin-left:.41rem
  }
  span{
      @include font_bold;
      margin-left:.3rem
  }
}
</style>

