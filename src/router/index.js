import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index/index.vue'
import { commCmpt } from "./module/commCmpt.js"
import { highPerformance } from "./module/highPerformance.js" 
import { css3Ani } from "./module/css3Ani.js"
import { aeAni } from "./module/aeAni.js"
import { special } from "./module/special.js"
import { pictureaAni } from "./module/pictureAni.js"
import { svgAni } from "./module/svgAni.js"
import { bugFix } from "./module/bugFix.js"
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: { name: 'index' },
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  ...css3Ani,
  ...aeAni,
  ...pictureaAni,
  ...svgAni,
  ...commCmpt,
  ...highPerformance,
  ...special,
  ...bugFix,
]
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
