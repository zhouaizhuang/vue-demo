import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      numPages:1, // 总页数
      pageNum:1, // 当前页码
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    this.showpdf('http://static.shanhuxueyuan.com/test.pdf')
  },
}