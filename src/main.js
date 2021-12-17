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
/**测试v-permission */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
