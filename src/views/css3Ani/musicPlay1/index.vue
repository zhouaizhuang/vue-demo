<template>
  <div class="mh100vh rel" @click="handleClick">
    <div @click.stop="onOff" :class="['abs zx100', isOn ? 'isOn' : 'isOff']" style="width:.6rem;height:.6rem;top:.4rem;left:.4rem;background-size: 100% 100%;"></div>
    <video ref="audio" :muted="isMuted" src="https://hangjiayun.oss-cn-shanghai.aliyuncs.com/CRM/video/bg.mp3" autoplay loop />
  </div>
</template>
<script>
export default {
  data(){
    return {
      isOn: true,
      isMuted:true,
      timeId: null,
    }
  },
  components:{},
  created(){

  },
  mounted(){
  },
  methods: {
    // 触屏即播
    handleClick(){
      if(this.isMuted) {
        this.isMuted = false
        this.timeId = setInterval(() => {
          let audioRef = this.$refs.audio
          audioRef.play()
          clearTimeout(this.timeId)
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

