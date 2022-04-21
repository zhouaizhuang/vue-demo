export default {
  install(Vue){
    let allCom = require.context('./modules', false, /\.vue$/)
    allCom.keys().forEach(item => {
      Vue.component(item.replace(/\.\//g, '').replace(/\.vue/g, ''),  allCom(item).default)
    })
  }
}