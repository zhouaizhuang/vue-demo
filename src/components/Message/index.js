import Vue from 'vue'
import message from './src/index.vue'
const Message = Vue.extend(message) // 使用基础 Vue 构造器，创建一个“子类”
const vmArr = []
export const $message = function (opts) {
  // 实例化组件
  const _message = new Message({
    data() {
      return {
        msg: opts.message || '默认提示',
        type: opts.type,
        isVisible: false,
        top: `${vmArr.length * 68 + 20}px`,
      }
    },
    methods: {
      show() {
        this.isVisible = true
        vmArr.push(this)
      },
      hide() {
        this.isVisible = false
        vmArr.shift()
        vmArr.forEach((item, index) => {
          item.top = `${index * 68 + 20}px`
        })
      },
    },
    mounted() {
      this.show()
      setTimeout(() => {
        this.hide()
      }, 3000)
    },
  })
  // 模板编译到实例的$el属性
  _message.$mount()
  // 手动挂载到指定节点body
  document.body.appendChild(_message.$el)
}
// export default {
//   install(Vue) {
//     Vue.prototype.$message = $message
//   },
// }