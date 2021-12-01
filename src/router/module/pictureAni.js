export default [
  {
    path: '/walk',
    name: 'walk',
    component: () => import(/* webpackChunkName: "pictureAni" */ '../../views/pictureAni/walk/index.vue')
  },
]