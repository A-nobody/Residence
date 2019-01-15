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
  }

}
