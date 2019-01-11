<template>
  <div class="fArt">
    <div class="header">
      <div class="headerInside">
        <img @click="getBack()" src="static/img/mine/left.png">
        <span>贝贝的文章</span>
        <span></span>
      </div>
    </div>
    <div class="main">
      <div class="mainInside">
        <div class="Arts" v-for="(item,index) in art">
          <img :src="item.src">
          <p>{{item.biaoti}}</p>
          <span>{{item.neirong}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getBack() {
      this.$router.back();
    }
  },
  data() {
    return {
      art: [
        {
          src: "static/img/mine/juxing.png",
          biaoti: "装修工程，千万别忽略这些细节",
          neirong:
            "现在好多人装修房子都是事后诸葛亮，遗憾太多!而且这个问题也不是那么好回答！因为每套房子户型不 一样，细节太多太多"
        },
        {
          src: "static/img/mine/juxing.png",
          biaoti: "千万别忽略这些细节",
          neirong: "现在好多人装修房子都是事"
        },
        {
          src: "static/img/mine/juxing.png",
          biaoti: "装修这些细节",
          neirong:
            "现在好多且这个问题也不是那么好回答！因为每套房子户型不 一样，细节太多太多"
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
.fArt {
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
    background: #efefef;
    .mainInside {
      width: 90%;
      margin: 0 auto;
      padding-top: 0.4rem;
      .Arts {
        position: relative;
        height: 2.7rem;
        width: 100%;
        background: #ffffff;
        border-radius: 0.1rem;
        display: flex;
        align-items: center;
        padding: 0 0.15rem;
        margin-bottom: 0.4rem;
        img {
          width: 2.2rem;
          height: 2.2rem;
          margin-right: 0.25rem;
        }
        p {
          font-size: 24px;
          font-weight: 600;
          width: 60%;
          position: relative;
          top: -0.5rem;
        }
        span {
          width: 55%;
          height: 1rem;
          position: absolute;
          left: 2.6rem;
          bottom: 0.3rem;
          font-size: 0.16rem;
          line-height: 0.2rem;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
