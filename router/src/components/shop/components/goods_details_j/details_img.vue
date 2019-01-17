<template>
  <div class="details_img_j">
    <div class="back_j">
      <img src="../../../../../static/img/shop/goods_details_slices_j/jiantou_left@2x.png">
    </div>
    <div class="shoppingcar_j" @click="goShopCar()">
      <img src="../../../../../static/img/shop/goods_details_slices_j/gouwu@2x.png">
    </div>
    <!-- <div class="img_num_j">
      <span></span>
      /
      <span>5</span>
    </div> -->

    <div class="swiper-container wrapper_img">
      <div class="img_j swiper-wrapper" @click="handleNone()">
        <div class="swiper-slide slide_j" v-for="(item,index) in goodsdetailsImg.goodsPicture">
          <img :src="item.url">
        </div>
      </div>
      <div class="swiper-pagination s_button"></div>
    </div>

    <!-- <div class="wrapper wrapper_img" ref="tabsWrapper">
      <ul class="img_j content" @click="handleNone()">
        <li v-for="(item,index) in goodsdetailsImg.goodsPicture">
          <img :src="item.url">
        </li>
      </ul>
    </div>-->
  </div>
</template>
<script>
import Swiper from "swiper";
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
  created() {
    this.handleDetails();
  },
  data() {
    return {
      num: 0
    };
  },
  updated() {
    this.$nextTick(() => {
      // this.scroll = new BScroll(this.$refs.tabsWrapper,() => {
      //   scrollX:true
      // });
      this.mySwiper = new Swiper(".wrapper_img", {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          dynamicMainBullets: 1,
          width:10,
          height:10,
        
        }
      });
    });
  },
  computed: {
    ...Vuex.mapState({
      goodsdetailsImg: state => state.details.goodsdetailsImg
    })
  },
  methods: {
    handleNone() {
      this.observer.$emit("handleSend", this.flag);
    this.$router.push({name:"viewphoto"});
    }
      goShopCar(){
        this.$router.push({name:'ShopCart'});
      }
    ...Vuex.mapActions({
      handleDetails: "details/handleDetails"
    })
  }
};
</script>
<style lang="scss" scoped>
%img {
  img {
    width: 100%;
    height: 100%;
  }
}
.details_img_j {
  width: 100%;
  height: 7.5rem;
  position: relative;
  .wrapper_img {
    width: 7.5rem;
    height: 7.5rem;
    .s_button{
      width:.1rem;
      height:.1rem;
      position:absolute;
      left:40%;
      bottom:.2rem;
      z-index:100;
      
    }
    .img_j {
      width: 37.5rem;
      height: 100%;
      // overflow: hidden;
      // li{
      //   float: left;
      //   @extend %img;
      // }
      display: flex;
      .slide_j {
        width: 7.5rem;
        height: 7.5rem;
        img {
          // width: 100%;
          // height:100%;
          width: 7.5rem;
          height: 7.5rem;
        }
      }
      // position: absolute;
      // top:0;
      // left:0;
      // background: pink;
    }
  }
  .back_j {
    width: 0.6rem;
    height: 0.6rem;
    position: absolute;
    top: 0.54rem;
    left: 0.4rem;
    z-index: 99;
    @extend %img;
  }
  .shoppingcar_j {
    width: 0.6rem;
    height: 0.6rem;
    position: absolute;
    top: 0.54rem;
    left: 6.5rem;
    z-index: 99;
    @extend %img;
  }
  .img_num_j {
    position: absolute;
    top: 6.76rem;
    left: 6.5rem;
    z-index: 99;
    width: 0.8rem;
    height: 0.44rem;
    background: rgba(152, 152, 152, 1);
    opacity: 0.49;
    border-radius: 0.22rem;
    text-align: center;
    line-height: 0.44rem;
    font-size: 0.22rem;
    color: #fff;
    font-family: PingFang-SC-Regular;
  }
}
</style>
