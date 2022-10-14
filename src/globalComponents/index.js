import { Input, Select, Option, Button, Message, Switch, Icon, Table, Page, Form } from "view-design"
export default {
  install(Vue){
    let allCom = require.context('./modules', false, /\.vue$/)
    allCom.keys().forEach(item => {
      Vue.component(item.replace(/\.\//g, '').replace(/\.vue/g, ''),  allCom(item).default)
    })
    Vue.component("Button", Button)  // button组件
    Vue.component("Input", Input)  // input组件
    Vue.component("Select", Select)  // select下拉框组件
    Vue.component("Option", Option)  // select里的option选项组件
    Vue.component("iSwitch", Switch)  // 切换
    Vue.component("Icon", Icon)  // 图标Page
    Vue.component("Table", Table)  // Table
    Vue.component("Page", Page)  // Page
    Vue.component("Form", Form)  // Page
    Vue.prototype.$Message = Message  // iview中Message组件是以API的方式书写的，所有组成时不能用component，而是要用Vue.prototype.$Message来声明注册
  }
}