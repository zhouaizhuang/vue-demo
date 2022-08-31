export default [
  { path: '/icon', name: 'icon', component: () => import(/* webpackChunkName: "commCmpt" */ '../../views/commCmpt/icon/index.vue') },
  { path: '/zInput', name: 'zInput', component: () => import(/* webpackChunkName: "commCmpt" */ '../../views/commCmpt/zInput/index.vue') },
  { path: '/upImg', name: 'upImg', component: () => import(/* webpackChunkName: "commCmpt" */ '../../views/commCmpt/upImg/index.vue') },
  { path: '/loading_pc', name: 'loading_pc', component: () => import(/* webpackChunkName: "commCmpt" */ '../../views/commCmpt/loading_pc/index.vue') },
]