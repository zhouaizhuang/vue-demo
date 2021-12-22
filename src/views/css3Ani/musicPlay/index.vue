<template>
  <div class="h100vh rel">
    <div @click="onOff" :class="['abs zx100', isOn ? 'isOn' : 'isOff']" style="width:.6rem;height:.6rem;top:.4rem;left:.4rem;background-size: 100% 100%;"></div>
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
  },
  methods: {
    onOff(){
      let audioRef = this.$refs.audio // 获取DOM！采用原生也可。html上定义一个id="audio" ----> js直接获取：document.querySelector('#audio');
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

