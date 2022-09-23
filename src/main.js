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
Vue.use(ViewUI)
// 批量注册全局组件
import globalCommponent from "./globalComponents/index.js"
Vue.use(globalCommponent)
import Print from "./utils/print.js"
Vue.use(Print)
// axios全局挂载vue实例
import network from "./utils/network.js"
Vue.use(network)
// 全局挂载自定义函数库
import * as Z from './common.js'
Vue.prototype.$Z = Z
Z.reWriteLog() // 关闭生产环境的console.log
// 极验验证
import SlideVerify from 'vue-monoplasty-slide-verify'
Vue.use(SlideVerify)
Vue.config.ignoredElements = ['wx-open-launch-weapp']

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
