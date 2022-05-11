<template>
  <div class="mh100vh pt30r">
    <canvas width="400px" height="500px" ref="canvasRef1">您的浏览器版本过低，请升级浏览器或者使用chrome打开</canvas>
  </div>
</template>
<script>
import { random, randomColor } from "../../../common.js"
export default {
  name: 'randomRect',
  components:{},
  data(){
    return {
      
    }
  },
  methods:{
    startLine(){
      const ref = this.$refs.canvasRef1
      const ctx = ref.getContext('2d')
      // 画坐标系
      ctx.beginPath()
      ctx.moveTo(20, 100)
      ctx.lineTo(20, 400)
      ctx.lineTo(380, 400)
      ctx.stroke()
      ctx.closePath()
      // 画矩形
      const arr = [40, 80, 120, 160, 200, 240, 280, 320]
      setInterval(() => {
        ctx.clearRect(40,100, 780, 300) // 清除画布
        arr.forEach(item => { // 绘制矩形
          const randomHeight = random(0, 220)
          ctx.fillStyle = randomColor()
          ctx.fillRect(item, 400 - randomHeight, 20, randomHeight)
        })
      }, 100)
      
    }
  },
  created(){
    
  },
  mounted(){
    this.startLine()
  },
}
</script>
<style scoped>
</style>