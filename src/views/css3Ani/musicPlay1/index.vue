<template>
  <div class="mh100vh rel" @click="handleClick">
    <div @click.stop="onOff" :class="['abs zx100', isOn ? 'isOn' : 'isOff']" style="width:.6rem;height:.6rem;top:.4rem;left:.4rem;background-size: 100% 100%;"></div>
    <audio ref="audio" src="https://hangjiayun.oss-cn-shanghai.aliyuncs.com/CRM/video/bg.mp3" autoplay loop />
  </div>
</template>
<script>
import { isWeChat } from "../../../common.js"
export default {
  data(){
    return {
      isOn: true,
      isMuted:true,
      timeId: null,
    }
  },
  components:{},
  methods: {
    // 触屏即播
    handleClick(){
      if(this.isMuted) {
        this.isMuted = false
        let audioRef = this.$refs.audio
        this.timeId = setInterval(() =>{
          if(audioRef) {
            audioRef.play()
            clearInterval(this.timeId)
          }
        }, 200)
      }
    },
    // 开关音乐播放
    onOff(){
      let audioRef = this.$refs.audio
      if(this.isMuted) {
        this.isMuted = false
      } else {
        this.isOn = !this.isOn
        this.isOn ? audioRef.play() : audioRef.pause()
      }
    },
    // 解决ios无法自动播放问题
    audioPlayer(id){
      let audioRef = this.$refs.audio
      if (isWeChat) {
        document.addEventListener('WeixinJSBridgeReady', () => {
          audio.play()
        }, false)
        // 添加 getNetworkType 的判断原因, 请看问题分析2
        // 解决ios自动播放问题
        if(typeof window.WeixinJSBridge == "object" && typeof window.WeixinJSBridge.invoke == "function") {
          window.WeixinJSBridge.invoke('getNetworkType', {}, () => {
            audioRef.play()
          })
        }
      }
    }
  },
  created(){
  },
  mounted(){
    this.audioPlayer()
  },
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

