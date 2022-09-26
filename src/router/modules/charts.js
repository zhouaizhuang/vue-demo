export default [
  { path: '/barChart', name: 'barChart', component: () => import(/* webpackChunkName: "charts" */ '../../views/charts/barChart/index.vue') },
  { path: '/eChartsView_pc', name: 'eChartsView_pc', component: () => import(/* webpackChunkName: "charts" */ '../../views/charts/eChartsView_pc/index.vue') },
]