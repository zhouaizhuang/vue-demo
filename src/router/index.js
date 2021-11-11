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
]

const router = new VueRouter({
  routes
})

export default router
