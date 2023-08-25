import * as func from "./func.js"
export default {
  name: 'desc_pc',
  components:{
  },
  data(){
    return {
      stateText: '',
      autoCapacity: false, // 自动识别
      autoFormate: true, // 自动格式化
      autoCopy: true, // 点击结果自动复制
      secret:'gagc#2017ABCDgagc#2017ABCD',
      iv: '01234567',
      oldVal: '',
      newVal: '',
      newVal_: '', // 未经转换的值
      isShowOpt: false, // 是否显示秘钥下拉
      keyOptions: [{secret:'gagc#2017ABCDgagc#2017ABCD', name: '测试环境gagc'}, {secret: 'H5ZLBACzrQARj7FOtpwIpvnP', name: '生产环境'}],
      isShowIv: false, // 是否显示偏移量
      ivOptions: [{iv:'01234567', name: '01234567'}],
      type: 0, // 当前所处的状态，加密还是解密
    }
  },
  methods:{
    ...func,
  },
  async created(){
    await _.loadCss("//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css")
    await _.loadJs("//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js")
    hljs.initHighlightingOnLoad()
  },
  mounted(){
  },
}