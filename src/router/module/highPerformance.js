export const highPerformance = [
  {
    path: '/tree',
    name: 'tree',
    component: () => import(/* webpackChunkName: "component" */ '../../views/highPerformance/tree/index.vue')
  },
]