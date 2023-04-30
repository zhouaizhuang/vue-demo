import { randomColor, shuffle, deepCopy  } from "@/common.js"
// 添加条目
export const addItem = function () {
  this.arrList = [{id: this.arrList.length + 1, top:0,left: 0, bgColor: randomColor()}, ...this.arrList]
}
// 打乱顺序
export const randomItem = function () {
  this.arrList = shuffle(deepCopy(this.arrList))
}
// 重置
export const reset = function () {
  this.arrList = this.arrList.filter(v => v.id < 10).sort((a, b) => a.id - b.id)
}