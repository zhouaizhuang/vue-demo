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
  const list = searchCover(this.list, {id: this.item.id}, v => ({...v, startX: e.touches[0].clientX}))
  this.$emit('setList', list)
}
//滑动结束
export const touchEnd = function (e) {
  const endX = e.changedTouches[0].clientX
  const list = searchCover(this.list, {id: this.item.id}, v=> {
    let slideType = v.slideType || 0
    if(endX - v.startX > 30) {
      slideType++
    } else if(endX - v.startX < -30){
      slideType--
    }
    const min = this.type.includes('left') ? -1 : 0
    const max = this.type.includes('right') ? 1 : 0
    v.slideType = range(slideType, min, max)
    return v
  })
  this.$emit('setList', list)
}