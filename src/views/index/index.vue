
<template>
  <div class="p30">
    <div class="f ac xc g1890ff pt20 pb10 op8">C端产品demo，不同项目样式千差万别，所以此处demo只侧重效果，具体样式根据不同项目自行实现</div>
    <div class="fs30 b mb20 mt20 tc">CSS3动画</div>
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
      <router-link class="db w20 g42b983 pb30 min230px" to="/moveSvg">不规则运动(css+svg路径)</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/stickPop">粘滞融合</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/svgStroke">写字动画</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/svgProgress">环形进度条效果</router-link>
    </div>
    <!--
    <div class="fs30 b mt30 mb20 tc">通用组件</div>
    <div class="f xs ac rw">
      <router-link class="db w20 g42b983 pb30 min230px" to="/tree">树形控件</router-link>
    </div>
    -->
    <div class="fs30 b mt30 mb20 tc">性能瓶颈突破</div>
    <div class="f xs ac rw">
      <router-link class="db w20 g42b983 pb30 min230px" to="/tree">时间分片(树形控件1万个结点)</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/virtualList">虚拟列表(高性能渲染十万条数据)</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/pageLoad">分页加载</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/lazyLoadImg">图片懒加载</router-link>
    </div>
    <div class="fs30 b mt30 mb20 tc">BUG解决</div>
    <div class="f xs ac rw">
      <router-link class="db w20 g42b983 pb30 min230px" to="/scrollThrough">滚动穿透问题</router-link>
    </div>
    <div class="fs30 b mt30 mb20 tc">特殊效果</div>
    <div class="f xs ac rw mb30">
      <router-link class="db w20 g42b983 pb30 min230px" to="/specialFont">自定义字体</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/linearText">渐变、描边、阴影文字</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/autoBreak">自适应换行、溢出隐藏、竖排文本</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/filter">滤镜相关</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/clipImg">图形裁剪</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/reflectImg">倒影效果</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/scrollStrong">滚动增强</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/svgStudy">svg学习</router-link>
      <router-link class="db w20 g42b983 pb30 min230px" to="/irregularAvatar">不规则头像</router-link>
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