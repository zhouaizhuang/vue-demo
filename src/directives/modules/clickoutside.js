/**
 * 点击盒子之外的区域触发
 * 例：<div v-clickoutside="clickoutside">
 */
const clickoutsideContext = '@@clickoutsideContext'
export const clickoutside = {
  bind(el, binding, vnode) {
    const documentHandler = (e) => {
      if (vnode.context && el !== e.target && !el.contains(e.target)) {
        vnode.context[el[clickoutsideContext].methodName]()
      }
    }
    el[clickoutsideContext] = {
      documentHandler,
      methodName: binding.expression,
      arg: binding.arg || 'click',
    }
    document.addEventListener(el[clickoutsideContext].arg, documentHandler, false)
  },
  update(el, binding) {
    el[clickoutsideContext].methodName = binding.expression
  },
  unbind(el) {
    document.removeEventListener(el[clickoutsideContext].arg, el[clickoutsideContext].documentHandler)
  },
  install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind,
    })
  }
}