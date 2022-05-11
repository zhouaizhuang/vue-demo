export default [
  { path: '/linearLine', name: 'linearLine', component: () => import(/* webpackChunkName: "canvasAni" */ '../../views/canvasAni/linearLine/index.vue') },
  { path: '/randomRect', name: 'randomRect', component: () => import(/* webpackChunkName: "canvasAni" */ '../../views/canvasAni/randomRect/index.vue') },
  { path: '/circleAni', name: 'circleAni', component: () => import(/* webpackChunkName: "canvasAni" */ '../../views/canvasAni/circleAni/index.vue') },
  { path: '/arcStroke', name: 'arcStroke', component: () => import(/* webpackChunkName: "canvasAni" */ '../../views/canvasAni/arcStroke/index.vue') },
  { path: '/bezierLine', name: 'bezierLine', component: () => import(/* webpackChunkName: "canvasAni" */ '../../views/canvasAni/bezierLine/index.vue') },
]