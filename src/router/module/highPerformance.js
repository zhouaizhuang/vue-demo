export const highPerformance = [
  {
    path: '/tree',
    name: 'tree',
    component: () => import(/* webpackChunkName: "highPerformance" */ '../../views/highPerformance/tree/index.vue')
  },
  {
    path: '/virtualList',
    name: 'virtualList',
    component: () => import(/* webpackChunkName: "highPerformance" */ '../../views/highPerformance/virtualList/index.vue')
  },
  {
    path: '/lazyLoadImg',
    name: 'lazyLoadImg',
    component: () => import(/* webpackChunkName: "highPerformance" */ '../../views/highPerformance/lazyLoadImg/index.vue')
  },
  {
    path: '/pageLoad',
    name: 'pageLoad',
    component: () => import(/* webpackChunkName: "highPerformance" */ '../../views/highPerformance/pageLoad/index.vue')
  },
]