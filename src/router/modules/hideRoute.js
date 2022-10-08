export default [
  { path: '/url', name: 'url', component: () => import(/* webpackChunkName: "hideRoute" */ '../../views/hideRoute/url/index.vue')},
]