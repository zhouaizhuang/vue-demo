export const css3Ani = [
  {
    path: '/carousel', // 轮播组件
    name: 'carousel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "css3Ani" */ '../../views/css3Ani/carousel/index.vue')
  },
  {
    path: '/numGrow',
    name: 'numGrow',
    component: () => import(/* webpackChunkName: "css3Ani" */ '../../views/css3Ani/numGrow/index.vue')
  },
  {
    path: '/breath',
    name: 'breath',
    component: () => import(/* webpackChunkName: "css3Ani" */ '../../views/css3Ani/breath/index.vue')
  },
  {
    path: '/arrow',
    name: 'arrow',
    component: () => import(/* webpackChunkName: "css3Ani" */ '../../views/css3Ani/arrow/index.vue')
  },
  {
    path: '/buttery',
    name: 'buttery',
    component: () => import(/* webpackChunkName: "css3Ani" */ '../../views/css3Ani/buttery/index.vue')
  },
  {
    path: '/slide',
    name: 'slide',
    component: () => import(/* webpackChunkName: "css3Ani" */ '../../views/css3Ani/slide/index.vue')
  },
  {
    path: '/countDown',
    name: 'countDown',
    component: () => import(/* webpackChunkName: "css3Ani" */ '../../views/css3Ani/countDown/index.vue')
  },
  {
    path: '/guidePoint',
    name: 'guidePoint',
    component: () => import(/* webpackChunkName: "css3Ani" */ '../../views/css3Ani/guidePoint/index.vue')
  },
]