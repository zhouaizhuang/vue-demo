import Vue from 'vue'
import Confirm from '@/components/zConfirm/index.vue'
const ConfirmConstructor = Vue.extend(Confirm)
export const zConfirm = function ({title = '温馨提示', name = '',  content = '', okText='确定', cancelText='取消', onOk = () => {}, onCancel = () => {}} = {}) {
  const confirm = new ConfirmConstructor()
  confirm.$mount(document.createElement('div'))
  confirm.isShow = true
  confirm.title = title
  confirm.name = name
  confirm.content = content
  confirm.okText = okText
  confirm.cancelText = cancelText
  confirm.onOk = () => {
    onOk.call(this)
    confirm.isShow=false
    document.body.removeChild(confirm.$el)
  }
  confirm.onCancel = () => {
    onCancel.call(this)
    confirm.isShow=false
    document.body.removeChild(confirm.$el)
  }
  document.body.appendChild(confirm.$el)
}
// 注册到全局vue
export default {
  install (Vue) {
    Vue.prototype.$zConfirm = zConfirm
  }
}