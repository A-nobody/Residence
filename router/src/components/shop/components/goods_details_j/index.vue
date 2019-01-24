<template>
  <div class="details_j wrapper" ref="details_wrapper">
    <!-- <div class="top_j"></div> -->
    <div class="content">
      <Details-img-com></Details-img-com>
      <Details-content-com/>
      <Details-classify-com/>
      <Details-tostore-com/>
      <Details-bottom-com/>
      <Details-color-com/>
      <Details-parameter-com/>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Details_img from "./details_img";
import Details_content from "./details_content";
import Details_classify from "./details_classify";
import Details_tostore from "./details_tostore";
import Details_bottom from "./details_bottom";
import Details_color from "./details_color";
import Details_parameter from "./details_parameter";
export default {
  components: {
    "Details-img-com": Details_img,
    "Details-content-com": Details_content,
    "Details-classify-com": Details_classify,
    "Details-tostore-com": Details_tostore,
    "Details-bottom-com": Details_bottom,
    "Details-color-com": Details_color,
    "Details-parameter-com": Details_parameter
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.details_wrapper,{
          click:true
      });
    });
  }
};
</script>
<style lang="scss" scoped>
@mixin wrap_j {
  width: 100%;
  height: 100%;
  position: relative;
}
@mixin top_j {
  height: 0.4rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.details_j {
  @include wrap_j;
  background: #f1f1f1;
  height:10rem;
  .top_j {
    @include top_j;
    background: transparent;
  }


}
</style>