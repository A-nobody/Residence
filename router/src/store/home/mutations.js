export default{
    handleSetHome(state,params){
        state.homeNavs = params
    },
    handleSetCommit(state,params){
        state.commits = params
    },
    handleSetComment(state,params){
        state.comment = params
    },
    handleSetArticle(state,params){
        state.articles = params;
    },
    Cs(state,params){
        state.cs = params
    }
}