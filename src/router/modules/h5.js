export default [
  { path: '/phone', name: 'phone', component: () => import(/* webpackChunkName: "h5" */ '../../views/h5/phone/index.vue')},
  { path: '/message', name: 'message', component: () => import(/* webpackChunkName: "h5" */ '../../views/h5/message/index.vue')},
  { path: '/form', name: 'form', component: () => import(/* webpackChunkName: "h5" */ '../../views/h5/form/index.vue')},
]