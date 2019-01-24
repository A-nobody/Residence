<template>
  <div class="server_j wrapper" ref="details_wrapper">
    <!-- <div class="top_j"></div> -->
    <div class="content">
      <Header-com/>
      <Main-com/>
      <Footer-com/>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

export default {
  components: {
    "Header-com": Header,
    "Main-com": Main,
    "Footer-com": Footer
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.details_wrapper, {
        click: true
      });
    });
  }
};
</script>
<style lang="scss" scoped>
%top_j {
  height: 0.4rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.server_j {
  width: 100%;
  height:10rem;
  position: relative;
  // .top_j {
  //   @extend %top_j;
  //   background: transparent;
  // }
}
</style>
