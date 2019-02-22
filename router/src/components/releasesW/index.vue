<template>
    <div id="releases">
        <releases-com/>
    </div>
</template>

<script>
import releases_w from "./components/releases"
export default {
    components:{
        "releases-com":releases_w
    }
}
</script>

<style lang="scss" scoped>
    #releases{
        width: 100%;
        height:100%
    }
</style>