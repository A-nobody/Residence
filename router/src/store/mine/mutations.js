export default {
  maskShow(state, params) {
    state.maskFlag = true;
    state.typeNum = params;
  },
  maskHide(state) {
    state.maskFlag = false;
  },
  synoShow(state) {
    state.synoFlag = true;
  },
  synoHide(state) {
    state.synoFlag = false;
  },
  nameShow(state) {
    state.nameFlag = true;
  },
  nameHide(state) {
    state.nameFlag = false;
  },
  getAddress(state,params){
    state.addr=params;
    state.maskFlag = false;
  },
  getBirthday(state,params){
    state.birth=params;
    state.maskFlag = false;
  },
  setSex(state,params){
    state.sex=params;
    state.maskFlag = false;
  },
  setName(state,params){
    state.userName=params;
    state.nameFlag = false;
  },
  setSyno(state,params){
    state.syno=params;
    state.synoFlag = false;
  },


  getGoodsList(state, params) {
    state.goodsList = params;
  },
  handleCheckAll(state) {
    state.checkAll = !state.checkAll;
    state.goodsList.map((item) => {
      item.flag = state.checkAll
    })
  },
  handleCheck(state, params) {
    state.goodsList[params].flag = !state.goodsList[params].flag;
    let bstop = true;
    state.goodsList.map((item) => {
      if (item.flag == false) {
        bstop = false;
      }
    })
    state.checkAll = bstop;
  },
  handleAdd(state, params) {
    if (state.goodsList[params].num < 99) {
      state.goodsList[params].num++
    }
  },
  handleReduce(state, params) {
    if (state.goodsList[params].num > 1) {
      state.goodsList[params].num--
    }
  },

  /* 获取订单信息列表 */
  handleGetOrder(state,params){
    state.orderlist=[];
    var rows = JSON.parse(JSON.stringify(params));
    switch(state.orderState){
      case 0:{
        state.orderlist0 = [...state.orderlist0,...rows];
        state.orderlist = JSON.parse(JSON.stringify(state.orderlist0));
        state.orderpageIndex0++;
        break;
      }
      case 1:{
          state.orderlist1 = [...state.orderlist1,...rows];
          state.orderpageIndex1++;
          state.orderlist = JSON.parse(JSON.stringify(state.orderlist1));
          break;
      }
      case 2:{
        state.orderlist2 = [...state.orderlist2,...rows];
        state.orderpageIndex2++;
        state.orderlist = JSON.parse(JSON.stringify(state.orderlist2));
        break;
      }
      case 3:{
        state.orderlist3 = [...state.orderlist3,...rows];
        state.orderpageIndex3++;
        state.orderlist = JSON.parse(JSON.stringify(state.orderlist3));
        break;
      }
      default:{
        state.orderalllist = [...state.orderalllist,...rows];
        state.orderpageIndexnull++;
        state.orderlist = JSON.parse(JSON.stringify(state.orderalllist));
        break;
      }
    }
  },
  // 修改订单状态
  handleChangeStatus(state,params){
      state.orderState = params;
  }
}
