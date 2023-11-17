import Vue from 'vue'
import Confirm from '@/components/zConfirm/index.vue'
const ConfirmConstructor = Vue.extend(Confirm)
export const zConfirm = function ({title = '温馨提示', name = '',  content = '', onOk = () => {}, onCancel = () => {}} = {}) {
  const confirm = new ConfirmConstructor()
  confirm.$mount(document.createElement('div'))
  confirm.isShow = true
  confirm.title = title
  confirm.name = name
  confirm.content = content
  confirm.onOk = () => {
    onOk.call(this)
    confirm.isShow=false
    setTimeout(() => { document.body.removeChild(confirm.$el) }, 600)
  }
  confirm.onCancel = () => {
    onCancel.call(this)
    confirm.isShow=false
    setTimeout(() => { document.body.removeChild(confirm.$el) }, 600)
  }
  document.body.appendChild(confirm.$el)
}
// 注册到全局vue
export default {
  install (Vue) {
    Vue.prototype.$zConfirm = zConfirm
  }
}