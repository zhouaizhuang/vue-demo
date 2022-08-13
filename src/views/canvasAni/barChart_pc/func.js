import { range } from "../../../common.js"
// 绘制人数统计图表
export const drawCanvasLeft = function () {
  // 获取数据
  const statisticsArr = this.statisticsArr.slice(0, 22)
  // 开始绘制图表
  const canvas = this.$refs.drawByDate
  const cvsCtx = canvas.getContext('2d')
  const width = this.$refs.statistics.clientWidth
  canvas.width = width
  const height = canvas.height
  cvsCtx.beginPath()
  cvsCtx.lineWidth = 1 // 线条宽度
  cvsCtx.strokeStyle = '#2153d7' // 线条颜色
  const leftBottom = 50 // 左侧的预留宽度
  const [x0, y0] = [60, height - leftBottom] // 原点
  const findMax = Math.max(...statisticsArr.map(v => v.value || 0)) // 找出数据中的最大值
  const rate = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]
  const scaleNum = 6 // Y轴刻度线总数
  const curRate = rate.find(v => v * scaleNum > findMax) // 动态计算出每个刻度代表的数值
  const totalHieght = curRate * scaleNum // 得出刻度线的最大值
  const [yScaleWidth, yDistance] = [8, 40] // Y轴的刻度线长度、每个刻度之间的间隔
  const [xScaleWidth, xDistance] = [40 - statisticsArr.length, range((width - 110) / statisticsArr.length, 17, 70)] // X轴每个条目的间距。 17是指，在13.3寸小屏幕下，最小间距能设置的最大值
  // 绘制Y轴
  cvsCtx.moveTo(x0, y0)
  cvsCtx.lineTo(x0, 40)
  cvsCtx.font='14px "微软雅黑"'
  cvsCtx.textAlign = 'center'
  cvsCtx.fillText('人数', x0 , 40 - 10)
  // 绘制X轴
  cvsCtx.moveTo(x0, y0)
  cvsCtx.lineTo(width - 30, y0)
  // 绘制Y轴刻度线
  ;new Array(scaleNum).fill('').forEach((v, i)=> {
    const curMiusDistance = yDistance * (i + 1)
    cvsCtx.moveTo(x0, y0 - curMiusDistance)
    cvsCtx.lineTo(x0 - yScaleWidth, y0 - curMiusDistance)
    cvsCtx.font='12px bold "微软雅黑"'
    cvsCtx.textAlign = 'right'
    cvsCtx.fillText(curRate * (i + 1), x0 - yScaleWidth - 5, y0 - curMiusDistance + 4)
  })
  cvsCtx.stroke()
  // 绘制X轴上的柱状图
  statisticsArr.forEach((v, i) => {
    cvsCtx.fillStyle = '#000'
    cvsCtx.textAlign = 'center'
    cvsCtx.font='12px "微软雅黑"'
    cvsCtx.fillText(v.value, x0 + xDistance * (i + 1) + xScaleWidth / 2, y0 - v.value / totalHieght * yDistance * 6 - 5)
    cvsCtx.fillText(v.text, x0 + xDistance * (i + 1) + xScaleWidth / 2, y0 + 20)
    cvsCtx.fillStyle = '#2153d7'
    // 绘制矩形
    cvsCtx.fillRect(x0 + xDistance * (i + 1), y0 - v.value / totalHieght * yDistance * 6, xScaleWidth, v.value / totalHieght * yDistance * 6)
    // cvsCtx.moveTo(x0 + xDistance * (i + 1), y0)
    // cvsCtx.lineTo(x0 + xDistance * (i + 1), y0 - v.value / totalHieght * yDistance * 6)
    // cvsCtx.lineTo(x0 + xDistance * (i + 1) + xScaleWidth, y0 - v.value / totalHieght * yDistance * 6)
    // cvsCtx.lineTo(x0 + xDistance * (i + 1) + xScaleWidth, y0)
    // cvsCtx.fill()
  })
  cvsCtx.closePath()
}