import { query, randomColor } from "@/common.js"
// 
export const init = function () {
  const cvs = query('#bg')
  this.width = window.innerWidth
  this.height = window.innerHeight
  cvs.width = this.width
  cvs.height = this.height
  this.ctx = cvs.getContext('2d')
  this.columnWidth = 20 // 列宽
  this.columnCount = Math.floor(window.innerWidth / this.columnWidth) // 列数
  this.columnNextIndexes = new Array(this.columnCount).fill(1) // 记录每一列写到了第几行个文字
}
// 绘制
export const draw = function () {
  // 下一次绘制之前, 先刷一层浆
  this.ctx.fillStyle = 'rgba(240, 240, 240, .1)'
  this.ctx.fillRect(0, 0, this.width, this.height)
  const fz = 20
  this.ctx.fillStyle = randomColor()
  this.ctx.font = `${fz}px "Roboto Mono"`
  for(let i = 0; i < this.columnCount; i++) {
    const x = this.columnWidth * i
    const y = this.columnNextIndexes[i] * 20
    this.ctx.fillText(this.randowChar(), x, y)
    if(y > this.height && Math.random() > 0.99) {
      this.columnNextIndexes[i] = 0
    } else {
      this.columnNextIndexes[i]++
    }
  }
}
// 随机文字
export const randowChar = function () {
  const str = 'console.log("hello world")abscalsdjwoq[pkjvjdjj;'
  return str[Math.floor(Math.random() * str.length)]
}