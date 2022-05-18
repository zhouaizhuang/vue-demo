
<template>
  <div class="w95 db auto indexFontSize">
    <div class="f ac xc g1890ff pt20 pb10 op8 title">C端产品demo，不同项目样式千差万别，所以此处demo只侧重效果，具体样式根据不同项目自行实现</div>
    <!-- <div class="fs50r b mb20 mt20 tc">动画</div> -->
    <!--采用全局组件实现-->
    <z-text class="fs50r b mb20 mt20 tc" text="动画"></z-text>
    <!--https://chokcoco.github.io/CSS-Inspiration/#/./background/bg-clip-text-shine-->
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">CSS3动画</div>
        <div class="f1 f xs ac rw">
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/typeWord">打字动画</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/textStaggered">文字交错显示</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/carousel">可视化大屏无缝Y轴滚动</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/carouselX">文字横幅横向X轴滚动</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/wordsCarousel">文字步进轮播动画</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/numGrow">数字滚动效果</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/specialBotton">特殊按钮</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/arrow">箭头指向动画</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/buttery">水波</router-link></div>
          <!-- <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/slide">滑动名片</router-link></div> -->
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/countDown">倒计时</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/guidePoint">引导用户点击</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/useAnimate">animate动画库</router-link></div>
          <!-- <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/textStreamer">文字流光效果</router-link></div> -->
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/textSweat">文字流汗动画</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/aniDelay">动画播放延时</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/specialBorder">特殊边框</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/pieChart">简易饼图（锥形渐变）</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/redPacket">红包动画</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/musicPlay">音乐播放</router-link></div>
          <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/musicPlay1">音乐播放(触屏即播)</router-link></div>
      </div>
    </div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">AE(lottie)动画</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/lottie">犸良动效</router-link></div>
      </div>
    </div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">图片帧动画</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/walk">人物行走动画</router-link></div>
      </div>
    </div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">svg动画</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/moveText">移动的马</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/moveSvg">不规则运动(css+svg路径)</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/stickPop">粘滞融合</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/svgStroke">写字动画</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/svgProgress">环形进度条效果</router-link></div>
      </div>
    </div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">canvas动画</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/linearLine">线条动画</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/randomRect">随机统计图</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/circleAni">画圆</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/arcStroke">圆弧</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/bezierLine">贝塞尔曲线</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/drawText">绘制文本（打字效果）</router-link></div>
      </div>
    </div>
    <div class="fs50r b mt30 mb20 tc">通用组件</div>
    <div class="f xs ac rw">
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/icon">icon</router-link></div>
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/zInput">自定义输入框</router-link></div>
      <!-- <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/upImg">图片上传</router-link></div> -->
    </div>
    <div class="fs50r b mt30 mb20 tc">性能瓶颈突破</div>
    <div class="f xs ac rw">
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/tree">时间分片(1万个结点)</router-link></div>
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/virtualList">虚拟列表(渲染十万条数据)</router-link></div>
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/pageLoad">触底加载更多</router-link></div>
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/lazyLoadImg">图片懒加载</router-link></div>
    </div>
    <div class="fs50r b mt30 mb20 tc">BUG解决</div>
    <div class="f xs ac rw">
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/scrollThrough">滚动穿透问题</router-link></div>
    </div>
    <div class="fs50r b mt30 mb20 tc">特殊效果</div>
    <div class="f xs ac rw mb30">
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/specialFont">自定义字体</router-link></div>
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/linearText">渐变、描边、阴影文字</router-link></div>
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/autoBreak">自适应换行、溢出隐藏、竖排文本</router-link></div>
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/filter">滤镜、毛玻璃效果</router-link></div>
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/clipImg">图形裁剪</router-link></div>
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/reflectImg">倒影效果</router-link></div>
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/scrollStrong">滚动增强</router-link></div>
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/svgStudy">svg学习</router-link></div>
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/irregularAvatar">不规则头像</router-link></div>
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/transparentBorder">半透明边框、内圆角边框</router-link></div>
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/circleText">环形文字</router-link></div>
    </div>
    <div class="fs50r b mt30 mb20 tc">数据可视化</div>
    <div class="f xs ac rw">
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/barChart">柱状图</router-link></div>
    </div>
    <div class="fs50r b mt30 mb20 tc">Vue进阶</div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">vue指令</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/vPermission">v-permission----权限控制</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/vCopy">v-copy----复制文本</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/vDebounce">v-debounce----防抖</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/vThrottie">v-throttie----节流</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/vWaterMarker">v-waterMarker----水印</router-link></div>
        <!-- <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/vDraggable">v-draggable</router-link></div> -->
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/vLongpress">v-longpress----长按</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/vLazyImg">v-lazyImg----图片懒加载</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/vDefaultImg">v-defaultImg----默认图片</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/vReachBottom">v-reachBottom----触底加载</router-link></div>
      </div>
    </div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">vue组件传值</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/propsEmit">props、$emit</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/parentChild">$parent、$children</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/eventBus">eventBus</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/attrsListeners">$attrs、$listeners</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/provideInject">$provide、$inject</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/refs">refs</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/useVuex">vuex</router-link></div>
      </div>
    </div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">vue高级组件</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/myVmodel">自定义组件v-model</router-link></div>
      </div>
    </div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">vue逻辑复用</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/mixIn">混入:mixIn</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/vSlot">高阶组件:vSlot</router-link></div>
      </div>
    </div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">vue路由</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/params1/123">params动态路由传参</router-link></div>
        <div class="db w20 pb30 min190px g42b983 tdu poi" @click="$router.push({ name: 'params2', params: {id: 123}})">params路由传参</div>
        <div class="db w20 pb30 min190px g42b983 tdu poi" @click="$router.push({ name: 'query1', query: {id: 123}})">query路由传参</div>
      </div>
    </div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">vue动画</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/vueAni">使用过渡类名</router-link></div>
      </div>
    </div>
    <div class="fs50r b mt30 mb20 tc">业务开发</div>
    <div class="f xs ac rw">
      <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/watchScroll">监听滚动</router-link></div>
    </div>
    <div class="fs50r b mt30 mb20 tc">H5开发</div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">H5原生功能</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/phone">打电话</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/message">发短信</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/form">表单</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/cusForm">自定义表单</router-link></div>
      </div>
    </div>
    <div class="fs50r b mt30 mb20 tc">PC开发</div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">PC组件封装</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/uploadImg">上传图片</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/Zmap">腾讯经纬度选择</router-link></div>
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/pickArea">选择区域</router-link></div>
      </div>
    </div>
    <div class="f">
      <div class="pr20r b" style="width:2.2rem;">PC插件使用</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><router-link class="g42b983" to="/sliderVerify_pc">极验验证</router-link></div>
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
.min190px{min-width:190px;}
/**PC端和移动端做适配 */
@media screen and (min-width: 320px) {.indexFontSize{font-size: 0.3rem !important;}}
/* @media screen and (min-width: 640px) {.indexFontSize{font-size: 0.28rem !important;}}  */
</style>