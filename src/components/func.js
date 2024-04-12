import Vue from 'vue'
import Confirm from '@/components/zConfirm/index.vue'
import Message from '@/components/zMessage/index.vue'
/**
 * 二次确认弹框使用方式
  this.$zConfirm({
    title: '温馨提示',
    name: row.name,
    content: `<p>确定要${row.state == 0 ? '启用' : '停用'}这个帐号吗？</p>`,
    onOk: async () => {
      await this.$post('/xxxChangeStatus', {id: row.id, status: toogle01(row.state)})
      this.getList()
    },
    onCancel: () => {}
  })
 */
export const zConfirm = (function (){
  const ConfirmConstructor = Vue.extend(Confirm)
  return function ({title = '温馨提示', name = '',  content = '', okText='确定', cancelText='取消', onOk = () => {}, onCancel = () => {}} = {}) {
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
})()
/**
 * 提示消息弹框
 * this.$zMessage.error('请输入XXX') // 异常提示
 * this.$zMessage.warning('请输入XXX') // 警告提示
 * this.$zMessage.info('请输入XXX') // 消息提示
 * this.$zMessage.success('请输入XXX') // 成功提示、
 * zMessage.success('请输入XXX') // 导入调用
 */
export const zMessage = (function () {
  const MessageConstructor = Vue.extend(Message)
  let messageIndex = 0
  const typeFn = (msg = '', type) => {
    const message = new MessageConstructor()
    message.$mount(document.createElement('div'))
    message.top = messageIndex * 50 + 30
    message.message = msg
    message.type = type
    document.body.appendChild(message.$el)
    messageIndex++
    setTimeout(() => {
      message.isShow = false
      messageIndex--
      setTimeout(() => {
        document.body.removeChild(message.$el)
      }, 1000)
    }, 2000)
  }
  return {
    error: msg => typeFn(msg, 'error'),
    warning: msg => typeFn(msg, 'warning'),
    success: msg => typeFn(msg, 'success'),
    info: msg => typeFn(msg, 'info'),
  }
})()
// 注册到全局vue
export default {
  install (Vue) {
    Vue.prototype.$zConfirm = zConfirm
    Vue.prototype.$zMessage = zMessage
  }
}