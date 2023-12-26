// 改变tab
export const changeTab = function (item) {
  const list = _.radioChecked(this.tabObj.list, {id: item.id})
  const tabObj = { ...this.tabObj, list }
  this.$emit('setTabObj', tabObj)
}