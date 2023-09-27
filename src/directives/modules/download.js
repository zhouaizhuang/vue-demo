import { Message } from 'view-design'
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
    const click = async () => {
      if(type=='blob' && !url) { return Message.error('接口请求路径必传') }
      if(!url) { return Message.error('下载地址必传') }
      if(!name) { return Message.error('文件名必传') }
      let res = ''
      if(type == 'blob') {
        res = await request({ method: "POST", url: url, responseType: 'blob' }, 0)
      } else if(['pdf', 'png', 'jpg', 'jepg', 'img'].includes(type)){
        res = url
      } else {
        return Message.error('格式不对')
      }
      console.log(name, res)
      _.downloadFile(name, res)
    }
    el.removeEventListener('click', click)
    el.addEventListener("click", click)
  }
}