import { range, getViewPos } from "@/common.js" 
// 鼠标按下
export const mousedown = function (e) {
  this.lastX = e.pageX
  document.onmousemove = (e) => {
    const curX = e.pageX
    if(this.lastX != 0) {
      const targetDragX = this.dragX + curX - this.lastX
      this.dragX = range(targetDragX, -1 * this.left * this.dragBox.width, this.dragBox.width - this.left * this.dragBox.width - 20)
    }
    this.lastX = curX
    return false;
  };
  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
    this.$emit('finish', this.dragX)
    this.lastX = 0
  }
}
// 计算默认的left值
export const calcDefaultLeft = function () {
  this.$nextTick(() => {
    this.dragBox = getViewPos(this.$refs['drag-box'])
  })  
}