import { safeGet } from "@/common.js"
// 根据code获取对应的code下的列表。同时满足省市区
export const getList = async function (code) {
  return this.$request({url: '/admin-api/system/area/tree', params:{code}})
}
// 调整省
export const changeProvinceCode = function (e) {
  if(!e) { return false }
  const provinceName = safeGet(() => this.provinceList.find(v => v.id == e)['name'], '')
  this.$emit('setProvinceCode', {id: e, name: provinceName})
  this.$emit('setCityCode', {id: '', name: ''})
  this.$emit('setAreaCode', {id: '', name: ''})
  this.$emit('setStreetCode', {id: '', name: ''})
  // this.$emit('setAddress', '')
}
// 调整市
export const changeCityCode = function (e) {
  if(!e) { return false }
  const cityName = safeGet(() => this.cityList.find(v => v.id == e)['name'], '')
  this.$emit('setCityCode', {id: e, name:cityName})
  this.$emit('setAreaCode', {id: '', name: ''})
  this.$emit('setStreetCode', {id: '', name: ''})
  // this.$emit('setAddress', '')
}
// 调整区
export const changeAreaCode = function (e) {
  if(!e) { return false }
  const areaName = safeGet(() => this.areaList.find(v => v.id == e)['name'], '')
  this.$emit('setAreaCode', {id: e, name:areaName})
  this.$emit('setStreetCode', {id: '', name: ''})
}
// 调整街道
export const changeStreetCode = function (e) {
  if(!e) { return false }
  const streetName = safeGet(() => this.streetList.find(v => v.id == e)['name'], '')
  this.$emit('setStreetCode', {id: e, name:streetName})
}
// 调整详细地址
export const changeAddress = function (e) {
  this.$emit('setAddress', e.target.value)
}
// 清空省市区
export const clearAddress = function () {
  this.$emit('setProvinceCode', {id: '', name: ''})
  this.$emit('setCityCode', {id: '', name: ''})
  this.$emit('setAreaCode', {id: '', name: ''})
  this.$emit('setStreetCode', {id: '', name: ''})
  this.$emit('setAddress', '')
}