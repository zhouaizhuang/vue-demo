import * as func from "./func.js"
export default {
  name: '',
  props:{
    pdfUrl: { // pdf链接地址
      type: String,
      default: '',
    },
  },
  components:{},
  data(){
    return {
      // 视网膜报告的对象
      reportPdf: {
        page: 1,
        totalPage: 5,
        isShowLoadMore: true
      },
    }
  },
  methods:{
    ...func,
  },
  watch:{
    pdfUrl: {
      handler: function(newVal, oldVal) {
        this.showpdf(newVal)
      },
      deep: true, // 监听深层对象
      immediate: true, // 会在页面渲染之前， 先执行一遍这个监听
    },
  },
  created(){
    
  },
  mounted(){
    this.bindObserve()
  },
}