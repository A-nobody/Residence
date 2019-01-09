import axios from "axios"

export default{
    mustlookActions({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/data"
        })
        .then((data)=>{
            commit("mustlookMutations",data.data);
        })
    },
    spaceActions({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/space"
        })
        .then((data)=>{
            commit("spaceMutations",data.data);
        })
    },
    alllookActions({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/alllook"
        })
        .then((data)=>{
            commit("alllookMutations",data.data);
        })
    }
}


// 响应拦截
