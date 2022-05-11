export default [
  { path: '/linearLine', name: 'linearLine', component: () => import(/* webpackChunkName: "bugFix" */ '../../views/canvasAni/linearLine/index.vue') },
  { path: '/randomRect', name: 'randomRect', component: () => import(/* webpackChunkName: "bugFix" */ '../../views/canvasAni/randomRect/index.vue') },
]