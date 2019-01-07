<template>
    <div class="details_j">
        <div class="top_j">中国移动</div>
        <Details-img-com></Details-img-com>
        <Details-content-com/>
    </div>
</template>
<script>
import Details_img from './details_img'
import Details_content from './details_content'
export default {
    components:{
        'Details-img-com':Details_img,
        "Details-content-com":Details_content
    }
}
</script>
<style lang="scss" scoped>
@mixin wrap_j{
    width: 100%;
    height:100%;
    position: relative;
}
@mixin top_j{
    height:.44rem;
    width:100%;
    position: absolute;
    top: 0;
    left: 0;
    
}
    .details_j{
       @include wrap_j;
       .top_j{
           @include top_j;
           background:transparent;
       }
        
    }
</style>