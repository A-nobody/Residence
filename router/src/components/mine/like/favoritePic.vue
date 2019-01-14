<template>
  <div class="fPic">
    <div class="header">
      <div class="headerInside">
        <img @click="getBack()" src="static/img/mine/left.png">
        <span>贝贝的图片</span>
        <span></span>
      </div>
    </div>
    <div class="main">
      <div class="mainInside">
        <img v-for="(item) in pic" :src="item.src">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pic: [
        {
          src: "static/img/mine/juxing.png"
        },
        {
          src: "static/img/mine/juxing.png"
        },
        {
          src: "static/img/mine/juxing.png"
        },
        {
          src: "static/img/mine/juxing.png"
        },
        {
          src: "static/img/mine/juxing.png"
        },
        {
          src: "static/img/mine/juxing.png"
        },
        {
          src: "static/img/mine/juxing.png"
        }
      ]
    };
  },
  methods:{
      getBack(){
          this.$router.back();
      }
  }
};
</script>

<style lang="scss" scoped>
.fPic {
  width: 100%;
  height: 100%;
  font-family: PingFangSC-Medium;
  .header {
    width: 100%;
    height: 0.92rem;
    maring-bottom: 0.2rem;
    border-bottom: 0.02rem solid #bfbfbf;
    .headerInside {
      width: 90%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      font-weight: 600;
      font-size: 0.3rem;
    }
  }
  .main {
    width: 100%;
    height: 100%;
    .mainInside {
      width: 90%;
      margin: 0 auto;
      padding-top: 0.4rem;
      img {
        width: 2.18rem;
        height: 2.18rem;
        float: left;
        margin: 0.03rem;
      }
    }
  }
}
</style>
