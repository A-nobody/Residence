export default {
    handledetailsData(state,params){
        state.goodsdetailsImg = params;
        state.content = params;
        state.goodscolor = params;
        state.starNum = params;
        state.server = params;
      
        state.goodsParameter.push(params.goodsBrand);
        state.goodsParameter.push(params.goodsModel);
        state.goodsParameter.push(params.goodsStyle);
        state.goodsParameter.push(params.goodsStock);
       
    }
}