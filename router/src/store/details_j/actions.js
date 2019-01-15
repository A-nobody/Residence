import axios from '../../lib';
export default {
 handleDetails({commit}){
     axios({
         method:'post',
         url: "/api/mock/5c36e81c96e17359c184e2f8/huiju/shop/goods/goodsDetail",
         data:{
            goodsId:3
         }
     })
     .then((data) => {
        //  console.log(data)
         console.log(data.data.listproinfo[0])
         commit("handledetailsData", data.data.listproinfo[0])   
     })
 }

}