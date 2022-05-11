<template>
  <div class="mh100vh pt30r">
    <canvas width="400" height="500" ref="canvasRef1">您的浏览器版本过低，请升级浏览器或者使用chrome打开</canvas>
  </div>
</template>
<script>
export default {
  name: 'circleAni',
  components:{},
  data(){
    return {
      timeId: null,
    }
  },
  methods:{
    startCircle(){
      const ref = this.$refs.canvasRef1
      const ctx = ref.getContext('2d')
      let start = Math.PI * 2 * 1 / 360
      let end = Math.PI * 2
      ctx.lineWidth = 2
      ctx.strokeStyle = 'red'
      this.timeId = setInterval(() => {
        if(start >= end) {
          clearInterval(this.timeId)
        }
        const temp = Math.PI * 5 /360
        console.log(temp)
        ctx.arc(180, 120, 100, start, start + temp, false)
        ctx.stroke()
        start += temp
      }, 15)
      ctx.arc(180, 380, 100, 0, Math.PI * 2, false)
      ctx.stroke()
      ctx.beginPath();
    },
  },
  created(){
    
  },
  mounted(){
    this.startCircle()
  },
}
</script>
<style scoped>
</style>