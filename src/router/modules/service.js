export default [
  { path: '/watchScroll', name: 'watchScroll', component: () => import(/* webpackChunkName: "service" */ '../../views/service/watchScroll/index.vue') },
  { path: '/refreshTop', name: 'refreshTop', component: () => import(/* webpackChunkName: "service" */ '../../views/service/refreshTop/index.vue') },
  { path: '/progress', name: 'progress', component: () => import(/* webpackChunkName: "service" */ '../../views/service/progress/index.vue') },
]