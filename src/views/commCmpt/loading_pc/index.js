import * as func from "./func.js"
let allCom = require.context('./components', true, /\.vue$/)
const modules = {}
allCom.keys().forEach(item => {
  console.log(allCom(item).default)
  modules[item.replace(/\.\//g, '').replace(/\.vue/g, '')] = allCom(item).default
})
export default {
  name: '',
  components: modules,
  data(){
    return {
      
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    
  },
}