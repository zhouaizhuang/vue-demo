
<template>
  <div class="p30">
    <div class="fs30 b mb20 tc">CSS3动画</div>
    <div class="f xs ac rw">
      <router-link class="db w20 g42b983 pb30 min230px" to="/carousel">可视化大屏无缝滚动</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/numGrow">数字滚动效果</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/breath">呼吸效果</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/arrow">箭头指向动画</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/buttery">水波</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/slide">滑动名片</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/countDown">倒计时</router-link>
    </div>
    <div class="fs30 b mt30 mb20 tc">AE(lottie)动画</div>
    <div class="f xs ac rw">
      <router-link class="db w20 g42b983 pb30 min230px" to="/lottie">犸良动效</router-link>
    </div>
    <div class="fs30 b mt30 mb20 tc">图片帧动画</div>
    <div class="f xs ac rw">
      <router-link class="db w20 g42b983 pb30 min230px" to="/walk">人物行走动画</router-link>
    </div>
    <div class="fs30 b mt30 mb20 tc">svg动画</div>
    <div class="f xs ac rw">
      <router-link class="db w20 g42b983 pb30 min230px" to="/moveText">移动的马</router-link>
    </div>
    <div class="fs30 b mt30 mb20 tc">通用组件</div>
    <div class="f xs ac rw">
      <!-- <router-link class="db w20 g42b983 pb30 min230px" to="/">组件一</router-link> -->
    </div>
    <div class="fs30 b mt30 mb20 tc">特殊效果</div>
    <div class="f xs ac rw">
      <router-link class="db w20 g42b983 pb30 min230px" to="/specialFont">自定义字体</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/linearText">渐变文字</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  data(){
    return {
    
    }
  },
  methods:{
  },
  created(){
  }
}
</script>
<style>
.min230px{min-width:230px;}
</style>