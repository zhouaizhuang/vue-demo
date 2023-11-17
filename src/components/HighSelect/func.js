import { deepCopy, tree2flat } from "@/common.js"
// 点击当前的条目
export const clickItem = function (k) {
  const newOptions = deepCopy(this.options).map(v => {
    v.children = v.children.map(p => {
      if(this.isMutiple) {
        if(p.id == k.id) { p.isChecked = !p.isChecked }
      } else {
        p.isChecked = p.id == k.id
      }
      return p
    })
    return v
  })
  if(!this.isMutiple){
    this.isSpread = !this.isSpread
  }
  this.$emit('setOptions', newOptions)
  this.selectedItems = (tree2flat(newOptions, 'children') || []).filter(v => v.isChecked)
}
// 删除当前条目
export const delItem = function (item) {
  this.selectedItems = this.selectedItems.filter(v => v.id != item.id)
  // console.log(this.options)
  // console.log(this.selectedItems)
  const newOptions = this.options.map(v => {
    v.children = v.children.map(k => {
      k.isChecked = this.selectedItems.some(p => p.id == k.id)
      return k
    })
    return v
  })
  this.$emit('setOptions', newOptions)
}
// 点击外部
export const clickoutside = function () {
  this.isSpread = false
}