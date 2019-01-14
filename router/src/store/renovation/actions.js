import axios from "axios";
import qs from "qs";

// 请求的拦截
axios.interceptors.request.use((config)=>{
    //当发送方式为post时
     if(config.method=="post"){
        config.data=qs.stringify(config.data);
     }
     return config;
  })

//   响应拦截，只返回需要用到的数据
  axios.interceptors.response.use((res)=>{
    if(res.status){   
       return res.data; 
    }
})

export default{
       
    // 详情页面标题的数据
    detailtitleActions({commit}){
        axios({
            method:"get",
            url:"/api/mock/5c34910a571e3a78765765f9/example/detail_img_article"
        })
        .then((data)=>{
            commit("detailtitleMutations",data.data)
        })
    }, 

    // 详情页面专家经验表
    expericeActions({commit}){
        axios({
            method:"get",
            url:"/api/mock/5c34910a571e3a78765765f9/example/professor"
        })
        .then((data)=>{
            commit("expericeMutations",data.data)
        })
    },

      // 专家经验列表点击进入
         expericelistActions({commit}){
             axios({
                 method:"post",
                 url:"/api/mock/5c37ec68ecfa5277f4100272/professor_list",
             })
             .then((data)=>{
                commit("expericelistMutations",data)
             })
         }



}

   


// 响应拦截
