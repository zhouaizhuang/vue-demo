export const special = [
  {
    path: '/specialFont',
    name: 'specialFont',
    component: () => import(/* webpackChunkName: "special" */ '../../views/special/specialFont/index.vue')
  },
  {
    path: '/linearText',
    name: 'linearText',
    component: () => import(/* webpackChunkName: "special" */ '../../views/special/linearText/index.vue')
  },
  {
    path: '/autoBreak',
    name: 'autoBreak',
    component: () => import(/* webpackChunkName: "special" */ '../../views/special/autoBreak/index.vue')
  },
  {
    path: '/filter',
    name: 'filter',
    component: () => import(/* webpackChunkName: "special" */ '../../views/special/filter/index.vue')
  },
  {
    path: '/clipImg',
    name: 'clipImg',
    component: () => import(/* webpackChunkName: "special" */ '../../views/special/clipImg/index.vue')
  },
  {
    path: '/reflectImg',
    name: 'reflectImg',
    component: () => import(/* webpackChunkName: "special" */ '../../views/special/reflectImg/index.vue')
  },
  {
    path: '/scrollStrong',
    name: 'scrollStrong',
    component: () => import(/* webpackChunkName: "special" */ '../../views/special/scrollStrong/index.vue')
  },
]