<template>
  <div class="style_j">
    <!-- <div class="top_j"></div> -->
    <Sty-header-com/>
    <Sty-nav-com/>
    <Sty-main-com/>
  </div>
</template>
<script>
import sty_header from "./sty_header";
import sty_nav from "./sty_nav";
import sty_main from "./sty_main";
export default {
  components: {
    "Sty-header-com": sty_header,
    "Sty-nav-com": sty_nav,
    "Sty-main-com": sty_main
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
.style_j {
  width: 100%;
  height: 100%;
  position: relative;
   overflow-x: hidden;
  //  overflow-y: hidden;
  .top_j {
    @extend %top_j;
    background: transparent;
  }
}
</style>
