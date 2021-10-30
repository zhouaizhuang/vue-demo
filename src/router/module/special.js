export const special = [
  {
    path: '/specialFont',
    name: 'specialFont',
    component: () => import(/* webpackChunkName: "other" */ '../../views/special/specialFont/index.vue')
  },
]