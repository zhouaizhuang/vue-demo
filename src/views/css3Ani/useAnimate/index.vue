
<template>
  <div style="margin: 50px auto;width:300px;" class="tc">
    <div class="fs16 gf10000 tl wrap mb10">使用方法:在animate.css中找到对应的类名的样式复制出来使用</div>
    <div class="fs16 gf10000 mb30 tl wrap">demo效果:https://animate.style/#documentation</div>
    <div @click="startAni" class="bg1890ff rds30 pl10 pr10 pt10 pb10 fs24 gf b">开启动画</div>
    <h1 :class="[showAni ? 'animated backInDown' : '']">bounceInDown</h1>
    <h1 :class="[showAni ? 'animated shakeX' : '']">shakeX</h1>
    <h1 class="animated bounceIn infinite">无限播放</h1>
    <h1 :class="[showAni ? 'animated heartBeat' : '']">heartBeat</h1>
    <h1 :class="[showAni ? 'animated bounce' : '']">bounce</h1>
    <h1 :class="[showAni ? 'animated fadeInDown' : '']">fadeInDown</h1>
    <h1 :class="[showAni ? 'animated zoomInRight' : '']">roomInRight</h1>
  </div>
</template>
<script>
// import { random } from "../../../common/index.js"
export default {
  name: 'useAnimate',
  data(){
    return {
      showAni:false
    }
  },
  methods: {
    startAni(){
      this.showAni = true
      setTimeout(() => {
        this.showAni = false
      }, 1e3)
    }
   
  },
  created(){
  },
  beforeDestroy(){
  }
}
</script>
<style src="./animate.css"></style>
<style scoped>
  h1{
    margin-bottom: 50px;
  }
</style>