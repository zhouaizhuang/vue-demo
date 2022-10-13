import { Menu, MenuItem, Submenu, Input, Select, Option, Button, Table, DatePicker, Page, Collapse, Panel, Icon, Message, Modal, Drawer, Switch } from "view-design"
export default {
  install(Vue){
    let allCom = require.context('./modules', false, /\.vue$/)
    allCom.keys().forEach(item => {
      Vue.component(item.replace(/\.\//g, '').replace(/\.vue/g, ''),  allCom(item).default)
    })
    Vue.component("Button", Button)  // button组件
    Vue.component("Table", Table)  // 表格组件
    Vue.component("Menu", Menu)  // 菜单组件
    Vue.component("Submenu", Submenu)  // 1级菜单组件
    Vue.component("MenuItem", MenuItem)  // 2级菜单组件
    Vue.component("Input", Input)  // input组件
    Vue.component("Select", Select)  // select下拉框组件
    Vue.component("Option", Option)  // select里的option选项组件
    Vue.component("Page", Page)  // 分页器组件
    Vue.component("DatePicker", DatePicker)  // 日期选择组件
    Vue.component("Collapse", Collapse)  // 折叠面板
    Vue.component("Panel", Panel)  // 折叠面板里要被折叠的面板
    Vue.component("Icon", Icon)  // 图标
    Vue.component("Modal", Modal)  // 模态框
    Vue.component("Drawer", Drawer)  // 抽屉
    Vue.component("iSwitch", Switch)  // 抽屉
    Vue.prototype.$Message = Message  // iview中Message组件是以API的方式书写的，所有组成时不能用component，而是要用Vue.prototype.$Message来声明注册
  }
}