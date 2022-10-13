import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      stateText: '',
      autoCapacity: true,
      secret:'gagc#2017ABCDgagc#2017ABCD',
      oldVal: '',
      newVal: '',
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