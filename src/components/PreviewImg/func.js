import { range, downloadFile } from "@/common.js"
// 上一张
export const prev = function () {
  let newIndex = (this.imgArr.findIndex(v => v == this.curImg) - 1) % this.imgArr.length
  if(newIndex < 0) { newIndex += this.imgArr.length}
  this.$emit('setCurImg', this.imgArr[newIndex])
}
// 下一张
export const next = function () {
  let newIndex = (this.imgArr.findIndex(v => v == this.curImg) + 1) % this.imgArr.length
  this.$emit('setCurImg', this.imgArr[newIndex])
}
// 鼠标滚动
export const mousewheel = function (e) {
  const { wheelDelta } = e
  if(wheelDelta >= 120) {
    this.scale = range(this.scale * 1.2 , 0.2, 3)
  } else if (wheelDelta <= -120){
    this.scale = range(this.scale * 0.8 , 0.2, 3)
  }
}
// 放大
export const large = function () {
  this.scale = range(this.scale * 1.2 , 0.2, 3)
}
// 放大
export const small = function () {
  this.scale = range(this.scale * 0.8 , 0.2, 3)
}
// 是否全屏
export const changeFullScreen = function () {
  this.scale = 1
  this.screenType = this.screenType == 0 ? 1 : 0
}
// 下载图片
export const downImg = function () {
  downloadFile(this.curImg, this.curImg)
}