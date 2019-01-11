import axios from "../../lib";

export default {
    getGoodsList({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/goods"
        })
        .then((data)=>{
            data.map((item)=>{
                item.flag = true
            })
            commit("getGoodsList",data)
        })
    },
    handleDel({dispatch},params){
        axios({
            method:"delete",
            url:"http://localhost:3000/goods/"+params
        })
        .then(()=>{
            dispatch('getGoodsList')
        })
    }
}