import { searchCover, range } from "@/common.js"
// 向左, 或者向右滑动后，点击当前条目归位
export const clickItem = function () {
  const list = searchCover(this.list, {id: this.item.id}, v => {
    if(v.slideType) { v.slideType = 0 }
    return v
  })
  this.$emit('setList', list)
}
//滑动开始
export const touchStart = function(e) {
  // 记录初始位置
  const list = searchCover(this.list, {id: this.item.id}, v => ({...v, startX: e.touches[0].clientX, startY: e.touches[0].clientY}))
  this.$emit('setList', list)
}
//滑动结束
export const touchEnd = function (e) {
  const { clientX: endX, clientY: endY } = e.changedTouches[0]
  const list = searchCover(this.list, {id: this.item.id}, v => {
    if(Math.abs(endY - v.startY) < 40) { // 上下滚动距离小于30
      let slideType = v.slideType || 0
      if(endX - v.startX > 30) { // 向右滑动距离超过30px， 判定为右滑
        slideType++
      } else if(endX - v.startX < -30){ // 向左滑动距离超过30px， 判定为左滑
        slideType--
      }
      const min = this.type.includes('left') ? -1 : 0
      const max = this.type.includes('right') ? 1 : 0
      v.slideType = range(slideType, min, max)
    }
    return v
  })
  this.$emit('setList', list)
}
// 删除
export const del = function () {
  this.$emit('leftFn', this.item)
}