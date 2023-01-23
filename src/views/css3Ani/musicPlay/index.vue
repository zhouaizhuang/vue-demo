<template>
  <div class="mh100vh rel">
    <div @click="onOff" :class="['abs zx100', isOn ? 'isOn' : 'isOff']" style="width:30px;height:30px;top:15px;left:15px;background-size: 100% 100%;"></div>
    <audio ref="audio" src="https://hangjiayun.oss-cn-shanghai.aliyuncs.com/CRM/video/bg.mp3" loop="loop" autoplay="autoplay"></audio>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isOn: true,
    }
  },
  components:{},
  created(){

  },
  mounted(){
    // 对于微信浏览器这样内置的浏览器还需要监听其应用的SDK加载完成才能触发上述代码，以保障WebView正常渲染
    document.addEventListener("wexinJSBridgeReady", () => {
      let audioRef = this.$refs.audio  // 获取DOM！采用原生也可。html上定义一个id="audio" ----> js直接获取：document.querySelector('#audio');
      audioRef.play()
    })
    // 苹果系统明确规定用户交互操作开始后才能播放媒体。未得到用户的响应会被Safari自动拦截
    document.body.addEventListener("touchStart", () => {
      let audioRef = this.$refs.audio
      audioRef.play()
    }, {once: true})
  },
  methods: {
    onOff(){
      let audioRef = this.$refs.audio
      this.isOn = !this.isOn
      this.isOn ? audioRef.play() : audioRef.pause()
    },
  }
}
</script>
<style scoped>
.isOn{
  animation: rotating 4s infinite linear;
  background: url("./y.png") 0 0 no-repeat;
}
.isOff{
  background: url("./ny.png") 0 0 no-repeat;
}
@keyframes rotating{
  0%{ transform: rotate(0deg); }
  100%{ transform: rotate(360deg); }
}
</style>

