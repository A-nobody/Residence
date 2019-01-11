export default {
	handleMutations(state,params){
		state.paystyle = params;
		state.timeflag = false;
	},
	clickCancle(state){
		state.paystyle = "";
		state.timeflag = true;
	}
}