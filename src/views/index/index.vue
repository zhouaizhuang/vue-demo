
<template>
  <div class="p30">
    <div class="fs30 b mb20 tc">动画效果</div>
    <div class="f xs ac rw">
      <router-link class="db w20 g42b983 pb30 min230px" to="/carousel">可视化大屏无缝滚动</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/numGrow">数字滚动效果</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/breath">呼吸效果</router-link>
      <!-- <router-link class="db w20 g42b983 pb30" to="/">呼吸效果</router-link>
      <router-link class="db w20 g42b983 pb30" to="/">呼吸效果</router-link>
      <router-link class="db w20 g42b983 pb30" to="/">呼吸效果</router-link> -->
    </div>
    <div class="fs30 b mt30 mb20 tc">其他demo</div>
    <div class="f xs ac rw">
      <router-link class="db w20 g42b983 pb30 min230px" to="/specialFont">特殊字体（支持移动端）</router-link>
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