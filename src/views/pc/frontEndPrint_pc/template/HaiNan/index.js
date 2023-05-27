import * as func from "./func.js"
export default {
  name: '',
  props: {
    isDebug: { // 开启debug，可以方便模板调试
      type: Boolean,
      default: false
    },
    renderData: { // 打印模板需要的数据
      type: [Object, Array],
      default: function(){
        return {}
      }
    },
    pageWidth: { // 打印纸宽带
      type: [Number, String],
      default: 794
    },
    pageHeight: { // 打印纸高度
      type: [Number, String],
      default: 1120
    },
  },
  components:{},
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