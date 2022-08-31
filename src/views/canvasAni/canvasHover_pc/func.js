import { random } from "@/common.js"
// 这个方法用来储存每个圆圈对象
export const Circle = function(x, y, radius, color) {
  this.x = x
  this.y = y
  this.radius = radius
  this.color = color
  this.isSelected = false
}
//“添加圆圈”按钮点击
export const addRandomCircle = function() {
  // 为圆圈计算一个随机大小和位置
  var radius = random(10, 60, 'int')
  var x = random(0, this.canvas.width, 'int')
  var y = random(0, this.canvas.height, 'int')
  var colors = ['green', 'blue', 'red', 'yellow', 'magenta', 'orange', 'brown', 'purple', 'pink'] // 为圆圈计算一个随机颜色
  console.log(random(0, 8, 'int'))
  var color = colors[random(0, 8, 'int')]
  var circle = new Circle(x, y, radius, color) // 创建一个新圆圈
  this.circles.push(circle) // 把它保存在数组中
  this.drawCircles() // 重新绘制画布
}
//“清空画布”按钮点击
export const clearCanvas = function() {
  // 去除所有圆圈
  this.circles = []
  // 重新绘制画布.
  this.drawCircles()
}
//绘制圆圈
export const drawCircles = function() {
  // 清除画布，准备绘制
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  // 遍历所有圆圈
  for (var i = 0; i < this.circles.length; i++) {
    var circle = this.circles[i]
    // 绘制圆圈
    this.context.globalAlpha = 0.85
    this.context.beginPath()
    this.context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
    this.context.fillStyle = circle.color
    this.context.strokeStyle = 'black'

    if (circle.isSelected) {
      this.context.lineWidth = 5
    } else {
      this.context.lineWidth = 1
    }
    this.context.fill()
    this.context.stroke()
  }
}
//绘制tooltip提示文字
export const drawToolTip = function(txtLoc, x, y) {
  this.context.save()
  var padding = 3
  var font = '16px arial'
  this.context.font = font
  this.context.textBaseline = 'bottom'
  this.context.fillStyle = 'yellow'
  //绘制ToolTip背景
  var width = this.context.measureText(txtLoc).width
  var height = parseInt(font, 10)
  this.context.fillRect(x, y - height, width + padding * 2, height + padding * 2)
  //绘制ToolTip文字
  this.context.fillStyle = '#000'
  this.context.fillText(txtLoc, x + padding, y + padding)
  this.context.restore()
}
//鼠标移动事件
export const onMouseMove = function (e) {
  console.log('123123===')
  // 清除之前选择的圆圈
  if (this.previousSelectedCircle != null) {
    this.previousSelectedCircle.isSelected = false
    this.previousSelectedCircle = null
  }
  // 取得画布上被单击的点
  var clickX = e.pageX - this.canvas.offsetLeft
  var clickY = e.pageY - this.canvas.offsetTop
  // 查找被单击的圆圈
  for (var i = this.circles.length - 1; i >= 0; i--) {
    var circle = this.circles[i]
    //使用勾股定理计算这个点与圆心之间的距离
    var distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2))
    // 判断这个点是否在圆圈中
    if (distanceFromCenter <= circle.radius) {
      this.previousSelectedCircle = circle
      //选择新圆圈
      circle.isSelected = true
      //停止搜索
      break
    }
  }
  //更新显示，重绘圆圈
  this.drawCircles()
  //如果当前鼠标位置有圆圈，还要显示tip
  if (this.previousSelectedCircle != null) {
    this.drawToolTip('颜色：' + this.previousSelectedCircle.color, clickX, clickY)
  }
}