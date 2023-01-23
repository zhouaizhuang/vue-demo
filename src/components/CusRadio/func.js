// 调整字段
export const changeField = function (e){
  const { value } = e.detail
  const { _id } = this.data.formInfo
  this.$emit('changeValue', {value, _id})
}