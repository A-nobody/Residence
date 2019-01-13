<template>
  <div class="server_j">
    <div class="top_j"></div>
    <Header-com/>
    <Main-com/>
    <Footer-com/>
  </div>
</template>
<script>
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

export default {
  components: {
    "Header-com": Header,
    "Main-com": Main,
    "Footer-com": Footer
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
  height: 100%;
  position: relative;
  .top_j {
    @extend %top_j;
    background: transparent;
  }
}
</style>
