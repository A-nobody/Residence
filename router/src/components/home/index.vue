<template>
    <div>
        <HearderW/>
        <search-com/>
    </div>
</template>

<script>
import HearderW from "./components/HearderW.vue"
import Search from "./components/search.vue"
export default {
    components:{
        "HearderW": HearderW,
        "search-com":Search
    }
}
</script>

<style>

</style>