import axios from "axios";
import qs from "qs";


export default{

    // 主页面
    textActions({commit}){
       axios({
           method:"post",
           url:"http://47.93.27.243/huiju/findReleaseByPage"  ,
           data:{
            userId:1,
            pageSize:18,
            nowPage:1
         },
        })
        .then((data)=>{
            commit("mainpageMutations",data.releaseEssayResoult.list);
            // console.log(data)
         })
    },
    textActionsArticle({commit},val){
        axios({
            method:"post",
            
            url:"http://47.93.27.243/huiju/findByReleaseId"  ,
            data:{
             userId:1,
             releaseId:val,
          },
         })
         .then((data)=>{
            commit("expericelistMutations",data)
           // console.log(data.releaseEssay)
          })
         
     },
    mainpageActions({commit}){
       axios({
           method:"post",
           url:"http://10.9.41.243:8080/findReleaseByPage",
           data:{
            userId:1,
            pageSize:18,
            nowPage:1
         },
       })
       .then((data)=>{
           commit("mainpageMutations",data);
        //    console.log(data)
       },()=>{
           console.log("err")
       })
    },


       
    // 详情页面标题的数据
    detailtitleActions({commit}){
        axios({
            method:"get",
            url:"/apin/mock/5c34910a571e3a78765765f9/example/detail_img_article"
        })
        .then((data)=>{
            commit("detailtitleMutations",data.data)     
        })
    }, 

    // 详情页面专家经验表
    expericeActions({commit}){
        axios({
            method:"get",
            url:"/apin/mock/5c34910a571e3a78765765f9/example/professor"
        })
        .then((data)=>{
            commit("expericeMutations",data.data)
        })
    },

      // 专家经验列表点击进入
         expericelistActions({commit}){
             axios({
                 method:"post",
                 url:"/apin/mock/5c37ec68ecfa5277f4100272/professor_list",
             })
             .then((data)=>{
                commit("expericelistMutations",data.data)
               
             })
         }



}

   


// 响应拦截
