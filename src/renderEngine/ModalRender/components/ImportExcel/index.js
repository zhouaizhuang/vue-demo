import * as func from "./func.js"
export default {
  name: '',
  props:{
    modalType: { // 0：关闭    1：显示下载模板   2：导入中   3：导入完成或者失败
      type: [Number, String],
      default: 0
    },
    modalObj: {
      type: Object,
      default: () => ({})
    }
  },
  components:{},
  data(){
    return {
      files: {},
      importResult: {},
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