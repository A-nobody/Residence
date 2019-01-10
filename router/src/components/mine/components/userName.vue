<template>
    <div class="userName">
        <div class="top">
            <span @click="nameHide()">取消</span>
            <h3>修改昵称</h3>
            <span @click="nameChange()">保存</span>
        </div>
        <div class="inputName">
            <input type="text" placeholder="贝贝">
            <p>昵称可是中英文、数字的任意组合、30天只能修改一次哦。</p>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    methods:{
        ...Vuex.mapMutations({
            nameHide:'mine/nameHide'
        }),
        nameChange(){
            var msg = "确定要修改昵称吗";
            if (confirm(msg)==true){
                return true;
            }else{
                return false;
            }
        }
    }
}
</script>

<style scoped>
    .userName{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: #ffffff;
        font-family: PingFang-SC-Regular;
        font-size: 0.3rem;
        font-weight:400;
    }
    .userName .top{
        width: 90%;
        height: 1.2rem;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        align-items: center;
    }
    .userName .top h3{
        font-size: 0.34rem;
    }
    .userName .inputName{
        width: 90%;
        height: 3rem;
        margin: 0.8rem auto;
        color: #cacaca;
    }
    .userName .inputName input{
        width: 100%;
        height: 0.5rem;
        border: none;
        font-size: 0.3rem;
        padding: 0.5rem 0.1rem;
        border-bottom: 0.01rem solid #cacaca;
    }
    .userName .inputName p{
        font-size: 0.2rem;
        margin: 0.4rem 0.1rem;

    }
</style>