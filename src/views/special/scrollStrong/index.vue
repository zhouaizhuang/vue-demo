
<template>
  <div style="padding-bottom:500px;" class="pt50">
    <div class="fs22 f xc mb20">1、平滑滚动</div>
    <div class="smooth ovya mb30 auto" style="height:200px;width:350px;">
      <div class="fs50 auto f ac xc bg1890ff rel" style="width:100%;height:200px;"><input id="one" class="clip0 t0 h100" readonly />1</div>
      <div class="fs50 auto f ac xc bgff5650 rel" style="width:100%;height:200px;"><input id="two" class="clip0 t0 h100" readonly />2</div>
      <div class="fs50 auto f ac xc bgc7a35d rel" style="width:100%;height:200px;"><input id="three" class="clip0 t0 h100" readonly />3</div>
      <div class="fs50 auto f ac xc bg1890ff rel" style="width:100%;height:200px;"><input id="four" class="clip0 t0 h100" readonly />4</div>
    </div>
    <div class="f xc pl30 pr30">
      <label for="one" class="bg1890ff gf f ac xc rds10 mr20" style="width:80px;height:50px;">1</label>
      <label for="two" class="bgff5650 gf f ac xc rds10 mr20" style="width:80px;height:50px;">2</label>
      <label for="three" class="bgc7a35d gf f ac xc rds10 mr20" style="width:80px;height:50px;">3</label>
      <label for="four" class="bg1890ff gf f ac xc rds10" style="width:80px;height:50px;">4</label>
    </div>

    <div class="fs22 tc mb20 mt100 wrap">2、滚动到底部，不会再滚动外边容器<b>（很重要）</b></div>
    <div class="ovsb-contain ovya mb30 auto" style="height:200px;width:350px;">
      <div class="fs50 auto f ac xc bg1890ff" style="width:100%;height:200px;">1</div>
      <div class="fs50 auto f ac xc bgff5650" style="width:100%;height:200px;">2</div>
      <div class="fs50 auto f ac xc bgc7a35d" style="width:100%;height:200px;">3</div>
      <div class="fs50 auto f ac xc bg1890ff" style="width:100%;height:200px;">4</div>
    </div>

    <div class="fs22 tc mb20 mt100">3、容器停止滚动的时候，自动平滑定位到指定元素指定位置<b>（很重要）</b></div>
    <div class="ovxa mb30 sstxm ovyh auto" style="white-space:nowrap;height:200px;width:350px;">
      <img class="w60 h100 ssac" src="https://yiluyouni.hlxapps.com/assets/images/2021-10-27/6178b0f188cab.jpg" alt="">
      <img class="w60 h100 ssac" src="https://yiluyouni.hlxapps.com/assets/images/2021-10-27/6178b0f18c6df.jpg" alt="">
      <img class="w60 h100 ssac" src="https://yiluyouni.hlxapps.com/assets/images/2021-10-27/6178b0f18c6df.jpg" alt="">
      <img class="w60 h100 ssac" src="https://yiluyouni.hlxapps.com/assets/images/2021-10-27/6178b0f18c6df.jpg" alt="">
    </div>
    <div class="bdc bg1890ff f ac xc fs22 gf" style="width:300px;height:200px;resize:both;overflow:hidden;">右下角可以拉伸</div>
    <div @click="goTop" class="fixed gf fs20 pl10 pt10 pr10 pb10 bg2 rds5" style="right:15px;bottom:50px;">回到顶部</div>
  </div>
</template>
<script>
export default {
  name: 'scrollStrong',
  data(){
    return {
    }
  },
  methods:{
    goTop(){
      document.body.scrollIntoView({ behavior: "smooth" })
    }
  },
  created(){
   
  }
}
</script>
<style scoped>
.smooth{
  scroll-behavior: smooth;
}
</style>