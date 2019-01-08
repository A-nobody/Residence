<template>
    <div id="header_w">
        <p class="tab_w">
            <a href="#">关注</a>
            <a href="#">推荐</a>
        </p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #header_w{
        width: 100%;
        height: .88rem;
        background:pink;
        position: fixed;
        top:0;
        left:0;
    }
    #header_w>.tab_w{
        width: 2.16rem;
        height:100%;
        background: aqua;
        position: absolute;
        left:50%;
        margin-left: -1.13rem;
        display: flex;
        justify-content: space-between;
    }
</style>

