// 开始拖拽
export const dragstart = function (e, index) {
  this.curIndex = index
}
// 进入目标区域
export const dragenter = function (e, index) {
  e.preventDefault();
  if(this.curIndex != index) {
    const source = this.list[this.curIndex]
    this.list.splice(this.curIndex, 1)
    this.list.splice(index, 0, source)
    this.curIndex = index
  }
}