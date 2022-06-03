<template>
   <div class="mh100vh pt30r">
    <canvas width="400" height="500" ref="canvasRef1">您的浏览器版本过低，请升级浏览器或者使用chrome打开</canvas>
  </div>
</template>
<script>
export default {
  name: 'strokeText',
  components:{},
  data(){
    return {
      
    }
  },
  methods:{
    drawText() {
      const ref = this.$refs.canvasRef1
      const ctx = ref.getContext('2d')
      ctx.beginPath()
      // 动画版本
      'Hello World'.split('').forEach((item, index) => {
        setTimeout(() => {  
          ctx.font = "48px serif";
          ctx.strokeText(item, 10 + 25 * index, 50);
        }, 100 * index)
      })
      // 不带动画版本
      ctx.font = "48px serif";
      ctx.strokeText("Hello World", 10, 150);
      ctx.closePath()
    },
    // 画直线
    drawLine(x1, y1, x2, y2, color){
      const ref = this.$refs.canvasRef1
      const ctx = ref.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.strokeStyle = color || '#000'
      ctx.stroke()
      ctx.closePath()
    },
    // 绘制田字格文字
    drawText1(){
      const ref = this.$refs.canvasRef1
      const ctx = ref.getContext('2d')
      this.drawLine(0, 400, 200, 400)
      this.drawLine(100, 300, 100, 500)
      ctx.rect(0, 300, 200, 200)
      ctx.stroke()
      // 画虚线
      for(var i = 0; i < 200; i+=10) {
        this.drawLine(i+0, i+300+0, i+5, i+300+5)
      }
      for(var i = 0; i < 200; i+=10) {
        this.drawLine(i+0, 500-i, i+5, 500-5-i)
      }
      this.drawWord('米', 100, 480)
    },
    drawWord(text, x0, y0){
      const ref = this.$refs.canvasRef1
      const ctx = ref.getContext('2d')
      ctx.beginPath()
      ctx.font = '200px 楷体'
      ctx.textAlign = 'center'
      ctx.textBaseLine = 'middle'
      ctx.fillText(text, x0, y0)
      ctx.closePath()
    }
  },
  created(){
    
  },
  mounted(){
    this.drawText()
    this.drawText1()
  },
}
</script>
<style scoped>
</style>