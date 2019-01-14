export default{
    // 详情页标题数据获取
    detailtitleMutations(state,params){
        state.detailtitle=params;
    },
    // 详情页面专家经验数据获取
    expericeMutations(state,params){
        state.professor=params;
    },

    // 详情页面专家经验
    expericelistMutations(state,params){
        state.experience=params;
    }
}