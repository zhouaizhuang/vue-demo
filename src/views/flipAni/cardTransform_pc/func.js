import { getViewPos, wait, randomColor, shuffle, deepCopy  } from "@/common.js"
// 1、记录初始位置（First）
export const getPosition = function () {
  this.arrList = this.arrList.map(v => {
    const { left, top } = getViewPos(this.$refs[`card${v.id}`][0])
    return { ...v, top, left}
  })
}
// 转换
export const inverseAni = function () {
  // 3、此时视图尚未更新，赶紧获取结束位置(Last)
  this.$nextTick(() => {
    // 4、拿到结束位置之后，让元素反向通过transform偏移，从而回到最初的位置。未来通过动画的方式进行归位
    this.arrList = this.arrList.map(v => {
      const { left: nowLeft, top: nowTop } = getViewPos(this.$refs[`card${v.id}`][0])
      return { ...v, translateX: v.left - nowLeft, translateY: v.top - nowTop, left: nowLeft, top: nowTop } // Inverse偏移
    })
    // 5、dom回归初始位置之后，开启动画。让其回到默认删除后的位置（Paly执行动画）
    this.$nextTick(async () => {
      this.isShowAni = true
      this.arrList = this.arrList.map(v => {
        getViewPos(this.$refs[`card${v.id}`][0])
        return { ...v, translateX: 0, translateY: 0 }
      })
      await wait(500)
      this.isShowAni = false
    })
  })
}
// 删除当前条目
export const delItem = function (item) {
  // 2、删除并触发dom更新
  this.arrList = this.arrList.filter(v => v.id != item.id)  //！！！！！！！基本上只要改这里的代码即可。其他几个步骤很固定了。记录初始位置、偏移、开启动画归位
  this.inverseAni()
}
// 添加条目
export const addItem = function () {
  this.arrList = [{id: this.arrList.length + 1, top:0,left: 0, bgColor: randomColor()}, ...this.arrList]
  this.inverseAni()
}
// 打乱顺序
export const randomItem = function () {
  this.arrList = shuffle(deepCopy(this.arrList))
  this.inverseAni()
}
// 重置
export const reset = function () {
  this.arrList = this.arrList.filter(v => v.id < 10).sort((a, b) => a.id - b.id)
  this.inverseAni()
}
// 开始拖拽
export const dragstart = function (e, index) {
  this.curIndex = index
}
// 进入目标区域
export const dragenter = async function (e, index) {
  e.preventDefault()
  clearTimeout(this.timeId)
  this.timeId = setTimeout(() => {
    if(this.curIndex != index) {
      const source = this.arrList[this.curIndex]
      this.arrList.splice(this.curIndex, 1)
      this.arrList.splice(index, 0, source)
      this.curIndex = index
      this.inverseAni()
    }
  }, 200)
}