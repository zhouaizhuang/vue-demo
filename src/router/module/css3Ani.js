export const css3Ani = [
  {
    path: '/carousel', // 轮播组件
    name: 'carousel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "css3Ani" */ '../../views/carousel/index.vue')
  },
  {
    path: '/numGrow',
    name: 'numGrow',
    component: () => import(/* webpackChunkName: "css3Ani" */ '../../views/numGrow/index.vue')
  },
  {
    path: '/breath',
    name: 'breath',
    component: () => import(/* webpackChunkName: "css3Ani" */ '../../views/breath/index.vue')
  },
  {
    path: '/arrow',
    name: 'arrow',
    component: () => import(/* webpackChunkName: "css3Ani" */ '../../views/arrow/index.vue')
  },
]