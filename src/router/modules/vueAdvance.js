export default [
  { path: '/vPermission', name: 'vPermission', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vPermission/index.vue') },
  { path: '/vCopy', name: 'vCopy', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vCopy/index.vue') },
  { path: '/vDebounce', name: 'vDebounce', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vDebounce/index.vue') },
  { path: '/vThrottie', name: 'vThrottie', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vThrottie/index.vue') },
  { path: '/vWaterMarker', name: 'vWaterMarker', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vWaterMarker/index.vue') },
  { path: '/vDraggable', name: 'vDraggable', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vDraggable/index.vue') },
  { path: '/vLongpress', name: 'vLongpress', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vLongpress/index.vue') },
  { path: '/propsEmit', name: 'propsEmit', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/propsEmit/father.vue') },
  { path: '/parentChild', name: 'parentChild', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/parentChild/father.vue') },
  { path: '/eventBus', name: 'eventBus', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/eventBus/index.vue') },
  { path: '/attrsListeners', name: 'attrsListeners', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/attrsListeners/father.vue') },
  { path: '/provideInject', name: 'provideInject', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/provideInject/father.vue') },
  { path: '/refs', name: 'refs', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/refs/father.vue') },
  { path: '/useVuex', name: 'useVuex', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/useVuex/index.vue') },
  { path: '/mixIn', name: 'mixIn', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/mixIn/index.vue') },
  { path: '/vSlot', name: 'vSlot', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vSlot/index.vue') },
  { path: '/vueAni', name: 'vueAni', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/vueAni/index.vue') },
  { path: '/params1/:id', name: 'params1', component: () => import(/* webpackChunkName: "vueAdvance" */ '../../views/vueAdvance/params1/index.vue') },
]