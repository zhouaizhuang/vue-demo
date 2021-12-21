
<template>
  <div class="w90 db auto indexFontSize">
    <div class="f ac xc g1890ff pt20 pb10 op8 title">C端产品demo，不同项目样式千差万别，所以此处demo只侧重效果，具体样式根据不同项目自行实现</div>
    <div class="fs50r b mb20 mt20 tc">CSS3动画</div>
    <!--https://chokcoco.github.io/CSS-Inspiration/#/./background/bg-clip-text-shine-->
    <div class="f xs ac rw">
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/typeWord">打字动画</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/textStaggered">文字交错显示</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/carousel">可视化大屏无缝Y轴滚动</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/carouselX">文字横幅横向X轴滚动</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/wordsCarousel">文字步进轮播动画</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/numGrow">数字滚动效果</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/specialBotton">特殊按钮</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/arrow">箭头指向动画</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/buttery">水波</router-link></div>
      <!-- <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/slide">滑动名片</router-link></div> -->
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/countDown">倒计时</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/guidePoint">引导用户点击</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/useAnimate">animate动画库</router-link></div>
      <!-- <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/textStreamer">文字流光效果</router-link></div> -->
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/textSweat">文字流汗动画</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/aniDelay">动画播放延时</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/specialBorder">特殊边框</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/pieChart">简易饼图（锥形渐变）</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/redPacket">红包动画</router-link></div>
    </div>
    <div class="fs50r b mt30 mb20 tc">AE(lottie)动画</div>
    <div class="f xs ac rw">
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/lottie">犸良动效</router-link></div>
    </div>
    <div class="fs50r b mt30 mb20 tc">图片帧动画</div>
    <div class="f xs ac rw">
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/walk">人物行走动画</router-link></div>
    </div>
    <div class="fs50r b mt30 mb20 tc">svg动画</div>
    <div class="f xs ac rw">
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/moveText">移动的马</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/moveSvg">不规则运动(css+svg路径)</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/stickPop">粘滞融合</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/svgStroke">写字动画</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/svgProgress">环形进度条效果</router-link></div>
    </div>
    <div class="fs50r b mt30 mb20 tc">通用组件</div>
    <div class="f xs ac rw">
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/icon">icon</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/zInput">高度自定义输入框</router-link></div>
      <!-- <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/upImg">图片上传</router-link></div> -->
    </div>
    <div class="fs50r b mt30 mb20 tc">性能瓶颈突破</div>
    <div class="f xs ac rw">
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/tree">时间分片(树形控件1万个结点)</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/virtualList">虚拟列表(高性能渲染十万条数据)</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/pageLoad">分页加载</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/lazyLoadImg">图片懒加载</router-link></div>
    </div>
    <div class="fs50r b mt30 mb20 tc">BUG解决</div>
    <div class="f xs ac rw">
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/scrollThrough">滚动穿透问题</router-link></div>
    </div>
    <div class="fs50r b mt30 mb20 tc">特殊效果</div>
    <div class="f xs ac rw mb30">
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/specialFont">自定义字体</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/linearText">渐变、描边、阴影文字</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/autoBreak">自适应换行、溢出隐藏、竖排文本</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/filter">滤镜、毛玻璃效果</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/clipImg">图形裁剪</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/reflectImg">倒影效果</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/scrollStrong">滚动增强</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/svgStudy">svg学习</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/irregularAvatar">不规则头像</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/transparentBorder">半透明边框、内圆角边框</router-link></div>
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/circleText">环形文字</router-link></div>
    </div>
    <div class="fs50r b mt30 mb20 tc">数据可视化</div>
    <div class="f xs ac rw">
      <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/barChart">柱状图</router-link></div>
    </div>
    <div class="fs50r b mt30 mb20 tc">Vue进阶</div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">vue指令：</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/vPermission">v-permission</router-link></div>
        <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/vCopy">v-copy</router-link></div>
        <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/vDebounce">v-debounce</router-link></div>
        <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/vThrottie">v-throttie</router-link></div>
        <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/vWaterMarker">v-waterMarker</router-link></div>
        <!-- <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/vDraggable">v-draggable</router-link></div> -->
        <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/vLongpress">v-longpress</router-link></div>
      </div>
    </div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">vue组件传值：</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/propsEmit">props、$emit</router-link></div>
        <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/parentChild">$parent、$children</router-link></div>
        <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/eventBus">eventBus</router-link></div>
        <div class="db w20 pb30 min180px"><router-link class="g42b983" to="/attrsListeners">attrsListeners</router-link></div>
      </div>
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
<style scoped>
.min180px{min-width:180px;}
/**PC端和移动端做适配 */
@media screen and (min-width: 320px) {.indexFontSize{font-size: 0.3rem !important;}}
/* @media screen and (min-width: 640px) {.indexFontSize{font-size: 0.28rem !important;}}  */
</style>