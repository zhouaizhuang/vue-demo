export default [
  { path: '/desc_pc', name: 'desc_pc', component: () => import(/* webpackChunkName: "tools" */ '../../views/tools/desc_pc/index.vue') },
  { path: '/calcHours_pc', name: 'calcHours_pc', component: () => import(/* webpackChunkName: "tools" */ '../../views/tools/calcHours_pc/index.vue') },
]