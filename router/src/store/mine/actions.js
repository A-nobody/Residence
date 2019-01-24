import axios from "../../lib";
import state from "./state";

export default {
    getGoodsList({commit}){
        axios({
            method:"get",
            url:"/api/mock/5c3865797198202bdf59eed5/api/goods"
        })
        .then((data)=>{
            data.goods.map((item)=>{
                item.flag = true
            })
            commit("getGoodsList",data.goods)
        })
    },
    handleDel({dispatch},params){
        axios({
            method:"delete",
            url:"/api/mock/5c3865797198202bdf59eed5/api/goods/"+params
        })
        .then(()=>{
            dispatch('getGoodsList')
        })
    },
    handleGetOrder({commit,state}){
        var pageIndex ="";
        switch(state.orderState){
            case 0:{
                pageIndex = state.orderpageIndex0;
                break;
            }
            case 1:{
                pageIndex = state.orderpageIndex1;
                break;
            }
            case 2:{
                pageIndex = state.orderpageIndex2;
                break;
            }
            case 3:{
                pageIndex = state.orderpageIndex3;
                break;
            }
            default:{
                pageIndex = state.orderpageIndexnull;
            }
        }
        if(pageIndex<=4){
             axios({
            method:"post",
            url:"/apiw/mock/5c36e81c96e17359c184e2f8/huiju/shop/orderList",
            data:{
                    "userId":state.userId,
                    "pageIndex":pageIndex,
                    "limit":3,
                    /* 此处是订单的状态 */
                    "orderState":state.orderState,
            }
            })
            .then((data)=>{
                /* 此处应用订单的状态判断，若是全部时，加上item.flag */
                if(state.orderState=="null"){
                    data.data.rows.map((item)=>{
                        item.flag = false;
                    })
                }
                commit("handleGetOrder",data.data.rows);
            })
        }
       
    },
    handleGetOrderAgain({dispatch}){
		dispatch("handleGetOrder");
	},
}