// 显示错误弹窗
export const sure = function () {
  this.$zMessage.error('错误提示' + _.dateFormater('hh:mm:ss', new Date()))
}