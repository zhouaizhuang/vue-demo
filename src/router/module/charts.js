export const charts = [
  {
    path: '/barChart',
    name: 'barChart',
    component: () => import(/* webpackChunkName: "charts" */ '../../views/charts/barChart/index.vue')
  },
]