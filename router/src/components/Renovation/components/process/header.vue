<template>
    <div class="process">
        <div class="header_img">
            <!-- <img src="../../../../../static/"/> -->
        </div>
        <p class="title">装修流程</p>
        <div class="process_detail">
            <ul>
                <li>
                   <p>准备阶段</p>
                   <div class="article">
                        <p>1.常见的施工模式</p>
                        <p>2.常见的设计模式</p>
                        <p>3.合理安排装修预算</p>
                        <p>4.规划主材购买顺序</p>
                        <p>5.签合同时的注意事项</p> 
                    </div> 
                   
                </li>
                <li>
                    <p>拆除</p>
                   <div class="article">
                        <p>1.明确哪些墙可以拆</p>
                        <p>2.注意地面拆除</p>
                        <p>3.卫浴拆除需格外谨慎</p>
                    </div>
                </li>
                <li>
                    <p>水电</p>
                   <div class="article">
                        <p>1.明确哪些墙可以拆</p>
                        <p>2.注意地面拆除</p>
                        <p>3.卫浴拆除需格外谨慎</p>
                    </div></li>
                <li>木工</li>
                <li>瓦工</li>
                <li>油工</li>
                <li>安装</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.header_img{
    width: 7.5rem;
    height: 3.68rem;
    background: pink;
}
.title{
    margin:.33rem 0 .22rem .4rem;
    font-size: .34rem;
    color: #424141;
    font-weight: bold;
}
.process_detail{
    width: 6.58rem;
    height: auto;
    margin-left: .43rem;
    border:1px solid red;
    /* text-indent:2em; */
}
.process_detail ul li{
    font-size: .30rem;
    color: #424141;
}
.article{
    padding-left:.3rem;
}
</style>
