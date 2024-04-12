import { zMessage } from "@/components/func.js" // 注意：采用cdn的时候view-ui的cdn对应的全局变量是iview
import { request } from "@/utils/network.js"
/**
 * 下载
 * @param {Function} 
 * 下载二进制
 * <Input 
 *   v-download="{
 *     type:'blob',
 *     url: '/admin-api/diag/physicalIndicatorsData/downTemplate',
 *     name: '批量导入关键指标模板.xlsx'
 *   }"
 * >
 * 下载全路径的png图片、pdf
 * <Input 
 *   v-download="{
 *     type:'png',
 *     url: 'http://xxxxxxxxx.png',
 *     name: '测试下载.png'
 *   }"
 * >
 * </Input>
 */
export const download = {
  bind(el, {value}, vnode) {
    const { type = 'png', url, name } = value
    el.handler = async () => {
      if(type=='blob' && !url) { return zMessage.error('接口请求路径必传') }
      if(!url) { return zMessage.error('下载地址必传') }
      if(!name) { return zMessage.error('文件名必传') }
      let res = ''
      if(type == 'blob') {
        res = await request({ method: "POST", url: url, responseType: 'blob' }, 0)
      } else if(['pdf', 'png', 'jpg', 'jepg', 'img'].includes(type)){
        res = url
      } else {
        return zMessage.error('格式不对')
      }
      _.downloadFile(name, res)
    }
    el.addEventListener("click", el.handler)
  },
  unbind(el) {
    el.removeEventListener('click', el.handler)
  },
}