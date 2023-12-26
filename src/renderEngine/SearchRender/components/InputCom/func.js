// 调整
export const changeVal = function (e) {
  if(!e) {return}
  let value = _.isString(e) || _.isNumber(e) ? e : e.target.value
  const searchList = _.searchCover(this.searchList, {id: this.item.id}, v => ({...v, value}))
  // console.log(searchList)
  this.$emit('setSearchList', searchList)
}