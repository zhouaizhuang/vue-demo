export const commCmpt = [
  {
    path: '/tree',
    name: 'tree',
    component: () => import(/* webpackChunkName: "component" */ '../../views/commCmpt/tree/index.vue')
  },
]