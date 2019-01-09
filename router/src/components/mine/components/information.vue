<template>
  <div class="information">
    <div class="mask" @click="maskHide()"></div>
    <div class="bottomMenu">
      <div class="bottomMenuIn">
        <div class="content">
          <p v-for="(item,index) in content[typeNum]">{{item}}</p>
        </div>
        <div class="confirm">
          <p>取消</p>
          <p>确定</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  data() {
    return {
      content: [["男", "女"], ["北京", "上海", "广州"], [2019, 1, 1]]
    };
  },
  methods: {
    ...Vuex.mapMutations({
      maskHide: "mine/maskHide"
    })
  },
  computed: {
    ...Vuex.mapState({
      typeNum: state => state.mine.typeNum
    })
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
.information .bottomMenuIn .content > p {
  width: 100%;
  height: 0.8rem;
  font-size: 0.3rem;
  color: #a8a8a8;
  line-height: 0.8rem;
  text-align: center;
  border-bottom: 0.01rem solid #cacaca;
}
.information .bottomMenuIn .confirm {
  width: 100%;
  height: 0.5rem;
  border-top: 0.01rem solid #cacaca;
  display: flex;
  margin-top: 0.8rem;
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
</style>
