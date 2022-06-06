<!--
备注:    1、安装 npm install --save vue-lottie
        2、注意lottie.json文件可以在犸良动效平台找，或者在上面找元素制作。  再或者让UI设计通过AE制作并导出这个json文件
        参考链接： https://www.jianshu.com/p/205bf97a71e5?utm_source=oschina-app
-->
<template>
  <div class="h100vh">
    <div class="mb30">参考链接：<a href="https://juejin.cn/post/7101629986427109383">犸良动画参考链接1</a></div>
    <div class="mb30">参考链接：<a href="https://www.jianshu.com/p/205bf97a71e5?utm_source=oschina-app">犸良动画参考链接2</a></div>
    <div class="mb30">安装方式： npm install --save vue-lottie</div>
    <div class="mb50">注意：lottie.json文件可以在犸良动效平台找，或者在上面找元素制作。  再或者让UI设计通过AE制作并导出这个json文件</div>
    <div class="mb50">注意：lottie.json文件资源网站2：https://lottiefiles.com/</div>
    
    <div class="f rw xc ac">
      <lottie :options="defaultOptions" style="width:200px;height:200px;" v-on:animCreated="handleAnimation" />
    </div>
  </div>
</template>
<script>
import * as animationData from './lottie.json';
import lottie from 'vue-lottie';
export default {
  name: 'breath',
  components: {
    lottie
  },
  data(){
    return {
      defaultOptions: { animationData: animationData.default },
    }
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
      console.log(anim); //这里可以看到 lottie 对象的全部属性
    },
  },
  created(){
  
  },
}
</script>
<style>
</style>