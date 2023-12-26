// 调整数值
export const changeField = function (e, field) {
  if(!e) {return}
  let val = _.isString(e) || _.isNumber(e) ? e : e.target.value
  const searchList = _.searchCover(this.searchList, {id: this.item.id}, v => ({...v, value: {...v.value, [field]: val}}))
  // console.log(searchList)
  this.$emit('setSearchList', searchList)
}
// 调整数值
export const changeVal1 = function (e) {
  if(!e) {return}
  this.changeField(e, 'value1')

}
// 调整数值
export const changeVal2 = function (e) {
  if(!e) {return}
  this.changeField(e, 'value2')
}