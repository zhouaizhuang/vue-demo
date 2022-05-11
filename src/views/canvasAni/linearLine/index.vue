<template>
  <div class="mh100vh pt30r">
    <!--直线-->
    <div @click="openLine" class="auto fs30r gf w50 f ac xc bgc7a35d rds30 pt20r pb20r">开启线条动画</div>
    <div style="width:400px;height:100px;" class="rel bgf">
      <canvas width="400px" height="100px" ref="canvasRef1">您的浏览器版本过低，请升级浏览器或者使用chrome打开</canvas>
      <div class="abs t0 l0" style="width:200px;height:80px;">配合定位</div>
    </div>
    <!--连实线-->
    <div @click="pathLine" class="auto fs30r gf w50 f ac xc bgc7a35d rds30 pt20r pb20r">开启连实线</div>
    <div class="auto fs32r  w50 f ac xc rds30 pt20r pb20r b"></div>
    <canvas width="400px" height="100px" ref="canvasRef2" class="bgf">您的浏览器版本过低，请升级浏览器或者使用chrome打开</canvas>
    <!--虚线-->
    <div @click="drawDashLine" class="auto fs30r gf w50 f ac xc bgc7a35d rds30 pt20r pb20r">开启虚线动画</div>
    <canvas width="400px" height="100px" ref="canvasRef3" class="bgf">您的浏览器笨笨过低，请升级浏览器或者使用chrome打开</canvas>
  </div>
</template>
<script>
import { isArray, round } from "../../../common.js"
export default {
  name: 'linearLine',
  data(){
    return {
      timeId1: null,
      timeId2: null,
      timeId3: null,
    }
  },
  methods: {
    // 封装一个画线函数
    /**
     * @ctx canvas对象
     * @param {Array} begin 开始位置
     * @param {Array | Array<Array>} end 结束位置
     * @param {String} color 开始位置
     * @param {String} width 线条宽度
     * @举例 this.drawLine(ctx, [100, 20], [200 + 100, 20], 'orange', 4)
     */
    drawLine(ctx, begin, end, color, width = 2){
      ctx.beginPath()
      const [x0, y0] = begin
      ctx.moveTo(x0, y0) // 画笔起始位置
      ctx.lineWidth = width // 线宽
      ctx.lineCap = 'round' // 两端呈现方式： round圆的
      ctx.lineJoin = 'miter' // 相交线的观点方式：round圆的
      ctx.strokeStyle = color // 线条颜色
      if(isArray(end[0])) {
        end.forEach(([x1, y1]) => ctx.lineTo(x1, y1))
      } else {
        ctx.lineTo(...end)
      }
      ctx.stroke()
      ctx.closePath()
    },
    openLine() {
      const ref = this.$refs.canvasRef1
      const ctx = ref.getContext('2d')
      // 无动画版本
      this.drawLine(ctx, [100, 20], [200 + 100, 20], 'orange', 4)
      // 动画版本
      let [x0, y0] = [100, 50]
      this.timeId1 = setInterval(() => {
        if(x0 >= 300) { return clearInterval(this.timeId1) }
        this.drawLine(ctx, [x0, y0], [x0 + 5, y0 + (100 - 100) / (100 - 50)], 'orange', 4)
        x0 += 5
      }, 20)
    },
    // 连实线动画版本
    continueLine(){
      const ref = this.$refs.canvasRef2
      const ctx = ref.getContext('2d')
      this.drawLine(ctx, [50, 20], [[100, 50], [100, 80], [50, 80], [50, 50], [30, 80]], 'orange', 4)
    },
    // 连实线
    pathLine(){
      const ref = this.$refs.canvasRef2
      const ctx = ref.getContext('2d')
      let [x0, y0] = [150, 20] // 初始位置
      let arr = [[200, 50], [200, 80], [150, 80], [150, 50], [130, 80]] // 经过的点的位置
      let [x1, y1] = arr.shift()
      setInterval(() => {
        if(y0 == y1) { // 画横线
          this.drawLine(ctx, [x0, y0], [x1-x0 > 0 ? x0 + 1 : x0 - 1, y0], 'orange', 4)
          x0 = x1 - x0 > 0 ? x0 + 1 : x0 - 1
          if(x0 == x1) { [x1, y1] = arr.shift() || [] }
        } else if(x0 == x1){ // 画竖线
          this.drawLine(ctx, [x0, y0], [x0, y1-y0 > 0 ? y0 + 1 : y0 - 1], 'orange', 4)
          y0 = y1 - y0 > 0 ? y0 + 1 : y0 - 1
          if(y0 == y1) { [x1, y1] = arr.shift() || [] }
        } else { // 画斜线
          this.drawLine(ctx, [x0, y0], [x1-x0 > 0 ? x0 + 1 : x0 - 1, y1 - y0 > 0 ? y0 + Math.abs((y1 - y0) / (x1 - x0)) : y0 - Math.abs((y1 - y0) / (x1 - x0))], 'orange', 4)
          x0 = x1 - x0 > 0 ? x0 + 1 : x0 - 1
          y0 += y1 - y0 > 0 ? Math.abs((y1 - y0) / (x1 - x0)) : Math.abs((y1 - y0) / (x1 - x0)) * -1
          if(x0 == x1) { [x1, y1] = arr.shift() || [] }
        }
        if(!x1) { return clearInterval(this.timeId3) }
        // console.log(x0, y0)
      }, 15)
    },
    // 画虚线
    drawDashLine(){
      const ref = this.$refs.canvasRef3
      const ctx = ref.getContext('2d')
      // 无动画版本
      for(let i = 0; i < 30; i = i+3) {
        this.drawLine(ctx, [50 + 8 * i, 30], [60 + 8 * i, 30], 'orange', 4)
      }
      this.drawLine(ctx, [280, 30], [270, 20], 'orange', 4)
      this.drawLine(ctx, [280, 30], [270, 40], 'orange', 4)
      // 动画版本
      let j = 0
      this.timeId2 = setInterval(() => {
        if(j >= 29) {
          this.drawLine(ctx, [280, 50], [270, 40], 'orange', 4)
          this.drawLine(ctx, [280, 50], [270, 60], 'orange', 4)
          return clearInterval(this.timeId2)
        }
        this.drawLine(ctx, [50 + 8 * j, 50], [60 + 8 * j, 50], 'orange', 4)
        j += 3
      }, 100)
    }
  },
  created(){
    
  },
  mounted(){
    this.continueLine()
  }
}
</script>
<style>

</style>