import * as func from "./func.js"
export default {
  name: '',
  components:{
  },
  data(){
    return {
      stateText: '',
      autoCapacity: true, // 自动识别
      autoFormate: true, // 自动格式化
      autoCopy: false, // 点击结果自动复制
      secret:'gagc#2017ABCDgagc#2017ABCD',
      iv: '01234567',
      oldVal: '{"name":"asda","aa":11,"name":"asda","aa":11,"name":"asda","aa":11,"name":"asda","aa":11,"name":"asda","aa":11,"name":"asda","aa":11,"name":"asda","aa":11,"name":"asda","aa":11,"name":"asda","aa":11,"name":"asda","aa":11,"name":"asda","aa":11}',
      newVal: '',
      _newVal: '', // 未经转换的值
      isShowOpt: false,
      keyOptions: [{secret:'gagc#2017ABCDgagc#2017ABCD', name: '测试环境gagc'}, {secret: 'H5ZLBACzrQARj7FOtpwIpvnP', name: '生产环境'}],
      type: 0, // 当前所处的状态，加密还是解密
    }
  },
  methods:{
    ...func,
  },
  async created(){
    await this.$Z.loadCss("//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css")
    await this.$Z.loadJs("//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js")
    hljs.initHighlightingOnLoad()
  },
  mounted(){
  },
}