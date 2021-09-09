import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index/index.vue'
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
  {
    path: '/carousel', // 轮播组件
    name: 'carousel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "keyFrame" */ '../views/carousel/index.vue')
  },
  {
    path: '/numGrow',
    name: 'numGrow',
    component: () => import(/* webpackChunkName: "keyFrame" */ '../views/numGrow/index.vue')
  },
  {
    path: '/breath',
    name: 'breath',
    component: () => import(/* webpackChunkName: "keyFrame" */ '../views/breath/index.vue')
  },
  {
    path: '/lottie',
    name: 'lottie',
    component: () => import(/* webpackChunkName: "keyFrame" */ '../views/lottie/index.vue')
  },
  {
    path: '/specialFont',
    name: 'specialFont',
    component: () => import(/* webpackChunkName: "other" */ '../views/specialFont/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
