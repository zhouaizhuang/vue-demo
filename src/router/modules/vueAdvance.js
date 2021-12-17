export default [
  { path: '/vPermission', name: 'vPermission', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vPermission/index.vue') },
  { path: '/vCopy', name: 'vCopy', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vCopy/index.vue') },
  { path: '/vDebounce', name: 'vDebounce', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vDebounce/index.vue') },
  { path: '/vThrottie', name: 'vThrottie', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vThrottie/index.vue') },
  { path: '/vWaterMarker', name: 'vWaterMarker', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vWaterMarker/index.vue') },
  { path: '/vDraggable', name: 'vDraggable', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vDraggable/index.vue') },
  { path: '/vLongpress', name: 'vLongpress', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vLongpress/index.vue') },
]