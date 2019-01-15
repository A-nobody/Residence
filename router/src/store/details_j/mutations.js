export default {
    handledetailsData(state,params){
        state.goodsdetailsList = params.goodsPicture;
        state.content = params;
    }
}