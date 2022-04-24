import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import { getLocalStorage } from "../common.js"
Vue.use(VueRouter)
// 批量读取路由
const r = require.context('./modules', true, /\.js/)
const routerList = r.keys().reduce((prev, item) => {
  const routeItem = r(item).default
  return Array.isArray(routeItem) ? [...prev, ...routeItem] : [...prev, routeItem]
}, [])
// 将读取到的路由写入
const routes = [
  { path: '/', redirect: { name: 'index' } },
  { path: '/index', name: 'index', component: index },
  ...routerList
]
// 默认回到顶部
const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) { // 页面回退至上次访问的位置
      return savedPosition
    } else { // 页面刷新，滚动条置顶
      return { 
        top: 0,
        behavior:'smooth'
      }
    }
  }
})
router.afterEach((to,from,next) => {
  // window.scrollTo({ top:0, behavior:'smooth' }) // 页面切换时，滚动条平滑切换至顶部
  window.scrollTo(0, 0)
})
// 路由（页面级别权限控制）（只要meta标签中needLogin设置为true。同时token不存在则会回到登录页面）
// router.beforeEach((to, from, next) => {
//   if(getLocalStorage('token')) {
//     // 如果是从后台拿到的路由。那么此处要等待路由接口获取数据。然后进行比对操作。生成真实路由。
//     // 判断realRouter长度是否为0。为0则读取接口。然后比对生成值之后。使用router.addRoutes(realRouter) 这样路由就可以被动态生成
//     next()
//   } else {
//     to.meta.token ? next({path: '/login'}) : next()
//   }
// })
export default router
