import { zMessage } from "@/components/func.js" // 注意：采用cdn的时候view-ui的cdn对应的全局变量是iview
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
      return zMessage.error('您传入的格式不正确')
    }
    el.handler = function (){ goUrl(value) }
    el.addEventListener('click', el.handler)
  },
  unbind(el) {
    el.removeEventListener('click', el.handler)
  },
}
