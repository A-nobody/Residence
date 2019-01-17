<template>
  <div class="userData">
    <div class="top">
      <img src="static/img/mine/left.png" @click="getBack()">
      <span>编辑个人资料</span>
    </div>
    <ol class="dataList">
      <li>
        <span>头像</span>
        <p>
          <span class="userPic"></span>
          <img src="static/img/mine/right2.png">
        </p>
      </li>
      <li @click="nameshow()">
        <span>昵称</span>
        <p>
          <span>{{userName}}</span>
          <img src="static/img/mine/right2.png">
        </p>
      </li>
      <li @click="maskShow(0)">
        <span>性别</span>
        <p>
          <span>{{sex}}</span>
          <img src="static/img/mine/right2.png">
        </p>
      </li>
      <li @click="maskShow(1)">
        <span>位置</span>
        <p>
          <span>{{addr}}</span>
          <img src="static/img/mine/right2.png">
        </p>
      </li>
      <li @click="maskShow(2)">
        <span>生日</span>
        <p>
          <span>{{birth}}</span>
          <img src="static/img/mine/right2.png">
        </p>
      </li>
      <li @click="synoShow()">
        <span>个人简介</span>
        <p>
          <span>{{syno}}</span>
          <img src="static/img/mine/right2.png">
        </p>
      </li>
    </ol>
    <Information-com v-show="maskFlag" class="flag?'fadeIn animated':'fadeOut animated'"/>
    <Synopsis-com v-show="synoFlag" class="flag?'fadeIn animated':'fadeOut animated'"/>
    <UserName-com v-show="nameFlag" class="flag?'fadeIn animated':'fadeOut animated'"/>
  </div>
</template>

<script>
import Information from "./components/information";
import UserName from "./components/userName";
import Synopsis from "./components/synopsis";
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      maskFlag: state => state.mine.maskFlag,
      synoFlag: state => state.mine.synoFlag,
      nameFlag: state => state.mine.nameFlag,
      userName: state => state.mine.userName,
      addr: state => state.mine.addr,
      birth: state => state.mine.birth,
      sex: state => state.mine.sex,
      syno: state => state.mine.syno
    })
  },
  components: {
    "Information-com": Information,
    "Synopsis-com": Synopsis,
    "UserName-com": UserName
  },
  methods: {
    ...Vuex.mapMutations({
      maskShow: "mine/maskShow",
      synoShow: "mine/synoShow",
      nameshow: "mine/nameShow"
    }),
    getBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.userData {
  width: 100%;
  height: 100%;
  position: relative;
  font-family: PingFang-SC-Medium;
}
.userData .top {
  width: 100%;
  height: 1.1rem;
  line-height: 1.1rem;
  font-size: 0.3rem;
  font-weight: 500;
  text-align: center;
  position: relative;
}
.userData .top > img {
  position: absolute;
  left: 0.4rem;
  top: 0.4rem;
}
.userData .dataList {
  width: 6.7rem;
  margin: 0 auto;
}
.userData .dataList > li {
  width: 100%;
  height: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.26rem;
  border-bottom: 0.01rem solid #e9e9e9;
}
.userData .dataList > li > p > span {
  color: #7d7d7d;
  font-size: 0.25rem;
}
.userData .dataList > li > p > span,
img {
  float: left;
  margin-left: 0.2rem;
}
.userData .dataList > li > p > img {
  position: relative;
  top: 0.03rem;
}
.userPic {
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
  background: #cccccc;
  border-radius: 50%;
}
.userData .dataList > li:first-child > p > img {
  top: 0.23rem;
}
</style>