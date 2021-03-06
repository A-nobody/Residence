import axios from "axios";
export default {
	handlehotlist({commit,state}){
			if(state.hotpageIndex<=3){
			axios({
					method:"post",
					url:"/apig/shops/goodsList/"+state.shopId,
					data:{
						nowPage:state.hotpageIndex,
						sort:"goodsCommentNum",
						pageSize:6,
					}
				})
				.then((data)=>{
					commit("handlehotlist",data.goodsList)
				})
		}
	},
	handlealllist({commit,state}){
		if(state.allpageIndex<=3){
		   axios({
				   method:"post",
				   url:"/apig/shops/goodsList/"+state.shopId,
				   data:{
					nowPage:state.allpageIndex,
					sort:"",
					pageSize:6,
				   }
			   })
			   .then((data)=>{
				   commit("handlealllist",data.goodsList)
			   })
		   }
   },
	 /* handlehotlist({commit,state}){
		 if(state.hotpageIndex<=10){
			// axios({
			// 		method:"post",
			// 		url:"/apiw/mock/5c36e81c96e17359c184e2f8/huiju/shop/goodList/shopID",
			// 		data:{
			// 			shopId:state.shopId,
			// 			pageIndex:state.hotpageIndex,
			// 			sort:"sales",
			// 			limit:10
			// 		}
			// 	})
			// 	.then((data)=>{
			// 		commit("handlehotlist",data.data)
			// 	})
			axios({
					method:"post",
				url:"http://47.93.27.243//shops/goodsList/shopsID",
					data:{
						shopId:state.shopId,
						pageIndex:state.hotpageIndex,
						sort:"sales",
						limit:8
					}
				})
				.then((data)=>{
					commit("handlehotlist",data.data)
				})
		}
	},  */
	/*  handlealllist({commit,state}){
		 if(state.allpageIndex<=10){
			// axios({
			// 		method:"post",
			// 		url:"/apiw/mock/5c36e81c96e17359c184e2f8/huiju/shop/goodList/shopID",
			// 		data:{
			// 			shopId:state.shopId,
			// 			pageIndex:state.allpageIndex,
			// 			sort:"goodsId",
			// 			limit:10
			// 		}
			// 	})
			// 	.then((data)=>{
			// 		commit("handlealllist",data.data)
			// 	})
			 axios({
				 method: "post",
				 url: "http://47.93.27.243//shops/goodsList/shopsID",
				 data: {
					 shopId: state.shopId,
					 pageIndex: state.allpageIndex,
					 sort: "sales",
					 limit: 8
				 }
			 })
				 .then((data) => {
					 commit("handlealllist", data.data)
				 })
			}
	},  */
	handlealllistagain({dispatch}){
		dispatch("handlealllist");
	},
	handlehotlistagain({dispatch}){
		dispatch("handlehotlist");
	}
}