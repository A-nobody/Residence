<template>
    <div class="details_j">
        <div class="top_j">中国移动</div>
        <Details-img-com></Details-img-com>
        <Details-content-com/>
        <Details-classify-com/>
        <Details-tostore-com/>
        <Details-bottom-com/>
    </div>
</template>
<script>
import Details_img from './details_img'
import Details_content from './details_content'
import Details_classify from './details_classify'
import Details_tostore from './details_tostore'
import Details_bottom from './details_bottom'
export default {
    components:{
        'Details-img-com':Details_img,
        "Details-content-com":Details_content,
        'Details-classify-com':Details_classify,
        'Details-tostore-com':Details_tostore,
        'Details-bottom-com':Details_bottom,
        
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
       background: #f1f1f1;
       .top_j{
           @include top_j;
           background:transparent;
       }
        
    }
</style>