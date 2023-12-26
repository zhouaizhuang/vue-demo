// 改变tab
export const changeTab = function (item) {
  const tabObj = { ...this.tabObj, list: _.radioChecked(this.tabObj.list, {id: item.id}) }
  this.$emit('setTabObj', tabObj)
}