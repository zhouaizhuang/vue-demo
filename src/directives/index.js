// 动态读取自定义指令列表
// 生成结果形如：const directives = { permission, copy, ... }
const r = require.context('./modules', true, /\.js/)
const directives = r.keys().reduce((prev, item) => ({ ...prev, ...r(item)}), {})

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}
