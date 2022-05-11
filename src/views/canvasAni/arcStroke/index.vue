<template>
  <div class="mh100vh pt30r">
    <canvas width="400" height="500" ref="canvasRef1">您的浏览器版本过低，请升级浏览器或者使用chrome打开</canvas>
  </div>
</template>
<script>
export default {
  name: 'argStroke',
  components:{},
  data(){
    return {
      timeId: null,
    }
  },
  methods:{
    argStroke(){
      const ref = this.$refs.canvasRef1
      const ctx = ref.getContext('2d')
      ctx.lineWidth = 2
      // 辅助线1     基准点连接到x1, y1
      ctx.beginPath()
      ctx.moveTo(50, 50) // 基准位置
      ctx.lineTo(50, 200)
      ctx.strokeStyle = 'red'
      ctx.stroke()
      // 辅助线2
      ctx.beginPath()
      ctx.moveTo(50, 200) // x1, y1
      ctx.lineTo(150, 50) // x2, y2
      ctx.strokeStyle = 'blue'
      // 绘制圆弧
      ctx.stroke()
      ctx.beginPath()
      ctx.strokeStyle = 'pink'
      ctx.moveTo(50, 50);
      ctx.arcTo(50, 200, 150, 50,30)
      ctx.stroke()
    },
    argStroke1(){
      const ref = this.$refs.canvasRef1
      const ctx = ref.getContext('2d')
      ctx.lineWidth = 2
      ctx.strokeStyle = 'pink'
      ctx.beginPath()
      ctx.moveTo(200, 100);
      ctx.arcTo(200, 200, 300, 50,30)
      ctx.stroke()
    }
  },
  created(){
    
  },
  mounted(){
    this.argStroke()
    this.argStroke1()
  },
}
</script>
<style scoped>
</style>