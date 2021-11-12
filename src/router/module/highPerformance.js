export const highPerformance = [
  {
    path: '/tree',
    name: 'tree',
    component: () => import(/* webpackChunkName: "highPerformance" */ '../../views/highPerformance/tree/index.vue')
  },
  {
    path: '/infiniteScroll',
    name: 'infiniteScroll',
    component: () => import(/* webpackChunkName: "highPerformance" */ '../../views/highPerformance/infiniteScroll/index.vue')
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