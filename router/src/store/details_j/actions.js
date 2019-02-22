import axios from '../../lib';
export default {
    handleDetails({ commit }) {
        axios({
            method: 'post',
            //  url: "/apiw/mock/5c36e81c96e17359c184e2f8/huiju/shop/goods/goodsDetail",
            url: "http://47.93.27.243/huiju/shops/goods/goodsDetail",
            data: {
                goodsId: 1
            }
        })
            .then((data) => {
                // console.log(data.goods)

                commit("handledetailsData", data.goods)
            })

    }

}