export default {
  maskFlag: false,
  synoFlag: false,
  nameFlag: false,
  typeNum: "",
  goodsList: [],
  checkAll: true,
  userName: "未设置",
  addr: '未选择',
  birth: '未选择',
  sex: '未选择',
  syno: '未设置',

  userId:1,//用户id,此处是登录时传过来的，这里先假设是1
  orderpageIndexnull:1,//全部状态订单de页数,
  orderpageIndex0:1,//待付款状态订单de页数
  orderpageIndex1:1,//待收货1状态订单de页数
  orderpageIndex2:1,//已完成2状态订单de页数
  orderpageIndex3:1,// 已取消3状态订单de页数
  orderState:"null",//订单状态  全部null 待付款0  待收货1 已完成2 已取消3,
  orderalllist:[],//全部状态订单的列表
  orderlist0:[],//待付款状态订单的列表
  orderlist1:[],//待收货1状态订单的列表
  orderlist2:[],//已完成2状态订单的列表
  orderlist3:[],//已取消3状态订单的列表
  orderlist:[],//用于返回存储不同状态的订单列表
}
