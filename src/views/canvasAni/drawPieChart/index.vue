<template>
  <div class="mh100vh pt30r">
    <canvas width="400" height="500" ref="canvasRef1">您的浏览器版本过低，请升级浏览器或者使用chrome打开</canvas>
  </div>
</template>
<script>
export default {
  name: 'drawPieChart',
  components:{},
  data(){
    return {
      
    }
  },
  methods:{
    drawPieChart(){
      const ref = this.$refs.canvasRef1
      const ctx = ref.getContext('2d')
      const list = [
        {"value":.2,"color":"red", "title":"应届生"},
        {"value":.3, "color":"blue","title":"社会招生"},
        {"value":.4, "color":"green","tiitle":"老学员推荐"},
        {"value":.1, "color":"#ccc","tiitle":"公开课" }
      ]
      const [x0, y0] = [200, 200] // 圆心
      const radius = 100 // 半径
      var tmpAngle = -90 // 起始角度
      list.forEach(item => {
        ctx.beginPath()
        ctx.moveTo(x0, y0)
        var angle = item.value * 360
        ctx.fillStyle = item.color
        var startAngle = tmpAngle * Math.PI / 180
        var endAngle = (tmpAngle + angle) * Math.PI / 180
        ctx.arc(x0, y0, radius, startAngle, endAngle) // 绘制弧形
        ctx.fill() // 填充扇形
        tmpAngle += angle
      })
    }
  },
  created(){
    
  },
  mounted(){
    this.drawPieChart()
  },
}
</script>
<style scoped>
</style>