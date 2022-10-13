import * as func from "./func.js"
export default {
  name: '',
  components:{
  },
  data(){
    return {
      stateText: '',
      autoCapacity: true,
      secret:'gagc#2017ABCDgagc#2017ABCD',
      iv: '01234567',
      oldVal: '',
      newVal: '',
      isShowOpt: false,
      keyOptions: [{secret:'gagc#2017ABCDgagc#2017ABCD', name: '测试环境gagc'}, {secret: 'H5ZLBACzrQARj7FOtpwIpvnP', name: '生产环境'}]
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