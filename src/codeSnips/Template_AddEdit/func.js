import { deepCopy } from "@/common.js"
// 关闭弹框
export const closeModal = function () {
  this.$emit('setModalType', 0)
  this.resetForm()
}
// 保存
export const add = function () {
  
}
// 编辑
export const edit = function () {
  // 1、调用详情接口

  // 2、进行数据回填
}
// 其他待拓展函数
export const otherFunc = function () {
  
}
// 重置表单
export const resetForm = function () {
  this.$refs[this.refId].resetFields()
  this.formData = deepCopy(this.$options.data().formData)
}
// 提交表单
export const submit = async function () {
  const valid = await this.$refs[this.refId].validate()
  if (!valid) { return false }
  const res = await this.$post('/xxxx', {
    ...this.formData,
    avatar: formData.avatar.map(v => v.url).join(',')
  })
  if (res) {
    const tip = { 1:`新增成功`, 2: '编辑成功' }[this.modalType]
    return this.$Message.success(tip)
  }
}