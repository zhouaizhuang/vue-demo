export default [
  { path: '/icon', name: 'icon', component: () => import(/* webpackChunkName: "commCmpt" */ '../../views/commCmpt/icon/index.vue') },
  { path: '/zInput', name: 'zInput', component: () => import(/* webpackChunkName: "commCmpt" */ '../../views/commCmpt/zInput/index.vue') },
]