<template>
     <div class="bottomstylelist">
         <div class="style">
            <dl v-for="(item,index) in navs">
               <dt><img :src="item.photo"/></dt>
               <dd>{{item.title}}</dd>    
            </dl>
         </div>
         <div class="cancelbutton">
            <p>取消</p>
         </div>
     </div>
</template>


<script>
export default {
    data(){
        return{
            navs:[
                {
                  photo:"../../../../../static/img/renovation/qq@2x.png",
                  title:"QQ " 
                },
                {
                  photo:"../../../../../static/img/renovation/wx@2x.png",
                  title:"微信"  
                },
                {
                  photo:"../../../../../static/img/renovation/wb@2x.png",
                  title:"微博"
                },
                {
                  photo:"../../../../../static/img/renovation/more@2x.png",
                  title:"查看更多"
                }
            ]
        }
    }
}
</script>

<style>
  .bottomstylelist{
      width:7.1rem;
      height: 2.6rem;
      position: absolute;
      bottom: .2rem;
      left: .2rem;
      z-index: 101;
  }
  .style{
      width:7.1rem;
      height: 1.4rem;
      background:#fff;  
      display: flex;
      justify-content: space-around;
      border-radius: .10rem;
  }
  .style dl{
      width: 100%;
      height: 100%;
  }
  .style dl dt img{
     height: .52rem;
     margin-top: .3rem;
     margin-left: .56rem;
  }
  .style dl:nth-of-type(4) dt img{
      height:.09rem;
      margin-top: .6rem;
      margin-bottom: .24rem;
  }
  .style dl:nth-of-type(4) dd{
      margin-left: .40rem;
  }
   .style dl dt{
      color:#A1A0A0;
      font-size: .3rem;
      margin-bottom: .12rem;
  }
  .style dl dd{
      margin-left: .67rem;
  }
  .cancelbutton{
      width:7.1rem;
      height:.98rem;
      background:#fff;
      margin-top: .2rem;
      text-align: center;
      color:#8A8989;
      font-size: .3rem;
      padding-top: .35rem;
  }
  
</style>