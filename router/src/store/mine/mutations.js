export default {
  maskShow(state,params) {
    state.maskFlag = true;
    state.typeNum = params;
  },
  maskHide(state) {
    state.maskFlag = false;
  },
  synoShow(state){
    state.synoFlag = true;
  },
  synoHide(state){
    state.synoFlag = false;
  },
  nameShow(state){
    state.nameFlag = true;
  },
  nameHide(state){
    state.nameFlag = false;
  }
}
