// https://www.jianshu.com/p/7dbf597c1c90
import { setLocalStorage, getLocalStorage } from "../../common/index.js"

/**
 * 权限指令 
 * @param {string} value 权限标识
 * 例：<div v-permission="'/index'">首页权限</div>
 */
export const permission = {
  inserted: function (el, binding) {
    const { value } = binding
    // 在前置路由拦截获取权限按钮列表后存储在 store 中
    // const actionList = store.state.user.permission
    /**暂时没有后端，暂且前端写死权限 */
    setLocalStorage('permission', ['/index', '/detail', '/detailEdit', '/customer/index', '/customer/detail', '/customer/detailEdit'])
    const permissionList = getLocalStorage('permission') // 备注：这里权限获取方式，到底是从vuex中获取还是localstorage中获取。要看项目
    if (value) {
      const hasPermission = permissionList.includes(value)
      // 没有权限直接移除 dom元素
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`需要指定权限标识！ 如：v-permission="'editInfo'"`)
    }
  }
}