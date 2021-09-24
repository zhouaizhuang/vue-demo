import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index/index.vue'
import { css3Ani } from "./module/css3Ani.js"
import { aeAni } from "./module/aeAni.js"
import { otherAni } from "./module/otherAni.js"
import { pictureaAni } from "./module/pictureAni.js"
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
  ...otherAni,
  ...pictureaAni
]

const router = new VueRouter({
  routes
})

export default router
