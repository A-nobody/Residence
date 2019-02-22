<template>
      <div class="maskonturn" @click="handleClose">
             
      </div>    
</template>

<script>
export default {
    methods:{
      handleClose(){
        this.$emit("close",false);
      }
    }
}
</script>


<style>
  .maskonturn{
      position: absolute;
      left: 0;
      top: 0;
      opacity: .4;
      width:100%;
      height: 100%;
      background: #000;
      z-index:100;
  }
</style>
