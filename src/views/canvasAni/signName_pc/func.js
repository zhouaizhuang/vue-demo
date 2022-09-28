import { downloadFile } from "../../../common.js"
// 初始化绘制
export const initDraw = function () {
  this.cvs = this.$refs.cvs
  this.ctx = this.cvs.getContext('2d')
  this.cvs.addEventListener('mousedown', (e) => {
    this.isDownin = true
    this.lastX = e.pageX
    this.lastY = e.pageY
    let cacheItem = this.ctx.getImageData(0, 0, this.cvs.width, this.cvs.height);
    this.cacheData.push(cacheItem)
    this.ctx.moveTo(this.lastX, this.lastY)
  })
  this.cvs.addEventListener('mousemove', (e) => {
    if(!this.isDownin) return
    this.drawLine(e.pageX, e.pageY)
  })
  this.cvs.addEventListener('mouseup', (e) => {
    this.isDownin = false
  })
}
// 画笔
export const drawLine = function (x, y){
	this.ctx.beginPath()
  this.ctx.lineWidth = 3
  this.ctx.strokeStyle = '#fff';
  this.ctx.lineCap = 'round'
  this.ctx.lineJoin = "round"
  this.ctx.moveTo(this.lastX, this.lastY)
  this.ctx.lineTo(x, y)
  this.ctx.stroke()
  this.lastX = x
  this.lastY = y
}
// 清空画布
export const clear = function () {
  this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height)
}
// 回退画布
export const back = function () {
  if (this.cacheData.length === 0) return;
  this.ctx.putImageData(this.cacheData.pop(), 0, 0)
}
// 保存签名
export const save = function () {
  this.cvs.toBlob((blob) => downloadFile('签名.png', blob))
}