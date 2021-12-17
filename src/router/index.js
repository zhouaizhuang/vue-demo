import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
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
export default router
