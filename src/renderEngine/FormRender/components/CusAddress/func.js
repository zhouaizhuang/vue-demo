// 调整字段值
export const changeField = function (e, field) {
  e = e || ''
  const value = _.isString(e) || _.isNumber(e) || _.isArray(e) ? e : _.safeGet(() => e.target.value, e)
  const errmsg = field == 'value' && this.item.require && !value ? `请选择${this.item.label}` : ''
  let formList = _.searchCover(this.formList, {id: this.item.id}, v => ({...v, [field]: value, errmsg}))
  this.$emit('setFormList', formList)
}
// 改变日期
export const changeDate = function (e) {
  this.changeField(e, 'value')
}
// 调整省
export const setPovinceCode = function (e) {
  if(!e) { return false }
  const {id, name} = e
  let value = this.item.value
  value.provinceCode = id
  value.provinceName = name
  this.changeField(value, 'value')
}
// 调整市
export const setCityCode = function (e) {
  if(!e) { return false }
  const {id, name} = e
  let value = this.item.value
  value.cityCode = id
  value.cityName = name
  this.changeField(value, 'value')
}
// 调整区
export const setAreaCode = function (e) {
  if(!e) { return false }
  const {id, name} = e
  let value = this.item.value
  value.areaCode = id
  value.areaName = name
  this.changeField(value, 'value')
}
// 调整街道
export const setStreetCode = function (e) {
  if(!e) { return false }
  const {id, name} = e
  let value = this.item.value
  value.streetCode = id
  value.streetName = name
  this.changeField(value, 'value')
}
// 调整详细地址
export const setAddress = function (e) {
  let value = this.item.value
  value.address = e
  this.changeField(value, 'value')
}