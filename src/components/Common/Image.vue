<!--
 * @description: 
 * @author: 肛肠科冯主任
 * @Date: 2020-08-30 16:28:59
-->
<template>
  <div class="imageBox">
    <img :src='url' v-show="imgVisible" ref="images">
    <div v-show="!imgVisible">loading...</div>
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: null
    }
  },
  data(){
    return {
      imgVisible: false,
    }
  },
  mounted(){
    this.$refs.images.onload = ()=>{
      this.imgVisible = true
    }
  }
}
</script>
<style lang='scss' scoped>
.imageBox{
  img{
    width: 100%;
    height: 100%;
  }
  div{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #a7a1a1;
    color: #fff;
  }
}
</style>