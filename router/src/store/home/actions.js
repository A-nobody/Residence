import axios from "axios";

export default {
    handleSetHome({commit}){
        axios({
            // url:"/apiw/mock/5c3481b05ee07b0e226214fa/api/home",
            method:"post",
            url:"http://47.93.27.243/huiju/findReleaseByPage",
            data:{ 
                userId:1,
                pageSize:18,
                nowPage:1
            }
        })
        .then((data)=>{
           commit("handleSetHome",data)
        })
    },
    handleSetCommit({commit}){
        axios({
            // url:"/apiw/mock/5c3481b05ee07b0e226214fa/api/home",
            method:"post",
            url:"http://47.93.27.243/huiju/findReleaseByPage",
            data:{ 
                userId:1,
                pageSize:18,
                nowPage:1
            }
        })
        .then((data)=>{
           commit("handleSetHome",data)
        })
    },
    handleSetComment({commit}){
        axios({
            // url:"/apiw/mock/5c3481b05ee07b0e226214fa/api/home",
            method:"post",
            url:"http://47.93.27.243/huiju/getEssayMoment",
            data:{
                essayId:1
            }
        })
        .then((data)=>{
           commit("handleSetComment",data.releaseEssayComment.list)
        })
    },
    handleSetArticle({commit}){
        axios({
            method:"post",
            url:"http://47.93.27.243/huiju/findByReleaseId",
            data:{
                releaseId:1
            }
        })
        .then((data)=>{
            commit("handleSetArticle",data)
        })
    },
    Cs({commit}){
        axios({
            // url:"/apiw/mock/5c3481b05ee07b0e226214fa/api/home",
            method:"post",
            url:"http://47.93.27.243/huiju/findByReleaseId",
            data:{
                releaseId:1
            }
        })
        .then((data)=>{
           commit("Cs",data)
           console.log(data)
        })
    }
}

/** 
 * 评论
 url:"http://10.9.26.132:8080/getEssayMoment",
            data:{ 
                essayId:1
            }
文章赞
 url:"http://10.9.26.132:8080/addGoodNum",
            data:{
                releaseEssayId:1
            }
评论赞
              url:"http://10.9.26.132:8080/addEssayMomentGoodNum",
            data:{
                commentId:1
            }

文章
             url:"http://10.9.26.132:8080/findByReleaseId",
            data:{
            }

收藏
            url:"http://10.9.26.132:8080/addUserLikeEssay",
            data:{
                userId:1,
                essayId:1
            }
发布
             url:"http://10.9.26.132:8080/createRelease",
            data:{
                userId:1,
                essayTitle:"偌大的",
                essayPicture:"11",
                essayGoodNum:"11",
                essayCollectionNum:"11",
                goodsId:"11",
                flagCollection:"11",
                essayMain:"11"

            }
*/