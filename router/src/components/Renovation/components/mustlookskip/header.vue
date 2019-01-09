<template>
    <div>
        <div class="header_details">
            <div class="mask">
                 
            </div> 
            <!-- 左右两侧返回图标 -->
                <img :src="lefticon" class="lefticon">
                <img :src="righticon" class="righticon">
                <p>{{title}}</p>
        </div>
        <div class="article">
            <span>
                人间的河盛着天上的河
                眼前的人唱着故人的歌
                来世的你遇见今生的我
                是否还会记得我们终会轮回至于暌阔
                相逢一瞥然后擦肩而过
                你是否会回首停驻片刻
                眼中些许疑惑
                你听 这钟声悠扬清澈
                你看 这槐花洁白如昨
            </span>
                
        </div>
        <div class="title_professor">
            <p>专家经验</p>
            <span>查看全部</span>
        </div>
    </div>
</template>

<script>

export default {
     data(){
       return {
       id:"",
       title:"",
       lefticon:"../../../../../static/img/renovation/back@2x.png",
       righticon:"../../../../../static/img/renovation/fx@2x.png"
       }
   },
   created(){
      let title=this.$route.query.title.looktitle;
      this.title=title;
   }
}
</script>

<style>

 .article{
       width: 6.7rem;
       height: 1.5rem;
       margin:.45rem 0 .85rem 0;
       font-size: .24rem;
       color: #757575;
       margin-left:.4rem; 
   }
  .header_details{
      width:100%;
      height: 3.9rem;
      background: url("../../../../../static/img/renovation/mater@2x.png")
  }
  .mask{
      width: 100%;
      height:100%;
      background: #000;
      opacity: .3;
  }
  .title_professor{
      width: 100%;
      height: .90rem;
      padding: 0 .49rem 0 .36rem;
  }
  .title_professor p{
       font-size: .33rem;
       color: #000;
       float: left;
       font-weight: bold;
   }
   .title_professor span{
       float: right;
       font-size: .22rem;
       color:#A1A0A0;
       margin-top: .13rem;
   }
   .header_details{
       position: relative;
   }
   .mask{
       position: absolute;
       left: 0;top:0;
   }
   .header_details p{
       position: absolute;
       left: .81rem;
       bottom: .89rem;
       font-size: .38rem;
       color: #FFFEFE;
   }
   .lefticon{
       width: .18rem;
       height:.30rem;
       position: absolute;
       top: .8rem;
       left: .39rem;
       z-index: 5;
   }
   .righticon{
       width: .30rem;
       height: .30rem;
       position: absolute;
       top: .8rem;
       right: .39rem;
       z-index: 5;
   }
</style>
