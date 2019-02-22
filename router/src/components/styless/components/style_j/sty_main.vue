<template>
  <div class="sty_main_j wrapper" ref="sty_main_j">
    <ul class="content">
      <li v-for="(item,index) in list">
        <img :src="item.src" v-lazy="item">
        <p>
          <span>风格：{{item.style}}</span>
          <span>户型：{{item.apartment}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Vue from "vue";
import { Lazyload } from "mint-ui";
Vue.use(Lazyload);
export default {
  data() {
    return {
      list: [
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_01@2x.png",
          style: "简约时尚主义",
          apartment: "一居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_02@2x.png",
          style: "欧美经典时尚主义",
          apartment: "一居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_03@2x.png",
          style: "东方典雅主义",
          apartment: "二居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_03@2x.png",
          style: "东方典雅主义",
          apartment: "一居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_04@2x.png",
          style: "欧美经典主义",
          apartment: "二居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_04@2x.png",
          style: "简约时尚主义",
          apartment: "一居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_01@2x.png",
          style: "简约时尚主义",
          apartment: "一居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_02@2x.png",
          style: "欧美经典主义",
          apartment: "二居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_03@2x.png",
          style: "东方典雅主义",
          apartment: "一居室"
        },
          {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_01@2x.png",
          style: "欧美经典主义",
          apartment: "二居室"
        },
       
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_02@2x.png",
          style: "欧美经典主义",
          apartment: "二居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_03@2x.png",
          style: "东方典雅主义",
          apartment: "一居室"
        },
          {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_01@2x.png",
          style: "欧美经典主义",
          apartment: "二居室"
        },
        
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_02@2x.png",
          style: "欧美经典主义",
          apartment: "二居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_03@2x.png",
          style: "东方典雅主义",
          apartment: "一居室"
        },
          {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_01@2x.png",
          style: "欧美经典主义",
          apartment: "二居室"
        },
        
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_02@2x.png",
          style: "欧美经典主义",
          apartment: "二居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_03@2x.png",
          style: "东方典雅主义",
          apartment: "一居室"
        },
          {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_01@2x.png",
          style: "欧美经典主义",
          apartment: "二居室"
        },
        
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_02@2x.png",
          style: "欧美经典主义",
          apartment: "二居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_03@2x.png",
          style: "东方典雅主义",
          apartment: "一居室"
        },
          {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_01@2x.png",
          style: "欧美经典主义",
          apartment: "二居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_02@2x.png",
          style: "简约时尚主义",
          apartment: "一居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_03@2x.png",
          style: "东方典雅主义",
          apartment: "一居室"
        },
          {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_01@2x.png",
          style: "欧美经典主义",
          apartment: "二居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_02@2x.png",
          style: "简约时尚主义",
          apartment: "一居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_03@2x.png",
          style: "欧美经典主义",
          apartment: "一居室"
        },
          {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_01@2x.png",
          style: "东方典雅主义",
          apartment: "二居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_02@2x.png",
          style: "简约时尚主义",
          apartment: "一居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_03@2x.png",
          style: "欧美经典主义",
          apartment: "二居室"
        },
        {
          src:
            "../.././../../../static/img/style_slices/style_slices_j/tp_04@2x.png",
          style: "东方典雅主义",
          apartment: "一居室"
        },
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
    this.scroll = new BScroll(this.$refs.sty_main_j);
  })
  }
    
};
</script>
<style lang="scss" scoped>
.sty_main_j {
  width: 100%;
  height: 8rem;
  margin-top: -2.25rem;
  img {
    width: 7.14rem;
    height: 2.47rem;
    margin-left: 0.18rem;
    margin-top: 0.08rem;
  }
  p {
    display: flex;
    justify-content: space-around;

    span {
      font-size: 0.24rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgb(90, 87, 87);
    }
  }
}
</style>