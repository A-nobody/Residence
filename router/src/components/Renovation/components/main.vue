<template>
    <div class="main">
        <!-- 装修必看 -->
        <div class="renovation_look">
            <p class="look_title">装修必看</p>
            <ul>
                <li v-for="(item,index) in mustlook"  @click="handledata(item)" >
                <router-link :to="{name:'details'}">
                   
                        <p>{{item.looktitle}}</p>
                        <img :src="item.lookimg">

                    </router-link> 
                </li>
            </ul>
        </div>
        <!-- 空间 -->
        <div class="space">
           <p class="look_title">空间</p>
           <ul>
              <li v-for="(item,index) in space"  @click="handledata(item)">
                   <router-link :to="{name:'details'}">
                        <p>{{item.looktitle}}</p>
                        <img :src="item.lookimg">
                  </router-link> 
              </li>
           </ul>
        </div>
        <!-- 大家都在看 -->
        <div class="alllook">

           <p class="look_title">大家都在看</p>
          <ul>
              <li v-for="(item,index) in alllook"  @click="handledata(item)">
                   <router-link :to="{name:'details'}">
                        <p>{{item.looktitle}}</p>
                        <img :src="item.lookimg">
                  </router-link> 
              </li>
          </ul>
        </div>
    </div>
</template>

<script>
export default{
    methods:{
        handledata(item){
            setTimeout(() => {
            this.observer.$emit("detail",item);
            this.observer.$off('datail'); 
            }, 200);
            
        }
    },
    data(){
        return {
       mustlook:[
                {
        "id": 1,
        "looktitle": "预算",
        "lookimg": "../../../../static/img/renovation/budget@2x.png"
        },
        {
        "id": 2,
        "looktitle": "材料选择",
        "lookimg": "../../../../static/img/renovation/material@2x.png"
        },
        {
        "id": 3,
        "looktitle": "水电防水",
        "lookimg": "../../../../static/img/renovation/water@2x.png"
        },
        {
        "id": 4,
        "looktitle": "地面",
        "lookimg": "../../../../static/img/renovation/floor@2x.png"
        },
        {
        "id": 5,
        "looktitle": "厨卫工程",
        "lookimg": "../../../../static/img/renovation/cookie@2x.png"
        },
        {
        "id": 6,
        "looktitle": "软装家具",
        "lookimg": "../../../../static/img/renovation/sofa@2x.png"
        },
        {
        "id": 7,
        "looktitle": "家用电器",
        "lookimg": "../../../../static/img/renovation/electric@2x.png"
        },
        {
        "id": 8,
        "looktitle": "配色指南",
        "lookimg": "../../../../static/img/renovation/paint@2x.png"
        },
        {
        "id": 9,
        "looktitle": "动线布局",
        "lookimg": "../../../../static/img/renovation/byicon-buju@2x.png"
        },
        {
        "id": 10,
        "looktitle": "灯具",
        "lookimg": "../../../../static/img/renovation/lamps@2x.png"
        }
         ],
 "space": [
    {
      "id": 11,
      "looktitle": "客厅",
      "lookimg": "../../../../static/img/renovation/house@2x.png"
    },
    {
      "id": 12,
      "looktitle": "卧室",
      "lookimg": "../../../../static/img/renovation/bedrom@2x.png"
    },
    {
      "id": 13,
      "looktitle": "卫生间",
      "lookimg": "../../../../static/img/renovation/bash@2x.png"
    },
    {
      "id": 14,
      "looktitle": "厨房",
      "lookimg": "../../../../static/img/renovation/knif@2x.png"
    }
  ],
  "alllook": [
    {
      "id": 15,
      "looktitle": "衣柜",
      "lookimg": "../../../../static/img/renovation/clothes@2x.png"
    },
    {
      "id": 16,
      "looktitle": "电视背景墙",
      "lookimg": "../../../../static/img/renovation/wall@2x.png"
    },
    {
      "id": 17,
      "looktitle": "橱柜",
      "lookimg": "../../../../static/img/renovation/gui@2x.png"
    },
    {
      "id": 18,
      "looktitle": "衣帽间",
      "lookimg": "../../../../static/img/renovation/hat@2x.png"
    }
  ]
        }
    }
    
}
</script>

<style scoped>
   .main{
       width: 100%;
       height:auto;
       padding: 0 .4rem;
       margin-top: .47rem;
   }
   /* 装修必看---标题 */
    .look_title{
      font-size: .33rem;
      font-weight: bold;
      color: #131313;
      margin-bottom:.3rem; 
   }
   .renovation_look ul li{
       width: 1.5rem;
       height: 1.7rem;
       float: left;
       background: #EAF3F5;
       border-radius: .06rem;
       margin: 0 .23rem .24rem 0;
   }
   /* 装修必看---最右边的li */
   .renovation_look ul li:nth-child(4n){
       margin-right: 0;
   }
   .renovation_look ul{
       width: 100%;
       height: 6.2rem;
   }
   .renovation_look ul p{
       color: #7FCDCA;
       font-size: .18rem;
       margin: .18rem 0 0 .18rem;
   }
   .renovation_look ul li img{
       height: .74rem;
       margin:.23rem 0 0 .48rem;
   }
    /* 图片位置设置 */
   .renovation_look ul li:nth-of-type(2) img,
   .renovation_look ul li:nth-of-type(5) img,
   .renovation_look ul li:nth-of-type(6) img,
   .renovation_look ul li:nth-of-type(7) img,
    .renovation_look ul li:nth-of-type(9) img{
       margin-left:.38rem; 
   }
   .renovation_look ul li:nth-of-type(3) img,
   .renovation_look ul li:nth-of-type(4) img{
       margin-left:.34rem; 
   }
   .renovation_look ul li:nth-of-type(8) img{
      margin-left: .27rem;
   }
   /* 空间 */
   .space,
   .alllook{
       width: 100%;
       height:2.35rem;
       margin: 0 0 .47rem 0;
   }
   .space>ul,
   .alllook>ul{
       width:100%;
       height: 100%;
       display: flex;
       justify-content: space-between;
   }
   .space>ul>li,
   .alllook>ul>li{
       width: 1.5rem;
       height: 1.7rem;
       background:#F5F0EA;
       border-radius: .06rem;
   }
   .space>ul>li>a>p,
   .alllook>ul>li>a>p{
       font-size: .18rem;
       color: #CDBC7F;
       margin: .18rem 0 .23rem .19rem;
   }
   .space>ul>li>a>img,
   .alllook>ul>li>a>img{
       height:.75rem;
       margin-left:.37rem ;
   }
   .alllook li:nth-of-type(1) img{
       margin-left: .4rem;
   }
   .alllook li:nth-of-type(2) img{
       margin-left: .23rem;
   }
   .alllook li:nth-of-type(3) img{
       margin-left: .55rem;
   }
   .alllook li:nth-of-type(4) img{
       margin-left: .43rem;
   }
</style>
