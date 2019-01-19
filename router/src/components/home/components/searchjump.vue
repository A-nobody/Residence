<template>
  <div id="searchPage">
    <section class="search_wp">
      <div>
        <input type="search" :placeholder="searchP">
        <i class="iconfont">&#xe626;</i>
      </div>
      <a href="##" @click="searchdis()">取消</a>
    </section>
    <h2>大家都在搜</h2>
    <section class="searchLabel">
      <div>地毯</div>
      <div>花砖</div>
      <div>厨房</div>
      <div>沙发</div>
      <div>衣柜</div>
      <div>毛毯</div>
      <div>卧室</div>
      <div>门窗</div>
      <div>阳台</div>
      <div>投影</div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchP: "大家都在搜：地毯"
    };
  },
  methods:{
      searchdis(){
        this.$emit("searchSF",false)
      }
  }
};
</script>

<style scoped lang="scss">
#searchPage {
  width: 100%;
  height: 100%;
  z-index: 1001;
  padding: 0 0.4rem;
  background: #fff;
  h2 {
    margin-top: 0.8rem;
  }
}
.search_wp {
  width: 100%;
  height: 0.65rem;
  position: relative;
  margin-top: 0.1rem;
  div {
    width: 5.78rem;
    height: 0.65rem;
    position: absolute;
    input {
      width: 100%;
      height: 100%;
      border: 0;
      border-radius: 0.06rem;
      outline: none;
      box-sizing: border-box;
      background: #f6f6f6;
      padding-left: 0.1rem;
      font-size: 0.24rem;
      color: #a1a0a0;
    }
    i {
      position: absolute;
      font-size: 0.22rem;
      top: 50%;
      margin-top: -0.11rem;
      right: 0.18rem;
    }
  }
  a {
    float: right;
    font: 0.24rem/.65rem PingFang-SC-Regular;
  }
}
.searchLabel {
  height: 4.3rem;
  width: 100%;
  margin-top: 0.42rem;
  position:relative;
  div {
    width: 1.14rem;
    height: 1.14rem;
    text-align: center;
    font-size: 0.3rem;
    line-height: 1.14rem;
    border-radius: 50%;
    box-shadow: 0px 0px 0.15rem 0.03rem rgba(127, 163, 208, 0.35);
    position: absolute;
    &:first-child{
        left:.6rem;
    }
    &:nth-child(2){
        top:.3rem;
        left:2rem;
    }
    &:nth-child(3){
        left:3.5rem;
    }
    &:nth-child(4){
        top:.4rem;
        left:5rem;
    }
    &:nth-child(5){
        top:1.5rem;
        left:.6rem;
    }
    &:nth-child(6){
        top:1.8rem;
        left:2rem;
    }
    &:nth-child(7){
        top:1.5rem;
        left:3.5rem;
    }
    &:nth-child(8){
        top:1.9rem;
        left:5rem;
    }
    &:nth-child(9){
        top:2.9rem;
        left:1rem;
    }
    &:last-child{
        top:2.9rem;
        left:3rem;
    }
  }
}
</style>

