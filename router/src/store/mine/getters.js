import state from "./state";
export default {
  result() {
    let Num = 0,Price = 0;
    state.goodsList.map((item) => {
      if (item.flag) {
        Num += item.num;
        Price += (item.price * 10) * item.num / 10;
      }
    })
    return {
      Num,
      Price
    }
  }
}
