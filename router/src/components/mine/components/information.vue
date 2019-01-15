<template>
  <div class="information">
    <div class="mask" @click="maskHide()"></div>
    <div class="bottomMenu">
      <div class="bottomMenuIn">
        <div class="content">
          <!-- 性别 -->
          <div id="sex" v-show="typeNum==0?true:false">
            <p><a href="#">男</a></p>
            <p><a href="#">女</a></p>
          </div>
          <!-- 地址 -->
          <mt-picker
            v-show="typeNum==1?true:false"
            :slots="myAddressSlots"
            @change="onMyAddressChange"
          />
          <!-- 生日 -->
          <div class="date" v-show="typeNum==2?true:false">
            2019-1-1
          </div>
        </div>
        <div class="confirm">
          <p @click="maskHide()">取消</p>
          <p @click="handleConfirm()">确定</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import Vue from "vue";
import { Picker } from "mint-ui";
import myaddress from "../pca.json";
Vue.component(Picker.name, Picker);

export default {
  data() {
    return {
      myAddressSlots: [
        {
          flex: 1, //对应 slot CSS 的 flex 值
          defaultIndex: 1, //对应 slot 初始选中值，需传入其在 values 数组中的序号，默认为 0
          values: Object.keys(myaddress), //省份数组
          className: "slot1", //对应 slot 的类名
          textAlign: "center" //对应 slot 的对齐方式
        },
        {
          divider: true, //对应 slot 是否为分隔符
          content: "-", //分隔符 slot 的显示文本
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center"
        }
      ],
      myAddressProvince: "省",
      myAddressCity: "市",
      myAddresscounty: "区/县"
    };
  },
  computed: {
    ...Vuex.mapState({
      typeNum: state => state.mine.typeNum
    })
  },
  methods: {
    ...Vuex.mapMutations({
      maskHide: "mine/maskHide",
      getAddress: "mine/getAddress"
    }),
    onMyAddressChange(picker, values) {
      if (myaddress[values[0]]) {
        //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
        picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
        picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
        //获取省
        this.myAddressProvince = values[0];
        //获取市
        this.myAddressCity = values[1];
        //获取县
        this.myAddresscounty = values[2];
        /*setSlotValues(index, values)：设定给定 slot 的备选值数组*/
      }
    },
    handleConfirm() {
      if (this.typeNum == 1) {
        this.getAddress(this.myAddresscounty);
      } else if (this.typeNum == 2) {
        console.log(1);
      } else {
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      //vue里面全部加载好了再执行的函数 （类似于setTimeout）
      this.myAddressSlots[0].defaultIndex = 0;
      // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
      //因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
    });
  }
};
</script>

<style>
.information {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.information .mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
}
.information .bottomMenu {
  width: 100%;
  height: 4.2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #ffffff;
}
.information .bottomMenu .bottomMenuIn {
  width: 90%;
  height: 100%;
  margin: 0 auto;
}
.information .bottomMenuIn .content {
  padding: 0.8rem 0;
  height: 80%;
}
.information .bottomMenuIn .content .picker-item {
  font-size: 0.3rem;
}
.information .bottomMenuIn .content .picker-selected {
  font-size: 0.3rem;
  color: #44dddb;
}
.information .bottomMenuIn .confirm {
  width: 100%;
  height: 0.5rem;
  border-top: 0.01rem solid #cacaca;
  display: flex;
  color: #a8a8a8;
  font-size: 0.3rem;
}
.information .bottomMenuIn .confirm > p {
  width: 50%;
  height: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.information .bottomMenuIn .confirm > p:last-child {
  color: #44dddb;
  border-left: 0.01rem solid #cacaca;
}
#sex > p {
  height: 0.8rem;
  font-size: 0.4rem;
  text-align: center;
  line-height: 0.8rem;
  border-bottom: 0.01rem solid #cacaca;
}
#sex > p >a{
  color: #a8a8a8;
}
</style>
