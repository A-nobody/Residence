<template>
  <div class="details_tostore_j">
    <div class="tostore_store">
      <!-- <img src="../../../../../static/img/shop/goods_details_slices_j/logo@2x.png"> -->
      <a>{{content.shopsName}}</a>
    </div>
    <div class="star">
      <ul>
        <li v-for="(item,index) in list.slice(5-starNum.star)">
          <img :src="item">
        </li>
      </ul>
      <span>{{starNum.shopsLevel}}.0</span>
    </div>
    <div class="tostore_kan" @click="handleStore()">
      <img src="../../../../../static/img/shop/goods_details_slices_j/kankan@2x.png" alt>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      list: [
        "../../../../../static/img/shop/goods_details_slices_j/star@2x.png",
        "../../../../../static/img/shop/goods_details_slices_j/star@2x.png",
        "../../../../../static/img/shop/goods_details_slices_j/star@2x.png",
        "../../../../../static/img/shop/goods_details_slices_j/star@2x.png",
        "../../../../../static/img/shop/goods_details_slices_j/star@2x.png"
      ]
    };
  },
  computed: {
    ...Vuex.mapState({
      starNum: state => state.details.starNum,
      content: state => state.details.content
    })
  },
  methods: {
    handleStore() {
      sessionStorage.setItem("shopsId", 1);
      sessionStorage.setItem("pageIndex", 1);
      sessionStorage.setItem("limit", 8);
      this.$router.push({ name: "shophome" });
    }
  },
  //  created() {
  //    axios({
  //     method: "post",
  //     url: "http://47.93.27.243/huiju/shops/shopsId",
  //     data: {
  //       shopsId: "1"
  //     }
  //   }).then(data => {
  //     console.log(data);
  //   });
  // }
};
</script>
<style lang="scss" scoped>
@mixin font {
  font-size: 0.26rem;
  font-family: PingFang-SC-Regular;
  color: rgba(157, 156, 161, 1);
  line-height: 0.7rem;
}
@mixin font_bold {
  font-size: 0.24rem;
  font-family: PingFang-SC-Regular;
  font-weight: bold;
  color: rgba(50, 50, 50, 1);
  line-height: 0.7rem;
}
.details_tostore_j {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  width: 7.5rem;
  height: 0.84rem;
  background: rgba(255, 255, 255, 1);
  .tostore_store {
    float: left;
    width: 2.28rem;
    height: 0.34rem;
    margin-left: 0.4rem;
    margin-top: 0.23rem;
    a {
      color: rgba(127, 208, 163, 1);
      font-size: 0.3rem;
      font-weight: bold;
      width: 100%;
      height: 100%;
    }
  }
  .star {
    float: left;
    line-height: 0.84rem;
    font-size: 0.26rem;
    width: 2.7rem;
    display: block;
    margin-left: 0.23rem;
    img {
      width: 0.18rem;
      height: 0.18rem;
      margin: 0 0.04rem;
      margin-top: 0.32rem;
      display: block;
      float: left;
    }
    span {
      margin-left: 0.2rem;
    }
  }
  .tostore_kan {
    width: 1.2rem;
    height: 0.4rem;
    float: left;
    margin: 0.19rem 0.1rem 0 0.1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

