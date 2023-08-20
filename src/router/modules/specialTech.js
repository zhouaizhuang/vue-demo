export default [
  { path: '/cssParams', name: 'cssParams', component: () => import(/* webpackChunkName: "specialTech" */ '../../views/specialTech/cssParams/index.vue') },
  { path: '/localcCompare', name: 'localcCompare', component: () => import(/* webpackChunkName: "specialTech" */ '../../views/specialTech/localcCompare/index.vue') },
  { path: '/olympicFiveCircle', name: 'olympicFiveCircle', component: () => import(/* webpackChunkName: "specialTech" */ '../../views/specialTech/olympicFiveCircle/index.vue') },
  { path: '/regSimple', name: 'regSimple', component: () => import(/* webpackChunkName: "specialTech" */ '../../views/specialTech/regSimple/index.vue') },
  { path: '/regAdvance', name: 'regAdvance', component: () => import(/* webpackChunkName: "specialTech" */ '../../views/specialTech/regAdvance/index.vue') },
]