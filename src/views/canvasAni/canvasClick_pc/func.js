 // 这个方法用来储存每个圆圈对象
export const Circle = function (x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.isSelected = false;
}
export const addRandomCircle = function () {
  // 为圆圈计算一个随机大小和位置
  var radius = randomFromTo(10, 60);
  var x = randomFromTo(0, this.canvas.width);
  var y = randomFromTo(0, this.canvas.height);
  // 为圆圈计算一个随机颜色
  var colors = ["green", "blue", "red", "yellow", "magenta", "orange", "brown", "purple", "pink"];
  var color = colors[randomFromTo(0, 8)];
  // 创建一个新圆圈
  var circle = new Circle(x, y, radius, color);
  // 把它保存在数组中
  this.circles.push(circle);
  // 重新绘制画布
  this.drawCircles();
}
export const clearCanvas = function () {
  // 去除所有圆圈
  this.circles = [];
  // 重新绘制画布.
  this.drawCircles();
}
export const drawCircles = function () {
  // 清除画布，准备绘制
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  // 遍历所有圆圈
  for(var i=0; i< this.circles.length; i++) {
    var circle = this.circles[i];
    // 绘制圆圈
    this.context.globalAlpha = 0.85;
    this.context.beginPath();
    this.context.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
    this.context.fillStyle = circle.color;
    this.context.strokeStyle = "black";
    if (circle.isSelected) {
      this.context.lineWidth = 5;
    }
    else {
      this.context.lineWidth = 1;
    }
    this.context.fill();
    this.context.stroke();
  }
}
export const canvasClick = function (e) {
  // 取得画布上被单击的点
  var clickX = e.pageX - this.canvas.offsetLeft;
  var clickY = e.pageY - this.canvas.offsetTop;
  // 查找被单击的圆圈
  for(var i=this.circles.length-1; i>=0; i--) {
    var circle = this.circles[i];
    //使用勾股定理计算这个点与圆心之间的距离
    var distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2))
    // 判断这个点是否在圆圈中
    if (distanceFromCenter <= circle.radius) {
      // 清除之前选择的圆圈
      if (this.previousSelectedCircle != null) this.previousSelectedCircle.isSelected = false;
      this.previousSelectedCircle = circle;
      //选择新圆圈
      circle.isSelected = true;
      //更新显示
      this.drawCircles();
      //停止搜索
      return;
    }
  }
}
//在某个范围内生成随机数
export const randomFromTo = function (from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}