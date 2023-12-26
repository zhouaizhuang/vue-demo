// 获取参数
export const getParams = function () {
  return this.searchList.reduce((prev, item) => (prev[item.key] = item.value, prev), {})
}
// 搜索
export const search = function () {
  this.$emit('changeSearch', {currentPage: 1, ...this.paramsObj })
}
// 重置
export const reset = function () {
  let searchList = this.searchList.map(v => ({...v, value: v._value}))
  searchList = _.resetChecked(searchList)
  const paramsObj = searchList.reduce((prev, item) => (prev[item.key] = item.value, prev), {})
  if(!_.looseEqual(this.searchList, searchList)){
    this.$emit('setSearchList', searchList)
  }
  this.$emit('changeSearch', {currentPage: 1, ...paramsObj })
}
// 切换是否展开
export const toogleSpread = function () {
  this.isSpread = !this.isSpread
  const searchList = this.searchList.map(v => ({...v, isShow: this.isSpread ? true : v._isShow }))
  this.$emit('setSearchList', searchList)
}