import * as func from "./func.js"
export default {
  name: '',
  props:{
    pdfUrl: { // pdf链接地址
      type: String,
      default: '',
    },
    loadMoreClassName: { // 一个页面中多次调用此组件的话，就会导致无法监听底部的loadmore进入视口
      type: String,
      default: 'loadMore',
    }
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
        if(newVal.includes('.pdf')) {
          this.showpdf(newVal)
        }
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