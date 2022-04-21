import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./common.css"
import "./utils/px2rem.js"
Vue.config.productionTip = false
// 使用自定义指令
import Directives from "./directives/index.js"
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import globalCommponent from "./globalComponents/index.js"
Vue.use(Directives)
Vue.use(ViewUI)
Vue.use(globalCommponent)


import {largeNumAdd, ms2Dhs, url2JSON, JSON2url} from "./common"
console.log('num1: 123000000000000000000000000010')
console.log('num2: 123000000000000000000000000009')
console.log('和为：' + largeNumAdd('123000000000000000000000000010', '123000000000000000000000000009'))


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
