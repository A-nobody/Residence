import axios from "axios";

export default {
    handleSetHome({commit}){
        axios({
            url:"/apiw/mock/5c3481b05ee07b0e226214fa/api/home",
        })
        .then((data)=>{
           commit("handleSetHome",data.data.data)
        })
    }
}