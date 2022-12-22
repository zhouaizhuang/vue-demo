export default [
  { path: '/uploadImg', name: 'uploadImg', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/uploadImg/index.vue')},
  { path: '/Zmap', name: 'Zmap', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/myMap/index.vue')},
  { path: '/pickArea', name: 'pickArea', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/pickArea/index.vue')},
  { path: '/sliderVerify_pc', name: 'sliderVerify', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/sliderVerify/index.vue')},
  { path: '/useQrcode_pc', name: 'useQrcode', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/useQrcode/index.vue')},
  { path: '/printTable_pc', name: 'printTable_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/printTable_pc/index.vue')},
  { path: '/noAutoComplete_pc', name: 'noAutoComplete_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/noAutoComplete_pc/index.vue')},
  { path: '/tabs_pc', name: 'tabs_pc', component: () => import(/* webpackChunkName: "pc" */ '../../views/pc/tabs_pc/index.vue')},
]