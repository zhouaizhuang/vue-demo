import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./common.css"
import "./utils/px2rem.js"
Vue.config.productionTip = false
// 使用自定义指令
import Directives from "./directives/index.js"
Vue.use(Directives)
// 引入iview
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import Print from "./utils/print.js"
Vue.use(ViewUI)
// 批量注册全局组件
import globalCommponent from "./globalComponents/index.js"
Vue.use(globalCommponent)
Vue.use(Print)
// axios全局挂载vue实例
import { request, post, startPost, endPost } from "./utils/network.js"
Vue.prototype.$request = request
Vue.prototype.$post = post
Vue.prototype.$startPost = startPost
Vue.prototype.$endPost = endPost
// 全局挂载自定义函数库
import * as Z from './common.js'
Vue.prototype.$Z = Z
Z.reWriteLog()
// 极验验证
import SlideVerify from 'vue-monoplasty-slide-verify'
Vue.use(SlideVerify)
Vue.config.ignoredElements = ['wx-open-launch-weapp']

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
