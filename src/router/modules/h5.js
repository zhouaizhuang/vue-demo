export default [
  { path: '/phone', name: 'phone', component: () => import(/* webpackChunkName: "h5" */ '../../views/h5/phone/index.vue')},
  { path: '/message', name: 'message', component: () => import(/* webpackChunkName: "h5" */ '../../views/h5/message/index.vue')},
  { path: '/form', name: 'form', component: () => import(/* webpackChunkName: "h5" */ '../../views/h5/form/index.vue')},
  { path: '/cusForm', name: 'cusForm', component: () => import(/* webpackChunkName: "h5" */ '../../views/h5/cusForm/index.vue')},
  { path: '/getLocation', name: 'getLocation', component: () => import(/* webpackChunkName: "h5" */ '../../views/h5/getLocation/index.vue')},
  { path: '/goApplet', name: 'goApplet', component: () => import(/* webpackChunkName: "h5" */ '../../views/h5/goApplet/index.vue')},
  { path: '/list', name: 'list', component: () => import(/* webpackChunkName: "h5" */ '../../views/h5/list/index.vue')},
  // { path: '/scanfCode', name: 'scanfCode', component: () => import(/* webpackChunkName: "h5" */ '../../views/h5/scanfCode/index.vue')},
  // { path: '/barCode', name: 'barCode', component: () => import(/* webpackChunkName: "h5" */ '../../views/h5/barCode/index.vue')},
  // { path: '/qrCode', name: 'qrCode', component: () => import(/* webpackChunkName: "h5" */ '../../views/h5/qrCode/index.vue')},
]