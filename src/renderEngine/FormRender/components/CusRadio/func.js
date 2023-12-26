// 选择当前条目
export const selectItem = function (optItem) {
  const options = _.radioChecked(this.item.options, {value: optItem.value})
  const formList = _.searchCover(this.formList, {id: this.item.id}, v => ({...v, options, value: optItem.value, errmsg: '' }))
  this.$emit('setFormList', formList)
}