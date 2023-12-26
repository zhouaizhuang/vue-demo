// 调整字段值
export const changeField = function (e, field) {
  e = e || ''
  const value = _.isString(e) || _.isNumber(e) || _.isArray(e) ? e : _.safeGet(() => e.target.value, e)
  const errmsg = field == 'value' && this.item.require && !value ? this.item.placeholder : ''
  let formList = _.searchCover(this.formList, {id: this.item.id}, v => ({...v, [field]: value, errmsg}))
  this.$emit('setFormList', formList)
}
// 设置关键字
export const setKeywords = function (e) {
  this.changeField(e, 'value')
}
// 确认搜索
export const confirmSelect = function (e) {
  this.changeField(e, 'value1')
}