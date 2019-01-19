export default {
	handlehotlist(state,params){
		var rows = JSON.parse(JSON.stringify(params.rows));
		state.hotlist = [...state.hotlist,...rows];
		state.hotpageIndex++;
	},
	handlealllist(state,params){
		var rows = JSON.parse(JSON.stringify(params.rows));
		state.alllist = [...state.alllist,...rows];
		state.allpageIndex++;
	},
	handleMutations(state,params){
		state.paystyle = params;
		state.timeflag = false;
	},
	clickCancle(state){
		state.paystyle = "";
		state.timeflag = true;
	}
}