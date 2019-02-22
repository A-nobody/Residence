export default {
	hotlist:[],
	alllist:[],
	allpageIndex:1,
	hotpageIndex:1,
	shopId:sessionStorage.getItem("shopsId")?sessionStorage.getItem('shopsId'):1,
	goodsId:sessionStorage.getItem("goodsId")?sessionStorage.getItem('goodsId'):1,
	searchstr:""
}