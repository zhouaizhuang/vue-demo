export const special = [
  {
    path: '/specialFont',
    name: 'specialFont',
    component: () => import(/* webpackChunkName: "other" */ '../../views/special/specialFont/index.vue')
  },
  {
    path: '/linearText',
    name: 'linearText',
    component: () => import(/* webpackChunkName: "other" */ '../../views/special/linearText/index.vue')
  },
  {
    path: '/autoBreak',
    name: 'autoBreak',
    component: () => import(/* webpackChunkName: "other" */ '../../views/special/autoBreak/index.vue')
  },
]