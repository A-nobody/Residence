<template>
  <div class="sty_nav_j">
    <div class="l_title" @click="handleL($event)">
      风格
      <img src="../../../../../static/img/style_slices/style_slices_j/icon_fg_jt@2x.png" alt>
    </div>
    <div class="r_title" @click="handleR($event)">
      户型
      <img src="../../../../../static/img/style_slices/style_slices_j/icon_fg_jt@2x.png" alt>
    </div>
    <ul class="nav_l" v-show="flag1" @mouseleave="handleHide1()">
      <li
        v-for="(item,index1) in style"
        @click="handleActivesty(index1)"
        v-bind="{class:activeIndex1==index1?'active':''}"
      >{{item}}</li>
    </ul>
    <ul class="nav_r" v-show="flag2" @mouseleave="handleHide2()">
      <li
        v-for="(item,index2) in Apartment"
        @click="handleActiveapa(index2)"
        
        v-bind="{class:activeIndex2==index2?'active':''}"
      >{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex1: -1,
      activeIndex2: -1,
      flag1: false,
      flag2: false,
      style: ["欧美经典主义", "东方典雅主义", "简约时尚主义"],
      Apartment: [
        "一居室：50㎡-80㎡",
        "二居室：80㎡-150㎡",
        "三居室：150㎡以上"
      ]
    };
  },
  methods: {
    handleActiveapa(index2) {
      this.activeIndex2 = index2;
    },
    handleActivesty(index1) {
      this.activeIndex1 = index1;
    },
    handleL(e) {
      e.stopPropagation();
      this.flag1 = !this.flag1;
    },
    handleR(e) {
      e.stopPropagation();
      this.flag2 = !this.flag2;
    },
    handleHide1(){
      this.flag1 = false;
    },
    handleHide2(){
      this.flag2 = false;
    }
  }
};
</script>
<style lang="scss" scoped>
%nav {
  width: 49%;
  height: 100%;
  float: left;
  li {
    width: 100%;
    height: 0.75rem;
    text-align: center;
    line-height: 0.75rem;
    font-size: 0.22rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    background: #fff;
    opacity: 0.9;
    border: 1px solid #7fd0a3;
  }
}
.sty_nav_j {
  width: 100%;
  height: 3rem;
  position: relative;
  z-index: 99;
  margin-left: .06rem;

  .nav_l,
  .nav_r {
    @extend %nav;
    position: absolute;
    top: 0.75rem;

    .active {
      background: #7fd0a3;
      color: azure;
    }
  }
  .nav_l {
    left: 0;
  }
  .nav_r {
    left: 49%;
  }
  .l_title,
  .r_title {
    width: 49%;
    height: 0.75rem;
    text-align: center;
    line-height: 0.75rem;
    font-size: 0.24rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    border: 1px solid #7fd0a3;
    float: left;
    background: #fff;
    opacity: 0.9;
    position: relative;
    img {
      position: absolute;
      top: 0.3rem;
      right: 0.3rem;
    }
  }
}
</style>