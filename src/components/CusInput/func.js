/**
 * 调整字段
 * @param {*} e 
 */
export const changeField = function (e){
  console.log(e)
  const value = e.data
  const { _id } = this.formInfo
  this.$emit('changeValue', {value, _id})
}