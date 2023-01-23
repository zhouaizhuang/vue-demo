<template>
  <div>
    <div class="mh100vh pt15 bgf5 pl15 pr15">
      <div class="bgf rds10r auto" style="height:150px;">
        <div class="f ac mb5">
          <div class="rds5r mr10 bg0db39e" style="width:3px;height:15px;"></div>
          <div class="fs16 g3">身高<span style="color:#9d9d9d;">(cm)</span></div>
        </div>
        <canvas id="canvas" width="370" height="100" ref="canvasRef1">您的浏览器版本过低，请升级浏览器或者使用chrome打开</canvas>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components:{},
  data(){
    return {

    }
  },
  methods:{
    drawRule(){
      const ref = this.$refs.canvasRef1
      const ctx = ref.getContext('2d')
      // 绘制圆角矩形
      ctx.beginPath()
      ctx.strokeStyle = "#0DB39E"
      const [x0, y0, x1, y1, r] = [20, 30, 350, 30,10]
      ctx.moveTo(x0, y0) // 起始位置
      ctx.lineTo(x1, y1)
      ctx.arc(x1, y1 + r, r, -1/2 * Math.PI,0) // 右上角
      ctx.lineTo(x1 + 10, y0 + 40)
      ctx.arc(x1, y0 + 40, r,0, 1/2 * Math.PI) // 右下角
      ctx.lineTo(x0, y0 + 40 + r)
      ctx.arc(x0, y0 + 40, r, 1/2 * Math.PI, Math.PI) // 左下角
      ctx.lineTo(x0 - r, y0 + r)
      ctx.arc(x0, y0 + r, r,  Math.PI, 3/2*Math.PI) // 左上角
      ctx.fillStyle = '#0db39e'
      ctx.fill()
      ctx.stroke()
      const personHeight = 176  // 身高数据
      const baseNum = Math.floor((personHeight / 10)) * 10 - 10
      // console.log(baseNum)
      const rulesArr = new Array(29).fill(1).map((item, index) => {
        const text = index + baseNum
        return {
          text,
          x0: 20 + 12 * index,
          y0,
          x1: 20 + 12 * index,
          y1: text % 10 == 0 ? y0 + 25 :
          text % 5 == 0 ? y0 + 15 : y0 + 10
        }
      })
      rulesArr.forEach(v => {
        const {x0, y0, x1, y1, text} = v
        // 找到对应的位置，开始绘制卡标
        if(text == personHeight) {
          ctx.beginPath()
          ctx.strokeStyle = "#fc7b2a"
          ctx.fillStyle = '#fc7b2a'
          ctx.moveTo(x0, y0)
          ctx.lineTo(x0 - 5, y0 - 8)
          ctx.lineTo(x0 + 5, y0 - 8)
          ctx.moveTo(x0, y0)
          ctx.fill()
          ctx.lineTo(x1, y0 + 20)
          ctx.stroke()
          ctx.closePath()
          this.drawText(ctx, personHeight, x0 - 16, y0 -10, '#fc7b2a', '18px "微软雅黑"')
        } else {
          this.drawLine(ctx, x0, y0, x1, y1)
        }
        if(text % 10 == 0) {
          this.drawText(ctx, text, x1-10, y1 + 18, '#fff', '12px "微软雅黑"')
        }
      })
    },
    drawText(ctx, text, x0, y0, color, font = '16px "微软雅黑"'){
      ctx.fillStyle = color
      ctx.font = font
      ctx.textBaseline = 'bottom'
      ctx.textAlign = 'left'
      ctx.fillText(text, x0, y0);
    },
    drawLine(ctx, x0, y0, x1, y1, color='#fff'){
      ctx.beginPath()
      ctx.lineWidth = 1
      ctx.strokeStyle = color; // 设置圆环的颜色
      ctx.moveTo(x0, y0)
      ctx.lineTo(x1, y1)
      ctx.stroke()
      ctx.closePath()
    },
  },
  created(){

  },
  mounted(){
    this.drawRule()
  },
}
</script>
<style scoped>
#canvas{
  /* background-color: #fff; */
  border: 1px solid #ccc;
}
.bg0db39e{
  background:#0db39e;
}
</style>