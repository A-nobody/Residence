<template>
  <div class="addres">
    <div class="topOut">
      <div class="top">
        <div class="img" @click="goBack()">
          <img src="static/img/mine/left.png">
        </div>
        <h2>添加收货地址</h2>
        <span @click="goConfirmOrder()">保存</span>
      </div>
    </div>
    <div class="main">
      <div class="slct" >
        <span>收货人</span>
      </div>
      <div class="slct" >
        <span>手机号码</span>
        <p><span>+86</span><img src="static/img/mine/right2.png"></p>
      </div>
      <div class="slct" @click="addresShow()">
        <span>所在区域</span>
        <p><img src="static/img/mine/right2.png"></p>
      </div>
      <div class="slct" >
        <span>详细地址：如道路、门牌号、小区、楼道号等</span>
      </div>
    </div>
    <div class="addres2" v-show="flag">
        <div class="mask" @click="addresHide()"></div>
        <!--地址的三级联动-->
        <div class="content_z">
						 <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
      			<p>{{myAddressProvince}} {{myAddressCity}} {{myAddresscounty}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Picker } from "mint-ui";
import myaddress from "../../../../common/json/address.json";
Vue.component(Picker.name, Picker);

export default {
    data(){
        return{
            flag:false,
             myAddressSlots: [
				        {
				          flex: 1,//对应 slot CSS 的 flex 值
				          defaultIndex: 1,//对应 slot 初始选中值，需传入其在 values 数组中的序号，默认为 0
				          values: Object.keys(myaddress), //省份数组
				          className: "slot1",//对应 slot 的类名
				          textAlign: "center"//对应 slot 的对齐方式
				        },
				        {
				          divider: true,//对应 slot 是否为分隔符
				          content: "-",//分隔符 slot 的显示文本
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
    methods:{
        addresShow(){  
            this.flag = true;
        },
        addresHide(){
            this.flag = false;
        },
        goConfirmOrder(){
          this.$router.push({name:"confirm"});
        },
        goBack(){
           this.$router.go(-1);
        },
        /*地址的三级联动*/
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
			
			        /*
			            setSlotValues(index, values)：设定给定 slot 的备选值数组
			        
			        */
			      }
			 	}
    },
    mounted() {
	    this.$nextTick(() => {
	      //vue里面全部加载好了再执行的函数 （类似于setTimeout）
	      this.myAddressSlots[0].defaultIndex = 0;
	      // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
	    });
  	}
};
</script>

<style lang="scss" scoped>
.addres {
    position: relative;
  width: 100%;
  height: 100%;
  font-family: PingFang-SC-Regular;
  font-size: 0.24rem;
  .topOut {
    border-bottom: 0.01rem solid #bfbfbf;
    .top {
      width: 90%;
      margin: 0 auto;
      height: 1.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        font-size: 0.3rem;
      }
    }
  }
  .main {
    width: 90%;
    margin: 0 auto;
    height: 100%;
    .slct {
      width: 100%;
      height: 0.92rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #787777;
      > p > img {
        display: inline-block;
        margin-left: 0.6rem;
      }
    }
  }
  .addres2{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      
      .mask{
          background: rgba(0, 0, 0, 0.3);
          width: 100%;
          height: 2.6rem;
      }
      .content_z{
          width:100%;
          height: 11.13rem;
          position: fixed;
          bottom: 0;
          background: #ffffff;
          border-radius:40px 40px 0 0;
      }
  }
}
</style>
