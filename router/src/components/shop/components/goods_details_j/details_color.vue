<template>
  <div class="details_color_j" v-show="flag">
    <div class="color_content">
      <div class="color_img">
        <!-- <img :src=""> -->
      </div>
      <p>
        <span>￥{{goodscolor.goodsDiscountPrice}}</span>
      </p>
      <p>
        <span>库存充足</span>
      </p>
      <p>
        <span>已选: {{goodscolor.goodsColorList[index2]}}</span>
      </p>
    </div>
    <div class="color_choose">
      <p>颜色</p>
      <p>
        <button
          v-for="(item,index) in goodscolor.goodsColorList"
          v-bind="{class:activeIndex==index?'choose_active':''}"
          @click="handleActivecolor(index)"
        >{{item}}</button>
      </p>
    </div>
    <div class="color_num">
      <p class="sign_num">数量</p>
      <div class="sign">
        <button class="reduce" @click="handleReduce()">-</button>
        <input class="change" type="text" value="1" v-model="num">
        <button class="add" @click="handleAdd()">+</button>
      </div>
    </div>
    <div class="color_tostore">
      <div class="toshoppingcar" @click="handleToast()"></div>
      <img
        @click="handleTobuy()"
        class="tobuy"
        src="../../../../../static/img/shop/goods_details_slices_j/goumai@2x.png"
        alt
      >
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
import { Toast } from "mint-ui";
export default {
  created() {
    this.observer.$on("handleSend", params => {
      this.flag = params;
    });
    this.observer.$on("handleSendcolor", params => {
      this.flag = params;
    });

    this.observer.$on("handleSend", params => {
      this.flag = params;
    });
    this.observer.$on("handleSendcolor", params => {
      this.flag = params;
    });
    this.observer.$on("handleTocar", params => {
      this.flag = params;
    });
  },
  data() {
    return {
      flag: false,
      num: 1,
      activeIndex: 0,
      index2: 0
    };
  },
  computed: {
    ...Vuex.mapState({
      goodscolor: state => state.details.goodscolor
    })
  },
  methods: {
    handleActivecolor(index) {
      this.activeIndex = index;
      this.index2 = index;
    },
    handleToast() {
      Toast({
        message: "加入购物车成功",
        duration: 3000,
        className: "toasts_de"
      });
    },
    handleTobuy() {
      this.$router.push({ name: "confirm" });
    },
    handleReduce() {
      if (this.num == 1) {
        this.num = 1;
      } else {
        this.num--;
      }
    },
    handleAdd() {
      this.num++;
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-toast .mint-toast {
    // width: 2.8rem !important;
    // height: 2.6rem !important;
    font-size: .74rem !important;
  }
.details_color_j {
  position: fixed;
  top: 1.8rem;
  left: 0;
  z-index: 90;
  width: 7.5rem;
  height: 11.54rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.2rem 0.2rem 0 0;
  
  .color_content {
    margin: 0 0.4rem;
    height: 2.6rem;
    width: 100%;
    border-bottom: 0.01rem solid #e5e5e5;
    position: relative;
    .color_img {
      width: 1.8rem;
      height: 1.8rem;
      background: orange;
      border-radius: 0.1rem;
      position: absolute;
      left: 0;
      top: 0.2rem;
    }
    p:nth-of-type(1) {
      position: absolute;
      top: 0.28rem;
      left: 2.11rem;
    }
    p:nth-of-type(1) > span {
      height: 0.25rem;
      font-size: 0.34rem;
      font-family: PingFang-SC-Regular;
      color: rgba(127, 208, 163, 1);
      line-height: 0.7rem;
    }

    p:nth-of-type(2) {
      position: absolute;
      top: 0.8rem;
      left: 2.1rem;
    }
    p:nth-of-type(3) {
      position: absolute;
      top: 1.2rem;
      left: 2.12rem;
    }
    p:nth-of-type(2),
    p:nth-of-type(3) > span {
      height: 0.27rem;
      font-size: 0.28rem;
      font-family: PingFang-SC-Regular;
      color: rgba(87, 87, 87, 1);
      line-height: 0.7rem;
    }
  }
  .color_choose {
    height: 3.09rem;
    width: 100%;
    margin: 0 0.4rem;
    border-bottom: 0.01rem solid #e5e5e5;
    p {
      //   width: .64rem;
      height: 1rem;
      font-size: 0.32rem;
      font-family: PingFang-SC-Regular;
      font-weight: bold;
      color: rgba(87, 87, 87, 1);
      line-height: 1rem;
      .choose_active,
      button {
        width: 1.62rem;
        height: 0.64rem;
        border-radius: 0.16rem;
        background: rgba(229, 229, 229, 1);
        border: none;
        margin-right: 0.4rem;
        margin-bottom: 0.4rem;
        float: left;
        font-size: 0.28rem;
        font-family: PingFang-SC-Regular;
        font-weight: bold;
        color: rgba(87, 87, 87, 1);
        line-height: 0.64rem;
      }
      .choose_active {
        border: 0.01rem solid #7fd0a3;
        background: #fff;
      }
    }
  }
  .color_num {
    height: 1.1rem;
    width: 100%;
    position: relative;
    p {
      width: 0.8rem;
      height: 0.31rem;
      font-size: 0.32rem;
      font-family: PingFang-SC-Regular;
      font-weight: bold;
      color: rgba(87, 87, 87, 1);
      line-height: 0.7rem;
      margin: 0.4rem;
    }
    .sign {
      width: 1.9rem;
      height: 0.6rem;

      input {
        width: 0.58rem;
        height: 0.58rem;
        background: #e5e5e5;
        border: none;
        border-radius: 0.1rem;
        line-height: 0.58rem;
        font-size: 0.3rem;
        text-align: center;
      }
      .reduce {
        width: 0.58rem;
        height: 0.58rem;
        position: absolute;
        top: 0.15rem;
        left: 4.83rem;
        background: rgb(241, 241, 241);
        border-radius: 0.1rem;
        line-height: 0.58rem;
        font-size: 0.22rem;
        text-align: center;
        border: none;
      }
      .change {
        width: 0.68rem;
        height: 0.58rem;
        background: rgb(241, 241, 241);
        position: absolute;
        top: 0.15rem;
        left: 5.53rem;

        text-align: center;
      }
      .add {
        width: 0.58rem;
        height: 0.58rem;
        position: absolute;
        top: 0.15rem;
        background: rgb(241, 241, 241);
        left: 6.33rem;
        text-align: center;
        border-radius: 0.1rem;
        line-height: 0.38rem;
        font-size: 0.22rem;
        border: none;
      }
    }
  }
  .color_tostore {
    width: 100%;
    height: 3.9rem;
    position: relative;
    img {
      position: absolute;
      bottom: 0.1rem;
      left: 0.4rem;
      width: 6.7rem;
      height: 0.9rem;
    }
    .toshoppingcar {
      position: absolute;
      bottom: 0.1rem;
      left: 0.4rem;
      width: 3.35rem;
      height: 0.9rem;
      z-index: 5;
    }
  }
}
</style>
<style lang="scss"> 
.toasts_de .mint-toast-text{
  // width:6.9rem !important;
  // height:2rem !important;
   font-size: .44rem !important;
}
</style>


