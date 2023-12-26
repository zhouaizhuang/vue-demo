// 调整数据
export const changeVal = function (e) {
  const searchList = _.searchCover(this.searchList, {id: this.item.id}, v => ({...v, value: e}))
  // console.log(searchList)
  this.$emit('setSearchList', searchList)
}