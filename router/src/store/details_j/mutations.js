export default {
    handledetailsData(state,params){
        // state.goodsdetailsImg = params;
        state.content = params;
        state.goodscolor = params;
        state.starNum = params;
        state.server = params;
      
        state.goodsParameter.push(params.goodsBrand);
        state.goodsParameter.push(params.goodsModel);
        state.goodsParameter.push(params.goodsTypeName);
        state.goodsParameter.push(params.goodsStock);


        state.goodsdetailsImg.push(params.goodsPicture1);
        state.goodsdetailsImg.push(params.goodsPicture2);
        state.goodsdetailsImg.push(params.goodsPicture3);
        state.goodsdetailsImg.push(params.goodsPicture4);
        state.goodsdetailsImg.push(params.goodsPicture5);
        // console.log(state.goodsdetailsImg)
       
    }
}