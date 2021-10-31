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
]