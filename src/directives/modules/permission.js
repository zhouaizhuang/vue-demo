// https://www.jianshu.com/p/7dbf597c1c90
import store from '@/store/index.js'
/**
 * 权限指令 
 * @param {string} value 权限标识
 * 例：<div v-permission="50001">首页权限</div>
 */
export const permission = {
  inserted: async function (el, binding) {
    const { value } = binding
    if (binding.value) {
      if (!store.state.permissionList.includes(Number(value))) {
      // 没有权限，将其隐藏并且直接移除dom元素
        el.style.display = 'none'
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`需要指定权限标识！ 如：v-permission="50001"`)
    }
  },
  update: async function (el, binding) {
    const { value } = binding
    if (value) {
      if (!store.state.permissionList.includes(Number(value))) {
      // 没有权限，将其隐藏并且直接移除dom元素
        el.style.display = 'none'
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`需要指定权限标识！ 如：v-permission="50001"`)
    }
  }
}