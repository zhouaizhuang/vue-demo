
import DetailRender from "./DetailRender/index.vue"
import FormRender from "./FormRender/index.vue"
import SearchRender from "./SearchRender/index.vue"
import TableRender from "./TableRender/index.vue"
import TreeRender from "./TreeRender/index.vue"
import ModalRender from "./ModalRender/index.vue"
import TabRender from "./TabRender/index.vue"
// 处理searchRender和tableRender拿到的请求参数
export const getParams = function (searchList, tableObj, e) {
  e = e || {}
  const searcParams = searchList.reduce((prev, item) => (prev[item.key] = item.value, prev), {})
  const { currentPage, pageSize } = tableObj
  tableObj.currentPage = e.currentPage || tableObj.currentPage
  tableObj.pageSize = e.pageSize || tableObj.pageSize
  return { ...searcParams, currentPage, pageSize, ...e}
}
/**注册到全局 */
export default {
  install (Vue) {
    Vue.component('DetailRender', DetailRender)
    Vue.component('FormRender', FormRender)
    Vue.component('SearchRender', SearchRender)
    Vue.component('TableRender', TableRender)
    Vue.component('TreeRender', TreeRender)
    Vue.component('ModalRender', ModalRender)
    Vue.component('TabRender', TabRender)
    window._.getParams = getParams // 全局挂载获取参数的函数
  }
}