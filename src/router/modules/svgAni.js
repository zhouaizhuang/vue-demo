export default [
  { path: '/moveText', name: 'moveText', component: () => import(/* webpackChunkName: "svgAni" */ '../../views/svgAni/moveText/index.vue') },
  { path: '/moveSvg', name: 'moveSvg', component: () => import(/* webpackChunkName: "svgAni" */ '../../views/svgAni/moveSvg/index.vue') },
  { path: '/stickPop', name: 'stickPop', component: () => import(/* webpackChunkName: "svgAni" */ '../../views/svgAni/stickPop/index.vue') },
  { path: '/svgStroke', name: 'svgStroke', component: () => import(/* webpackChunkName: "svgAni" */ '../../views/svgAni/svgStroke/index.vue') },
  { path: '/svgProgress', name: 'svgProgress', component: () => import(/* webpackChunkName: "svgAni" */ '../../views/svgAni/svgProgress/index.vue') },
]