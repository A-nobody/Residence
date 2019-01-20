<template>
 <transition name="parameter_slide">
  <div class="details_parameter_j" v-show="flag">
    <h2>商品参数</h2>
    <ul>
      <li v-for="(item,index) in parameter">
        {{item}}
        <span>{{goodsParameter[index]}}</span>
      </li>
    </ul>  
    <div class="parameter_complete">
      <div class="p_complete" @click="handlNone()">完成</div>
    </div>
  </div></transition>
</template>
<script>
import Vuex from 'vuex';

export default {
  
  created() {
    this.observer.$on("handleSend", params => {
      this.flag = params;
    });
    this.observer.$on("handleSendpar", params => {
      this.flag = params;
    });
  },
  data() {
    return {
      flag: false,
      parameter: ["品牌", "型号", "风格", "尺寸"],
     
    };
  },
  computed:{
    ...Vuex.mapState({
      goodsParameter:state=>state.details.goodsParameter
    })
  },
  methods: {
    handlNone(){
     this.flag=false;
    },
  }
}
</script>
<style lang="scss" scoped>
.details_parameter_j {
  position: fixed;
 top: 1.8rem;
  left: 0;
  z-index: 90;
  width: 7.5rem;
  height: 11.54rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.2rem 0.2rem 0 0;
  h2 {
    height: 1.2rem;
    text-align: center;
    font-size: 0.32rem;
    font-family: PingFang-SC-Regular;
    color: rgba(25, 25, 25, 1);
    line-height: 1.2rem;
  }
  li {
    margin: 0 0.43rem;
    height: 1rem;
    border-bottom: 1px solid #e5e5e5;
    font-size: 0.32rem;
    font-family: PingFang-SC-Regular;
    color: rgba(119, 119, 119, 1);
    line-height: 1rem;
    span {
      margin-left: 1rem;
    }
  }
  .parameter_complete {
    width: 100%;
    height: 5.9rem;
    position: relative;
    .p_complete {
      text-align: center;
      background: rgba(127, 208, 163, 1);
      border-radius: 0.4rem;
      position: absolute;
      bottom: 0.1rem;
      left: 0.4rem;
      width: 6.7rem;
      height: 0.8rem;
      font-size: 0.34rem;
      font-family: PingFang-SC-Regular;
      // font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 0.8rem;
    }
  }
}


</style>

