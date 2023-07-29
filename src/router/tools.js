import store from '@/store/index.js'
export const addMeta = function (name, metaFn){
  let dynamicRouteList = store.state.dynamicRouteList
  dynamicRouteList = dynamicRouteList.map(v => {
    if(v.name == name) { metaFn(v.meta) }
    v.children = v.children.map(k => {
      if(k.name == name) { metaFn(k.meta) }
      k.children = k.children.map(p => {
        if(p.name == name) { metaFn(p.meta) }
        return p
      })
      return k
    })
    return v
  })
  store.commit('setDynamicRouteList', dynamicRouteList)
  return dynamicRouteList
}
// 获取当前页面meta中的信息
export const getMeta = function (name) {
  let dynamicRouteList = store.state.dynamicRouteList
  const meta = dynamicRouteList.reduce((prev, v) => {
    if(v.name == name) { prev = v.meta }
    v.children = v.children.map(k => {
      if(k.name == name) { prev = k.meta }
      k.children = k.children.map(p => {
        if(p.name == name) { prev = p.meta }
        return p
      })
      return k
    })
    return prev
  }, {})
  return meta
}