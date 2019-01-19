import axios from "../../lib";

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
    }
}