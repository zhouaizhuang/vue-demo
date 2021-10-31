export const svgAni = [
  {
    path: '/moveText',
    name: 'moveText',
    component: () => import(/* webpackChunkName: "svgAni" */ '../../views/svgAni/moveText/index.vue')
  },
  {
    path: '/stickPop',
    name: 'stickPop',
    component: () => import(/* webpackChunkName: "svgAni" */ '../../views/svgAni/stickPop/index.vue')
  },
]