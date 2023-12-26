// 关闭
export const close = function () {
  this.$emit('setModalObj', { ...this.modalObj, isShow: false })
}
// 关闭弹框
export const closeModal = function () {
  this.close() // 默认关闭modal弹框
  const fn = _.safeGet(() => this.modalObj.header.close, '')
  _.isFunction(fn) ? fn() : ''
}
// 关闭
export const handleClose = function () {
  this.close() // 默认关闭modal弹框
  const fn = _.safeGet(() => this.modalObj.footer.close, '')
  _.isFunction(fn) ? fn() : ''
}
// 取消
export const handleCancel = function () {
  this.close() // 默认关闭modal弹框
  const fn = _.safeGet(() => this.modalObj.footer.cancel, '')
  _.isFunction(fn) ? fn() : ''
}
// 处理确认
export const handleConfirm = function () {
  // this.close()
  const fn = _.safeGet(() => this.modalObj.footer.confirm, '')
  _.isFunction(fn) ? fn() : ''
}