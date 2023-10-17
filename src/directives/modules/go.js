import { Message } from 'view-design'
import { go as goUrl } from "@/router/index.js"
/**
 * 路由跳转指令
 * <div v-go="{name: '/patient/patientDetail',query: {patientId: row.patientId}}">{{num}}</div>
 * 举例： 
 */
export const go = {
  bind(el, {value}, vnode) {
    if(!value) { return false }
    if(!_.isObject(value)) {
      return Message.error('您传入的格式不正确')
    }
    el.handler = function (){ goUrl(value) }
    el.addEventListener('click', el.handler)
  },
  unbind(el) {
    el.removeEventListener('click', el.handler)
  },
}
