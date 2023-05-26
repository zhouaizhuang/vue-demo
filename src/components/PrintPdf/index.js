import * as func from "./func.js"
export default {
  name: '',
  props:{
    urls: { // pdf链接地址
      type: Array,
      default: function(){
        return []
      },
    }
  },
  components:{},
  data(){
    return {
      A4Width: 794, // A4纸宽度
      A4Height: 1120,// A4纸高度
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