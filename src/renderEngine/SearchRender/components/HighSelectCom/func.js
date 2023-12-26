// 设置属性
export const setOptions = function (e) {
  const ids = _.getField(_.getField(e, 'children').flat(2), 'id', v => v.isChecked).join(',')
  const searchList = _.searchCover(this.searchList, {id: this.item.id}, v => ({...v, options: e, value: ids}))
  this.$emit('setSearchList', searchList)
}